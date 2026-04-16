import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Fragment } from "react";

/**
 * Auto-link https:// URLs found inline in policy text, so that the required
 * Google Advertising Services section renders real clickable links to
 * business.safety.google/privacy/ and adssettings.google.com (Google UCP Issue 1.2).
 */
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
  title: "Privacy Policy | The Phone Mast Advice Company Ltd",
  description:
    "Privacy policy for The Phone Mast Advice Company Ltd. How we collect, use, and protect your personal data in accordance with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "https://phonemastadvice.co.uk/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

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
            Privacy Policy
          </h1>
          <p style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "2rem" }}>
            Last updated: March 2025
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            This Privacy Policy explains how The Phone Mast Advice Company Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, stores, and protects personal data when you use our website or engage our services. We are committed to protecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          {[
            {
              heading: "1. Who We Are",
              content: `The Phone Mast Advice Company Ltd is a company registered in England and Wales (Company Registration: 13115582). Our registered office is at: 167-169 Great Portland Road, 5th Floor, London, W1W 5PF. We act as the data controller for personal data collected through this website and our services. If you have any questions about how we process your data, please contact us at info@phonemastadvice.co.uk.`,
            },
            {
              heading: "2. What Personal Data We Collect",
              content: `We may collect the following categories of personal data:

Contact information: name, email address, telephone number, postal address
Property information: details of land or property you own or manage, phone mast lease details
Communication data: records of correspondence between you and us, including enquiry forms, emails, and phone calls
Technical data: IP addresses, browser type, device information, and website usage data collected via cookies and similar technologies (see our Cookie Policy)
Financial data: information relevant to rent reviews or fee arrangements, where provided

We do not collect special category data (such as health, ethnic origin, or criminal records) unless you specifically provide it in connection with a service request.`,
            },
            {
              heading: "3. How We Collect Personal Data",
              content: `We collect personal data:

• When you complete a contact form, enquiry form, or free rent estimate/lease check form on our website
• When you contact us by telephone, email, or WhatsApp
• When you engage our professional services
• Through website analytics and cookies (with your consent where required)
• From third parties, such as referrals from solicitors or other professionals`,
            },
            {
              heading: "4. Why We Process Your Data (Legal Basis)",
              content: `We process your personal data on the following legal bases:

Contract: to provide the professional services you have requested or to take steps at your request prior to entering a contract
Legitimate interests: to manage our business, respond to enquiries, improve our services, and protect our legal interests — where these are not overridden by your rights
Legal obligation: where we are required to process data to comply with applicable law
Consent: for marketing communications (where you have opted in) and non-essential cookies`,
            },
            {
              heading: "5. How We Use Your Data",
              content: `We use your personal data to:

• Respond to enquiries and provide advice and professional services
• Manage our client relationships and case files
• Send you information about our services (where you have consented)
• Improve our website and user experience
• Comply with our legal and regulatory obligations
• Protect our legitimate business interests`,
            },
            {
              heading: "6. Sharing Your Data",
              content: `We do not sell your personal data to third parties. We may share your data with:

• Professional advisors and solicitors acting in connection with your instructions
• Our technology and service providers (e.g. email, website hosting, analytics) who process data on our behalf under data processing agreements
• Regulatory authorities or law enforcement, where required by law

All third parties are required to keep your information confidential and to process it only for the purposes we specify.`,
            },
            {
              heading: "7. Data Retention",
              content: `We retain personal data for as long as necessary to provide our services and to comply with our legal obligations. For client files, we typically retain data for six years after the conclusion of instructions, in accordance with standard professional practice. Website enquiry data that does not result in an engagement is retained for a shorter period. You may request deletion of your data at any time (subject to our legal obligations).`,
            },
            {
              heading: "8. Your Rights",
              content: `Under UK GDPR, you have the right to:

• Access the personal data we hold about you
• Rectify inaccurate or incomplete data
• Request erasure of your data (the "right to be forgotten"), subject to our legal obligations
• Restrict processing of your data in certain circumstances
• Data portability — to receive your data in a structured, machine-readable format
• Object to processing based on legitimate interests
• Withdraw consent at any time (where processing is based on consent)

To exercise any of these rights, please contact us at info@phonemastadvice.co.uk. We will respond within one month.`,
            },
            {
              heading: "9. International Transfers",
              content: `We do not routinely transfer personal data outside the UK. Where data is transferred internationally (for example, to a cloud service provider with servers outside the UK), we ensure appropriate safeguards are in place in accordance with UK GDPR requirements.`,
            },
            {
              heading: "10. Security",
              content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. These include secure communication channels, access controls, and regular security reviews. No online transmission is completely secure, however, and we cannot guarantee the security of data transmitted to our website.`,
            },
            {
              heading: "11. Complaints",
              content: `If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the UK's supervisory authority:

Information Commissioner's Office (ICO)
Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
Website: ico.org.uk
Telephone: 0303 123 1113

We would, however, appreciate the opportunity to resolve any concerns directly — please contact us first at info@phonemastadvice.co.uk.`,
            },
            {
              heading: "12. Changes to This Policy",
              content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page with a revised date. We encourage you to review this policy periodically.`,
            },
            {
              heading: "13. Google Advertising Services",
              content: `We use Google Ads and related Google advertising services to deliver relevant advertisements. When you consent via our cookie banner, the following may apply:

• Ads personalisation: Google may use cookies and mobile advertising identifiers to serve personalised advertisements based on your browsing activity on our website and across the web.
• Non-personalised advertising: Even without full consent, limited cookies may be used for frequency capping, aggregated ad reporting, and combating fraud and abuse.
• Remarketing: If you have previously visited our website, Google may show you our advertisements on other websites you visit (remarketing/retargeting).
• Conversion measurement: We use Google Ads conversion tracking to understand how effective our advertising campaigns are. This involves a cookie being placed when you click on one of our ads.

You can manage your Google advertising preferences and opt out of personalised ads at any time by visiting Google Ads Settings: https://adssettings.google.com

For more information about how Google collects and processes your data when you use our website, please visit Google's Business Data Responsibility Site: https://business.safety.google/privacy/`,
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
              <div style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.75, whiteSpace: "pre-line" }}>
                {renderWithLinks(section.content)}
              </div>
            </div>
          ))}

          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              <strong>Contact us:</strong> The Phone Mast Advice Company Ltd, 167-169 Great Portland Road, 5th Floor, London, W1W 5PF. Email:{" "}
              <a href="mailto:info@phonemastadvice.co.uk" style={{ color: "#1B4F72", fontWeight: 600 }}>
                info@phonemastadvice.co.uk
              </a>. Telephone:{" "}
              <a href="tel:01691791543" style={{ color: "#1B4F72", fontWeight: 600 }}>
                01691 791543
              </a>. Company Reg: 13115582.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
