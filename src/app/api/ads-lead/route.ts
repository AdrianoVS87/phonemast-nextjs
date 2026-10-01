import { createHash, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

import { LEAD_FROM, LEAD_INBOX, escapeHtml, getResend, sendAcknowledgement, sendMonitorPing } from "@/lib/leadMail";

export const runtime = "nodejs";


// SHA-256 of the key configured on the Google Ads lead form asset.
// The key itself is never stored in this repository.
const KEY_SHA256 = "33b1b2e49afd1013d4b42d253b35c27f33c88d9c022a600c08781909c919ff80";

interface AdsLeadColumn {
  column_id?: string;
  column_name?: string;
  string_value?: string;
}

interface AdsLeadPayload {
  lead_id?: string;
  google_key?: string;
  is_test?: boolean;
  campaign_id?: number | string;
  form_id?: number | string;
  user_column_data?: AdsLeadColumn[];
}

function keyMatches(key: string | undefined): boolean {
  if (!key) return false;
  const given = createHash("sha256").update(key).digest();
  const expected = Buffer.from(KEY_SHA256, "hex");
  return given.length === expected.length && timingSafeEqual(given, expected);
}

/**
 * Google Ads lead form webhook. Without it, leads submitted on the native lead
 * form stay inside Google Ads and nobody is notified.
 */
export async function POST(req: Request) {
  let payload: AdsLeadPayload;
  try {
    payload = (await req.json()) as AdsLeadPayload;
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  if (!keyMatches(payload.google_key)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const columns = (payload.user_column_data ?? []).filter((c) => c.string_value);
  const value = (id: string) => columns.find((c) => c.column_id === id)?.string_value?.trim() ?? "";
  const name =
    value("FULL_NAME") || [value("FIRST_NAME"), value("LAST_NAME")].filter(Boolean).join(" ") || "Unknown";
  const email = value("EMAIL");
  const kind = payload.is_test ? "TEST Google Ads lead form" : "Google Ads lead form";

  const rows = columns
    .map(
      (c) => `<tr>
        <td style="padding: 8px 0; font-weight: bold; width: 160px; color: #6b7280; font-size: 14px;">${escapeHtml(c.column_name || c.column_id || "Field")}</td>
        <td style="padding: 8px 0; color: #1a1a2e;">${escapeHtml(c.string_value ?? "")}</td>
      </tr>`,
    )
    .join("");
  const text =
    `${kind} submission\n\n` +
    columns.map((c) => `${c.column_name || c.column_id}: ${c.string_value}`).join("\n") +
    `\n\nLead ID: ${payload.lead_id ?? "n/a"}\nThis person filled in the form inside the Google advert and has not visited the website.`;

  try {
    const { data: sent, error } = await getResend().emails.send({
      from: LEAD_FROM,
      to: LEAD_INBOX,
      ...(email ? { replyTo: email } : {}),
      subject: `${kind}: ${name} — phonemastadvice.co.uk`,
      text,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B4F72; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">${escapeHtml(kind)} submission</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">Submitted inside the Google advert</p>
          </div>
          <div style="background: #f9f8f5; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">${rows}</table>
            <p style="color: #374151; margin-top: 16px; font-size: 14px; line-height: 1.6;">
              This person filled in the form inside the Google advert and has not visited the website. Reply to this email to reach them.
            </p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
            The Phone Mast Advice Company Ltd — Reg. 13115582
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error (ads-lead webhook):", JSON.stringify(error));
      await sendMonitorPing(kind, false);
      // A non-200 response makes Google retry the delivery.
      return NextResponse.json({ error: "delivery failed" }, { status: 502 });
    }

    console.log("Email sent (ads-lead webhook), Resend ID:", sent?.id);
    await Promise.allSettled([
      !payload.is_test && email ? sendAcknowledgement(name, email) : Promise.resolve(),
      sendMonitorPing(kind, true, sent?.id),
    ]);
    return NextResponse.json({});
  } catch (error) {
    console.error("Exception in ads-lead webhook:", error);
    await sendMonitorPing(kind, false);
    return NextResponse.json({ error: "delivery failed" }, { status: 502 });
  }
}
