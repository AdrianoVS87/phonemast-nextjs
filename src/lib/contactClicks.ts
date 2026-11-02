/**
 * Pure rules for measuring phone and WhatsApp taps (scripts/contact-clicks.check.mjs).
 * Neither the number tapped nor the query string is ever sent, so no personal data leaves the page.
 */
export type ContactKind = "phone" | "whatsapp";

export const CONTACT_EVENTS: Record<ContactKind, string> = {
  phone: "phone_click",
  whatsapp: "whatsapp_click",
};

export function classifyContactLink(href: string | null | undefined): ContactKind | null {
  const value = href?.trim().toLowerCase();
  if (!value) return null;
  if (value.startsWith("tel:")) return "phone";
  try {
    const { hostname } = new URL(value, "https://www.phonemastadvice.co.uk");
    return hostname === "wa.me" || hostname === "www.wa.me" ? "whatsapp" : null;
  } catch {
    return null;
  }
}

export interface ContactConsent {
  analytics: boolean;
  advertising: boolean;
}

/** Reads the stored banner choice (see ConsentBanner.tsx). Anything else counts as denied. */
export function parseConsent(raw: string | null | undefined): ContactConsent {
  const denied = { analytics: false, advertising: false };
  if (!raw) return denied;
  try {
    const stored = JSON.parse(raw);
    if (stored?.prefs) {
      return { analytics: stored.prefs.analytics === true, advertising: stored.prefs.advertising === true };
    }
    return stored?.status === "accepted" ? { analytics: true, advertising: true } : denied;
  } catch {
    return denied;
  }
}
