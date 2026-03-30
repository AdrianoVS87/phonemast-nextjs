import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Team | Phone Mast Advice Company",
  description:
    "Meet the specialist telecom surveying team at The Phone Mast Advice Company. Expert UK advisors acting exclusively for landlords.",
  alternates: { canonical: "https://phonemastadvice.co.uk/team" },
};

export default function TeamPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Team" }]} />
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Our Team
          </h1>

          {/* Matt Restall */}
          <div
            className="card"
            style={{ marginBottom: "1.5rem" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.375rem",
                color: "#1B4F72",
                marginBottom: "0.375rem",
              }}
            >
              Matt Restall
            </h2>
            <p
              style={{
                fontWeight: 600,
                color: "#a4ca62",
                fontSize: "1rem",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Founder &amp; Director
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7 }}>
              Matt Restall is the founder of The Phone Mast Advice Company and has
              over 25 years of specialist experience advising UK landlords on
              telecoms property matters. Matt was involved in instigating and
              advising on the landmark case{" "}
              <em>Compton Beauchamp Estates v CTIL</em> [2022] UKSC 18 — the most
              significant UK telecoms ruling since the Telecommunications Act 1984.
            </p>
          </div>

          <p style={{ fontSize: "1.0625rem", color: "#6b7280", lineHeight: 1.7 }}>
            Our wider team of specialist surveyors and advisors bring expertise
            across rent reviews, lease renewals, new lettings, and the Electronic
            Communications Code. All team members act exclusively for landlords —
            never for mobile phone operators.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
