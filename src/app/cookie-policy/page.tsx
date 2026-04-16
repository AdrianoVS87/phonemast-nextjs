import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ManageCookiesLink from "@/components/consent/ManageCookiesLink";
import { Fragment } from "react";

/** Auto-link https:// URLs in policy text (see Privacy Policy for twin impl.) */
function renderWithLinks(text: string) {
  const urlRx = /(https?:\/\/[^\s)]+[^\s.,;:!?)])/g;
  const parts = text.split(urlRx);
  return parts.map((p, i) =>
    urlRx.test(p) ? (
      <a
        key={i}
        href={p}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1B4F72", fontWeight: 600, textDecoration: "underline" }}
      >
        {p}
      </a>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    ),
  );
}

export const metadata: Metadata = {
  title: "Cookie Policy | The Phone Mast Advice Company Ltd",
  description:
    "Cookie policy for The Phone Mast Advice Company Ltd. Information on cookies used on our website and how to manage them.",
  alternates: { canonical: "https://phonemastadvice.co.uk/cookie-policy" },
  robots: { index: false },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Cookie Policy" }]} />

      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#1a1a2e",
              marginBottom: "0.5rem",
            }}
          >
            Cookie Policy
          </h1>
          <p style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "2rem" }}>
            Last updated: March 2025
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            This Cookie Policy explains how The Phone Mast Advice Company Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar tracking technologies on our website. It should be read alongside our{" "}
            <a href="/privacy-policy" style={{ color: "#1B4F72", fontWeight: 600 }}>
              Privacy Policy
            </a>
            .
          </p>

          {[
            {
              heading: "1. What Are Cookies?",
              content: `Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owner. Cookies can be "session cookies" (which expire when you close your browser) or "persistent cookies" (which remain on your device for a set period or until you delete them).`,
            },
            {
              heading: "2. How We Use Cookies",
              content: `We use cookies on our website for the following purposes:

Essential/Strictly Necessary Cookies
These cookies are required for the website to function correctly. They enable core functionality such as page navigation and access to secure areas. The website cannot function properly without these cookies, and they cannot be disabled.

Analytics Cookies
We use analytics cookies (such as Google Analytics) to understand how visitors use our website — which pages are visited, how long visitors stay, and what content is most useful. This helps us improve the site. These cookies collect information in an anonymised and aggregated form.

Functional Cookies
Functional cookies allow the website to remember choices you make (such as language preferences) and provide enhanced, more personalised features.

We do not currently use advertising or targeting cookies on this website.`,
            },
            {
              heading: "3. Specific Cookies We Use",
              content: `The following categories of cookies may be set on your device when you visit our website:

Essential Cookies
• Session management cookies (expire when browser is closed)
• Security cookies to prevent cross-site request forgery

Analytics Cookies (with your consent)
• Google Analytics cookies (_ga, _gid) — used to distinguish users and track sessions. Data is anonymised. Duration: up to 2 years.

We review our cookie usage periodically and update this policy accordingly.`,
            },
            {
              heading: "4. Your Cookie Choices",
              content: `When you first visit our website, you will be asked to consent to non-essential cookies. You can:

• Accept all cookies
• Reject non-essential cookies (only strictly necessary cookies will be set)
• Manage your preferences through your browser settings

You can also control and delete cookies at any time through your browser settings. The following links provide guidance for common browsers:

• Google Chrome: Settings > Privacy and Security > Cookies
• Mozilla Firefox: Options > Privacy & Security > Cookies
• Safari: Preferences > Privacy
• Microsoft Edge: Settings > Cookies and Site Permissions

Please note that restricting cookies may affect the functionality of our website.`,
            },
            {
              heading: "5. Advertising / Marketing Cookies",
              content: `These cookies are used for personalised and non-personalised advertising when you have consented via our cookie banner.

• _gcl_au, _gcl_aw — Google Ads conversion tracking. Measures the effectiveness of our Google Ads campaigns. Provider: Google. Duration: up to 90 days.
• IDE, test_cookie — Google Ads remarketing via Google DoubleClick. Shows our advertisements on other websites you visit. Provider: Google. Duration: up to 13 months.
• _gads, _gpi — Google ad preferences and frequency capping. Provider: Google. Duration: up to 13 months.

If you reject or only allow essential cookies, these advertising cookies will NOT be set and Google's Consent Mode will fall back to limited, cookieless signals (used for aggregated ad reporting and fraud prevention only — this is Google's "non-personalised advertising" mode).

You can opt out of personalised Google advertising at any time via Google Ads Settings: https://adssettings.google.com

Learn more about how Google collects and uses your data at Google's Business Data Responsibility Site: https://business.safety.google/privacy/`,
            },
            {
              heading: "6. Third-Party Cookies",
              content: `Our website may include content from third parties (such as embedded maps or social media links) that may set their own cookies. We do not control these cookies, and they are governed by the relevant third party's privacy and cookie policies. We recommend reviewing those policies directly.`,
            },
            {
              heading: "7. Changes to This Cookie Policy",
              content: `We may update this Cookie Policy from time to time as we add or change functionality on our website, or as legislation changes. We will post the updated policy on this page with a revised date. Continued use of our website after changes are posted constitutes your acceptance of those changes.`,
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#1B4F72",
                  marginBottom: "0.75rem",
                }}
              >
                {section.heading}
              </h2>
              <div
                style={{
                  fontSize: "1.0625rem",
                  color: "#374151",
                  lineHeight: 1.75,
                  whiteSpace: "pre-line",
                }}
              >
                {renderWithLinks(section.content)}
              </div>
            </div>
          ))}

          <div
            style={{
              backgroundColor: "#f0f7fc",
              border: "1px solid #cddfee",
              borderRadius: "0.75rem",
              padding: "1.25rem 1.5rem",
              marginTop: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ fontSize: "1rem", color: "#1a1a2e", lineHeight: 1.6, margin: 0 }}>
              <strong>Change your mind?</strong> You can{" "}
              <ManageCookiesLink
                style={{ color: "#1B4F72", fontWeight: 600, textDecoration: "underline" }}
              />{" "}
              at any time to review or update your consent choices.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              Questions about cookies or our data practices? Contact us at:{" "}
              <a href="mailto:info@phonemastadvice.co.uk" style={{ color: "#1B4F72", fontWeight: 600 }}>
                info@phonemastadvice.co.uk
              </a>. The Phone Mast Advice Company Ltd, Company Reg: 13115582.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
