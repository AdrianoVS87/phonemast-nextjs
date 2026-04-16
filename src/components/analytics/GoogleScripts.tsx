/**
 * GoogleScripts — gated gtag.js + GA4 + Ads loader.
 *
 * Loads ONLY when the env vars are populated. When Matt finally provides
 * the GA4 / Ads IDs we just set the env vars in Vercel → redeploy → live.
 *
 * IMPORTANT: scripts load in afterInteractive regardless of consent state.
 * Google's Consent Mode v2 (set to denied by default in <ConsentDefault />)
 * is what prevents cookie writes / PII sharing until the user grants consent.
 * This is the pattern Google recommends — do not gate the script itself.
 */
import Script from "next/script";

/** Treat the Vercel placeholder sentinel as "not set". */
function cleanEnv(v: string | undefined): string | undefined {
  const trimmed = v?.trim();
  if (!trimmed || trimmed === "__UNSET__") return undefined;
  return trimmed;
}

export default function GoogleScripts() {
  const ga4Id = cleanEnv(process.env.NEXT_PUBLIC_GA4_ID);
  const adsId = cleanEnv(process.env.NEXT_PUBLIC_ADS_CONVERSION_ID);

  // Neither configured → render nothing. Site works the same.
  if (!ga4Id && !adsId) return null;

  // Prefer GA4 for gtag.js container; fall back to Ads conversion ID
  // if only Ads is set (both are valid ?id= values for gtag.js).
  const gtagContainerId = ga4Id || adsId;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagContainerId}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            ${ga4Id ? `gtag('config', '${ga4Id}', { anonymize_ip: true });` : ""}
            ${adsId ? `gtag('config', '${adsId}');` : ""}
          `,
        }}
      />
    </>
  );
}
