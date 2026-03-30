import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | The Phone Mast Advice Company | UK Specialists",
  description:
    "Independent specialist telecom surveyors with 25+ years experience advising UK landlords on phone mast leases. The Phone Mast Advice Company Ltd — Reg. 13115582.",
  alternates: { canonical: "https://phonemastadvice.co.uk/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          type: "ProfessionalService",
          name: "The Phone Mast Advice Company Ltd",
          url: "https://phonemastadvice.co.uk/about",
          telephone: "01691 791543",
          email: "info@phonemastadvice.co.uk",
          description:
            "Independent specialist telecom surveyors acting only for UK landlords with 25+ years experience.",
        }}
      />
      <Breadcrumbs items={[{ label: "About Us" }]} />
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
            About The Phone Mast Advice Company
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The Phone Mast Advice Company Ltd is a specialist team of independent telecom surveyors acting
            exclusively for UK landlords and landowners. Founded by Matt Restall, the firm brings over 25
            years of expertise in phone mast lease negotiations, rent reviews, and Electronic Communications
            Code advice.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            We act only for landowners — never for mobile phone operators. This independence is fundamental
            to the advice we give. When operators such as Vodafone, O2, EE, Three, CTIL/Cornerstone,
            On Tower (formerly Arqiva), Cellnex, or Airwave Solutions approach our clients, we ensure
            our clients receive objective, expert representation.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            We were involved in instigating and advising on{" "}
            <em>Compton Beauchamp Estates v CTIL</em> [2022] UKSC 18 — the most significant UK telecoms
            case since the Telecommunications Act 1984. The Supreme Court ruling confirmed that operators
            cannot use the Electronic Communications Code to bypass existing landlord protections.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            With offices in London, Bristol, and Oswestry, we advise landlords across the UK. Company
            registration: 13115582.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Our Team
          </a>
        </div>
      </section>
      <CTASection />
    </>
  );
}
