/**
 * Google Consent Mode v2 — default state.
 *
 * Must render in the <head> BEFORE any other Google script (gtag.js, ads, etc).
 * We use `dangerouslySetInnerHTML` with Next's <Script beforeInteractive> so the
 * code is inlined synchronously at HTML parse time — this is the only way to
 * guarantee the defaults are set before gtag.js loads and reads them.
 *
 * Policy: strictest-everywhere (no region override). EEA + UK + Switzerland
 * would fail the audit if any tracking fires before the user clicks Accept,
 * so we deny globally and let the banner update on consent.
 */
import Script from "next/script";

export default function ConsentDefault() {
  return (
    <Script
      id="gtag-consent-default"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            security_storage: 'granted',
            wait_for_update: 500
          });

          // Restore prior consent decision (if any) BEFORE gtag.js loads
          try {
            var raw = window.localStorage && window.localStorage.getItem('cookie_consent_v1');
            if (raw) {
              var parsed = JSON.parse(raw);
              if (parsed && parsed.prefs) {
                gtag('consent', 'update', {
                  ad_storage: parsed.prefs.advertising ? 'granted' : 'denied',
                  ad_user_data: parsed.prefs.advertising ? 'granted' : 'denied',
                  ad_personalization: parsed.prefs.advertising ? 'granted' : 'denied',
                  analytics_storage: parsed.prefs.analytics ? 'granted' : 'denied'
                });
              } else if (parsed && parsed.status === 'accepted') {
                gtag('consent', 'update', {
                  ad_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                  analytics_storage: 'granted'
                });
              }
            }
          } catch (_) { /* localStorage unavailable — stay denied */ }
        `,
      }}
    />
  );
}
