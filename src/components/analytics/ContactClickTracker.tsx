"use client";

import { useEffect } from "react";
import { CONTACT_EVENTS, classifyContactLink, parseConsent } from "@/lib/contactClicks";
import { fireContactConversion } from "@/lib/gtagConversion";

const CONSENT_KEY = "cookie_consent_v1";

function storedConsent() {
  try {
    return parseConsent(window.localStorage.getItem(CONSENT_KEY));
  } catch {
    return parseConsent(null);
  }
}

function linkLocation(link: Element): string {
  if (link.closest("header")) return "header";
  if (link.closest("main")) return "main";
  if (link.closest("footer")) return "footer";
  return "floating";
}

/**
 * Measures taps on tel: and wa.me links, wherever they are on the page. Renders nothing.
 * Does nothing without gtag or without the matching consent: analytics for the GA4 event,
 * advertising for the optional Ads conversion.
 */
export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (typeof window.gtag !== "function") return;
      const link = (event.target as Element | null)?.closest?.("a[href]");
      const kind = classifyContactLink(link?.getAttribute("href"));
      if (!link || !kind) return;

      const consent = storedConsent();
      if (consent.analytics) {
        const ga4Id = process.env.NEXT_PUBLIC_GA4_ID?.trim();
        window.gtag("event", CONTACT_EVENTS[kind], {
          link_location: linkLocation(link),
          page_path: window.location.pathname,
          ...(ga4Id && ga4Id !== "__UNSET__" ? { send_to: ga4Id } : {}),
        });
      }
      if (consent.advertising) fireContactConversion(kind);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
