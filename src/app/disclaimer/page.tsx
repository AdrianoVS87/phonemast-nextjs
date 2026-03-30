import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer | The Phone Mast Advice Company Ltd",
  description:
    "Website disclaimer and terms of use for The Phone Mast Advice Company Ltd. Information provided on this site is for general guidance only.",
  alternates: { canonical: "https://phonemastadvice.co.uk/disclaimer" },
  robots: { index: false },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

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
            Disclaimer
          </h1>
          <p style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "2rem" }}>
            Last updated: March 2025
          </p>

          {[
            {
              heading: "1. General Information Only",
              content: `The information contained on this website is provided by The Phone Mast Advice Company Ltd for general information and guidance purposes only. It does not constitute professional, legal, surveying, or financial advice and should not be relied upon as such in relation to any specific matter or transaction.

Whilst we endeavour to keep the information on this website accurate and up to date, we make no representations or warranties — express or implied — as to the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related content on this website.`,
            },
            {
              heading: "2. Professional Advice",
              content: `Any reliance you place on the information on this website is strictly at your own risk. For advice specific to your circumstances, you should consult a qualified professional. The Phone Mast Advice Company Ltd recommends that you seek specialist telecoms property advice before entering into, renewing, or terminating any phone mast lease or licence agreement.

Engaging The Phone Mast Advice Company Ltd in a professional capacity creates a distinct client relationship governed by our separate Terms of Business and professional obligations.`,
            },
            {
              heading: "3. Legislation and Case Law",
              content: `References to legislation, regulations, and case law on this website are intended to provide general context. Legal frameworks — including the Electronic Communications Code, the Digital Economy Act 2017, and the PSTI Act 2022 — are complex and subject to change. You should not rely on this website as a definitive statement of your legal rights or obligations. Always seek qualified legal and surveying advice.`,
            },
            {
              heading: "4. No Solicitor-Client Relationship",
              content: `Nothing on this website creates a solicitor-client relationship or professional obligation between The Phone Mast Advice Company Ltd and any person reading or using it, unless a formal engagement has been agreed in writing through our Terms of Business.`,
            },
            {
              heading: "5. Third-Party Links",
              content: `This website may contain links to third-party websites. These links are provided for your convenience only. The Phone Mast Advice Company Ltd has no control over the content of those sites and accepts no responsibility for their content or your use of them. The inclusion of any link does not imply endorsement of the linked website.`,
            },
            {
              heading: "6. Limitation of Liability",
              content: `To the fullest extent permitted by applicable law, The Phone Mast Advice Company Ltd excludes all liability for any loss or damage — including, without limitation, indirect or consequential loss — arising from your use of or reliance on information on this website, or from any interruption, inaccuracy, or omission in the information provided.

Nothing in this disclaimer excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable UK law.`,
            },
            {
              heading: "7. Intellectual Property",
              content: `All content on this website — including text, graphics, logos, and design — is the property of The Phone Mast Advice Company Ltd or is included with the permission of the relevant rights holder. You may not reproduce, distribute, or otherwise use content from this website without our prior written permission.`,
            },
            {
              heading: "8. Governing Law",
              content: `This disclaimer and your use of this website are governed by the laws of England and Wales. Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
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
                {section.content}
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
