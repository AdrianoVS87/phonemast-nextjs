import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import ExistingMastNote from "@/components/ExistingMastNote";

// Landing page for the paused "operator letters and notices" ad group.
// Noindex and out of the sitemap until the firm approves the wording. No legal time limits,
// section numbers, outcomes or figures belong here.
export const metadata: Metadata = {
  title: "Had a Letter From Your Mast Operator? | Phone Mast Advice",
  description:
    "For landowners who already have a phone mast. What to do when a letter or notice arrives from your mast operator, and how to get independent advice.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/operator-letter/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Had a Letter From Your Mast Operator?",
    description: "What to do when a letter or notice arrives from your mast operator.",
    url: "https://www.phonemastadvice.co.uk/operator-letter/",
    images: [{ url: "/images/og-handbook.jpg", width: 1200, height: 630, alt: "Phone Mast Advice" }],
  },
};

const STEPS = [
  {
    title: "Do not ignore it",
    text: "Keep the letter safe and read it carefully, even if it looks routine.",
  },
  {
    title: "Do not sign or reply before advice",
    text: "Do not sign anything, or agree to anything it proposes, until you have had independent advice.",
  },
  {
    title: "Gather your paperwork",
    text: "Find your lease or agreement, the letter, and any earlier letters from the operator or its agents.",
  },
  {
    title: "Note any deadlines",
    text: "Write down any date given in the letter, and the date it reached you.",
  },
  {
    title: "Get independent advice",
    text: "We act for landowners and never for operators. Send us the details or call us.",
  },
];

export default function OperatorLetterPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Operator Letter" }]} />
      <section className="section-padding form-page-section">
        <div className="container-max">
          {/* Phones: heading, form, then the steps. Desktop: heading and steps left, form right. */}
          <div className="grid gap-6 lg:gap-x-12 lg:gap-y-0 lg:grid-cols-[1fr_1.5fr] lg:grid-rows-[auto_1fr]">
            <div className="lg:col-start-1 lg:row-start-1">
              <h1
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#1a1a2e",
                  marginBottom: "1.25rem",
                }}
              >
                Had a letter from your mast operator?
              </h1>
              <ExistingMastNote tone="light" />
            </div>

            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <div className="card form-page-card">
                <h2
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    color: "#1a1a2e",
                    marginBottom: "1.5rem",
                  }}
                >
                  Request Your Free Rent Estimate
                </h2>
                <LeadForm formType="rent-estimate" />
              </div>
            </div>

            <div className="lg:col-start-1 lg:row-start-2">
              <h2
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.375rem",
                  color: "#1a1a2e",
                  margin: "1rem 0 1.25rem",
                }}
              >
                What to do with the letter
              </h2>
              <ol style={{ listStyle: "none", margin: "0 0 1.5rem", padding: 0 }}>
                {STEPS.map((step, i) => (
                  <li key={step.title} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                        backgroundColor: "#1B4F72",
                        color: "#ffffff",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1a1a2e", margin: "0 0 0.25rem", lineHeight: 1.45 }}>
                        {step.title}
                      </p>
                      <p style={{ fontSize: "1.125rem", color: "#374151", margin: 0, lineHeight: 1.6 }}>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <a
                href="tel:01691791543"
                className="btn-primary"
                style={{ width: "100%", fontSize: "1.125rem", padding: "1rem" }}
              >
                Call us on 01691 791543
              </a>

              <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.6, margin: "1.25rem 0 0" }}>
                This page is general information, not legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
