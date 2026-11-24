/**
 * Google tags (gtag.js for GA4 and Google Ads, and the GTM container) load ONLY after the visitor
 * has granted consent in the cookie banner, never before and never on the critical path.
 * Consent Mode v2 values are set from the visitor's choice before any tag script is added.
 *
 * Every visitor gets the same behaviour: nothing here looks at the user agent.
 */
import { onAdvertisingConsent } from "./clickId";

export interface ConsentPrefs {
  analytics: boolean;
  advertising: boolean;
}

export const GTM_ID = "GTM-5TJVB9W9";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function clean(value: string | undefined): string | undefined {
  const v = value?.trim();
  return v && v !== "__UNSET__" ? v : undefined;
}

const GA4_ID = clean(process.env.NEXT_PUBLIC_GA4_ID);
const ADS_ID = clean(process.env.NEXT_PUBLIC_ADS_CONVERSION_ID);

let loaded = false;

function consentState(prefs: ConsentPrefs) {
  return {
    ad_storage: prefs.advertising ? "granted" : "denied",
    ad_user_data: prefs.advertising ? "granted" : "denied",
    ad_personalization: prefs.advertising ? "granted" : "denied",
    analytics_storage: prefs.analytics ? "granted" : "denied",
  };
}

function ensureGtag(): (...args: unknown[]) => void {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // gtag.js reads the `arguments` object, not an array
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }
  return window.gtag;
}

function addScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

/**
 * Apply the visitor's choice. Updates Consent Mode, and the first time anything is granted, loads
 * the tags. With nothing granted, no Google script is ever requested.
 */
export function applyConsent(prefs: ConsentPrefs): void {
  if (typeof window === "undefined") return;
  const gtag = ensureGtag();
  if (!loaded) gtag("consent", "default", { ...consentState({ analytics: false, advertising: false }), security_storage: "granted" });
  gtag("consent", "update", consentState(prefs));
  onAdvertisingConsent(prefs.advertising);
  if (loaded || !(prefs.analytics || prefs.advertising)) return;
  loaded = true;

  const containerId = GA4_ID ?? ADS_ID;
  if (containerId) {
    gtag("js", new Date());
    if (GA4_ID) gtag("config", GA4_ID, { anonymize_ip: true });
    if (ADS_ID) gtag("config", ADS_ID);
    addScript(`https://www.googletagmanager.com/gtag/js?id=${containerId}`);
  }
  window.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
  addScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
}
