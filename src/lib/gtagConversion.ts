/**
 * Fire a Google Ads conversion event after a form submit succeeds.
 *
 * No-ops when:
 *  - gtag isn't loaded (env vars unset, or user rejected advertising)
 *  - ADS_CONVERSION_ID env var is empty
 *  - the supplied label is empty
 *
 * When both Ads ID + label are present AND the user has consented to
 * advertising storage, Consent Mode v2 + gtag.js will emit the conversion
 * hit. Otherwise Google's "non-personalised advertising" fallback applies
 * (aggregated, cookieless pings) — which is still valuable for the Matt's
 * Ads campaign and is exactly what Google asks for in "conversion measurement"
 * of the EU UCP requirements.
 */

type FormKind = "contact" | "lead" | "handbook";

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

export function fireConversion(kind: FormKind) {
  if (typeof window === "undefined") return;

  const adsId = cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_ID);
  if (!adsId) return;

  const labelMap: Record<FormKind, string | undefined> = {
    contact: cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_CONTACT),
    lead: cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_LEAD),
    handbook: cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_HANDBOOK),
  };
  const label = labelMap[kind];
  if (!label) return;

  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: `${adsId}/${label}`,
  });
}
