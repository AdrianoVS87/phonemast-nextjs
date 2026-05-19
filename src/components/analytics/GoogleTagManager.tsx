/**
 * Google Tag Manager — container loader.
 *
 * Loaded in parallel with GoogleScripts (gtag.js for GA4 + Ads).
 * GA4 + Google Ads conversion are NOT routed through GTM — they fire direct
 * via gtag.js in GoogleScripts. The GTM container is used for additional
 * tracking the agency configures (Enhanced Conversions, Meta Pixel, offline
 * conversion imports, etc).
 *
 * GTM automatically respects Google Consent Mode v2 defaults set by
 * ConsentDefault — tags fire only when their consent type is granted.
 */
import Script from "next/script";

export const GTM_ID = "GTM-5TJVB9W9";

export default function GoogleTagManager() {
  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  );
}

export function GoogleTagManagerNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
