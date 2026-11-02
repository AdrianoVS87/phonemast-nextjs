import { claimFormConversion, claimOnce, type SessionStore } from "./conversionDedupe";
import type { ContactKind } from "./contactClicks";

/**
 * Fire a Google Ads conversion event after the server confirms a real form send.
 *
 * No-ops when:
 *  - gtag isn't loaded
 *  - ADS_CONVERSION_ID env var is empty
 *  - the supplied label is empty
 *  - the rules in conversionDedupe.ts say no: no server id (silent spam drop),
 *    a "no" to the mast question, or this form kind already counted this session
 *
 * gtag is defined by <ConsentDefault /> for every visitor, so this also runs when
 * advertising was denied. Consent Mode then decides what is sent: a full conversion
 * after consent, otherwise a cookieless ping that Ads can only model.
 *
 * The server id goes out as `transaction_id`, so Ads also dedupes on its side.
 */

type FormKind = "contact" | "lead" | "handbook" | "lease-check" | "rent-estimate";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function cleanEnv(v: string | undefined): string | undefined {
  const trimmed = v?.trim();
  if (!trimmed || trimmed === "__UNSET__") return undefined;
  return trimmed;
}

export function sessionStore(): SessionStore | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function fireConversion(kind: FormKind, submission: { id?: string; hasMast?: string }) {
  if (typeof window === "undefined") return;

  const adsId = cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_ID);
  if (!adsId) return;

  // Support both full format (AW-123/label) and label-only format
  // The env vars can be either:
  //   - Full: NEXT_PUBLIC_ADS_CONVERSION_LABEL_CONTACT=AW-405554320/iZeuCO-v7qQcEJCJscEB
  //   - Partial: NEXT_PUBLIC_ADS_CONVERSION_LABEL_CONTACT=iZeuCO-v7qQcEJCJscEB
  const labelMap: Record<FormKind, string | undefined> = {
    contact: cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_CONTACT),
    lead: cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_LEAD),
    handbook: cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_HANDBOOK),
    "lease-check": cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_LEASE_CHECK),
    "rent-estimate": cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_RENT_ESTIMATE),
  };
  const label = labelMap[kind];
  if (!label) return;

  if (typeof window.gtag !== "function") return;

  if (!claimFormConversion({ kind, ...submission }, sessionStore())) return;

  // If label already contains the full format (contains /), use as-is,
  // otherwise prepend the adsId
  const sendTo = label.includes("/") ? label : `${adsId}/${label}`;

  window.gtag("event", "conversion", {
    send_to: sendTo,
    transaction_id: submission.id,
  });
}

/**
 * Optional Ads conversion for a phone or WhatsApp tap, once per session per kind. Off until the
 * matching label env var is set. The caller checks advertising consent first.
 */
export function fireContactConversion(kind: ContactKind) {
  const adsId = cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_ID);
  const label =
    kind === "phone"
      ? cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_PHONE)
      : cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_WHATSAPP);
  if (!adsId || !label || typeof window.gtag !== "function") return;
  if (!claimOnce(`pma_conversion_${kind}`, sessionStore())) return;

  window.gtag("event", "conversion", {
    send_to: label.includes("/") ? label : `${adsId}/${label}`,
  });
}
