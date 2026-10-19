import { createSign } from "node:crypto";

/**
 * Lead log: one row per enquiry in a Google Sheet, so enquiries can be counted per channel and
 * followed up, independently of the office inbox. Refused (suspected spam) submissions are
 * logged too, with their reason, so a wrongly refused person can be found and called back.
 *
 * Best effort: never throws, never delays the reply by more than a few seconds. Disabled unless
 * LEAD_SHEET_ID and GOOGLE_SA_KEY (service-account JSON, raw or base64) are set.
 */
export interface LeadRow {
  source: "website" | "google-ads-form";
  form: string;
  status: "sent" | "refused" | "failed";
  name?: string;
  email?: string;
  phone?: string;
  detail?: string; // refusal reason codes, Resend ID, lead ID
  clickId?: string; // "gclid=..." / "gbraid=..." / "wbraid=..." when the visitor came from a Google ad
}

const SHEET_RANGE = "Leads!A:J";
const TIMEOUT_MS = 6_000;

interface ServiceAccount {
  client_email: string;
  private_key: string;
}

function serviceAccount(): ServiceAccount | null {
  const raw = process.env.GOOGLE_SA_KEY;
  if (!raw) return null;
  try {
    const json = raw.trim().startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8");
    const sa = JSON.parse(json) as Partial<ServiceAccount>;
    return sa.client_email && sa.private_key ? (sa as ServiceAccount) : null;
  } catch {
    return null;
  }
}

function b64url(input: Buffer | string): string {
  return Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function accessToken(sa: ServiceAccount, signal: AbortSignal): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 600,
    }),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const jwt = `${header}.${claims}.${b64url(signer.sign(sa.private_key))}`;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: jwt }),
    signal,
  });
  if (!res.ok) throw new Error(`token ${res.status}`);
  return ((await res.json()) as { access_token: string }).access_token;
}

export async function appendLeadRow(row: LeadRow): Promise<void> {
  const sheetId = process.env.LEAD_SHEET_ID;
  const sa = serviceAccount();
  if (!sheetId || !sa) return;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const token = await accessToken(sa, controller.signal);
    const values = [[
      new Date().toISOString(),
      row.source,
      row.form,
      row.status,
      row.name ?? "",
      row.email ?? "",
      row.phone ?? "",
      row.detail ?? "",
      "", // follow-up status, filled in by the office (qualified / junk / no answer)
      row.clickId ?? "", // read by ads_upload_qualified.py to report qualified enquiries to Google Ads
    ]];
    const url =
      `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}/values/` +
      `${encodeURIComponent(SHEET_RANGE)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values }),
      signal: controller.signal,
    });
    if (!res.ok) console.error("[lead-log] append failed:", res.status, (await res.text()).slice(0, 200));
  } catch (error) {
    console.error("[lead-log] error:", error instanceof Error ? error.message : error);
  } finally {
    clearTimeout(timer);
  }
}
