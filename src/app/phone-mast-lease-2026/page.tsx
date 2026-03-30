import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Phone Mast Lease 2026 | Digital Economy Act & Code Renewals | UK Advice",
  description:
    "Phone mast lease advice for 2026. Understanding the Digital Economy Act 2017 new Code, PSTI Act 2022 changes, and Code lease renewals. Expert UK landlord advice — free consultation.",
  alternates: { canonical: "https://phonemastadvice.co.uk/phone-mast-lease-2026" },
  openGraph: {
    title: "Phone Mast Lease 2026 | Digital Economy Act & Code Renewals",
    description:
      "What UK landlords need to know about phone mast leases in 2026. The Digital Economy Act Code, PSTI Act 2022, and strategic lease renewal advice.",
    type: "website",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is a Code lease under the Digital Economy Act 2017?",
    answer:
      "A 'Code lease' or 'Code agreement' is a phone mast lease governed by the Electronic Communications Code introduced by the Digital Economy Act 2017 (in force from 28 December 2017). Code leases differ significantly from pre-2017 leases in how rent is calculated, what rights operators have, and how renewals work. From 2017 onwards, all new phone mast leases are Code leases unless specifically structured otherwise.",
  },
  {
    question: "What changes to phone mast leases are coming in 2026?",
    answer:
      "Sections 61-64 of the Product Security and Telecommunications Infrastructure (PSTI) Act 2022 are expected to commence on 7 April 2026. These provisions amend the Electronic Communications Code, affecting how operators can upgrade and share equipment, how Code agreement imposition works, and the rights of operators on multi-operator sites. These changes will affect the landscape for new phone mast leases agreed in 2026.",
  },
  {
    question: "My phone mast lease predates December 2017 — what are my rights?",
    answer:
      "Pre-December 2017 leases may benefit from both the Landlord and Tenant Act 1954 (LTA 1954) and the old Electronic Communications Code, depending on their specific terms. The landmark case Compton Beauchamp Estates v CTIL [2022] UKSC 18 established that operators cannot use the new ECC to bypass LTA 1954 protections for these leases. Specialist advice on your specific lease is essential before any renewal negotiations.",
  },
  {
    question: "Can operators force a new Code lease on me?",
    answer:
      "Under the Electronic Communications Code, operators can apply to the Upper Tribunal (Lands Chamber) to impose new Code agreements if consensual negotiations fail. However, there are procedural requirements they must follow, and landlords have statutory rights in this process. The specific criteria for imposition are set out in the Code and have been refined by case law. Specialist advice is essential.",
  },
  {
    question: "What is the difference between a lease renewal and a Code imposition?",
    answer:
      "A lease renewal is a consensually agreed new agreement reached between the landlord and the operator. A Code imposition is where the operator applies to the Upper Tribunal (Lands Chamber) for a new agreement to be imposed by the court when consensual negotiations have failed or the landlord refuses. Imposition proceedings involve significant costs and time — specialist advice early in the process almost always leads to better outcomes without tribunal proceedings.",
  },
  {
    question: "How long should a new phone mast lease be in 2026?",
    answer:
      "There is no set duration required under the Electronic Communications Code, though operators commonly seek terms of 10 years. The length of a lease has significant implications for your income, rights, and flexibility. A shorter term may give you more flexibility but less security; a longer term provides income certainty. We advise on the optimal term and structure for your specific situation.",
  },
  {
    question: "What are the key terms to negotiate in a 2026 phone mast lease?",
    answer:
      "Key terms include: the total annual consideration (rent plus compensation), rent review provisions, access rights and hours, upgrade rights, equipment removal at lease end, assignment and sharing rights, insurance provisions, and break rights. The structure of consideration — annual payments vs lump sum premium — is also an important decision. Our specialists advise on all aspects.",
  },
];

export default function PhoneMastLease2026Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Phone Mast Lease 2026: Digital Economy Act, Code Renewals, and PSTI Act Changes",
    url: "https://phonemastadvice.co.uk/phone-mast-lease-2026",
    datePublished: "2025-01-01",
    dateModified: "2025-03-30",
    description:
      "Comprehensive guide for UK landlords on phone mast leases in 2026, covering the Digital Economy Act 2017 new Code, PSTI Act 2022 changes commencing 7 April 2026, and Code lease renewals.",
    author: {
      "@type": "Organization",
      name: "The Phone Mast Advice Company Ltd",
      url: "https://phonemastadvice.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "The Phone Mast Advice Company Ltd",
      url: "https://phonemastadvice.co.uk",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs items={[{ label: "Phone Mast Lease 2026" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Phone Mast Lease 2026: What Every UK Landlord Must Know
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
              marginBottom: "2rem",
            }}
          >
            The Digital Economy Act 2017 changed everything. The PSTI Act 2022 brings further changes from 7 April 2026. Expert advice now secures your future.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="/free-lease-check"
              className="btn-primary"
              style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}
            >
              Free Lease Check
            </a>
            <a
              href="tel:01691791543"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                color: "#ffffff",
                border: "2px solid rgba(255,255,255,0.6)",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "1.0625rem",
                textDecoration: "none",
                minHeight: "44px",
              }}
            >
              📞 01691 791543
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Understanding the Digital Economy Act 2017 — The New Code
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The Digital Economy Act 2017 introduced a comprehensively reformed Electronic Communications Code (ECC), in force from <strong>28 December 2017</strong>. This new Code, inserted as Schedule 3A of the Communications Act 2003, fundamentally changed the framework governing phone mast leases in the UK.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The key change was the replacement of a market-value rent model with a &lsquo;no-scheme&rsquo; valuation approach. Under the previous framework, phone mast rents were benchmarked against similar transactions in the market — rents that reflected the real commercial demand for telecoms sites. Under the new Code, land is valued disregarding the telecoms use entirely — producing figures that, on agricultural land in particular, are dramatically lower.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            For landlords with leases predating December 2017, the transition to the new Code is one of the most significant financial risks they face. Operators including Vodafone, O2, EE, Three, CTIL/Cornerstone, On Tower, Cellnex, Airwave, and WIG regularly use the new Code provisions to seek substantial rent reductions at renewal.
          </p>

          {/* Code key changes */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderRadius: "1rem",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#1B4F72",
                marginBottom: "1rem",
              }}
            >
              Key Changes Introduced by the Digital Economy Act 2017
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  heading: "No-scheme valuation",
                  detail:
                    "Rent calculated disregarding telecoms use — often produces significantly lower figures than market value",
                },
                {
                  heading: "Consideration and compensation split",
                  detail:
                    "Payments split into 'consideration' (for access rights) and 'compensation' (for disturbance etc.) — each assessed separately",
                },
                {
                  heading: "Stronger operator imposition rights",
                  detail:
                    "Operators can apply to the Upper Tribunal (Lands Chamber) to impose Code agreements when consensual negotiations fail",
                },
                {
                  heading: "Increased sharing and upgrade rights",
                  detail:
                    "Operators have enhanced rights to upgrade equipment and share sites with other operators",
                },
                {
                  heading: "New renewal mechanism",
                  detail:
                    "Leases granted under the new Code have a distinct renewal process — the Landlord and Tenant Act 1954 does not apply to new Code leases",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    marginBottom: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "50%",
                      backgroundColor: "#a4ca62",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1a1a2e",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      marginTop: "0.125rem",
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <strong style={{ fontSize: "1.0625rem", color: "#1a1a2e" }}>{item.heading}:</strong>{" "}
                    <span style={{ fontSize: "1.0625rem", color: "#374151" }}>{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            PSTI Act 2022 — Further Changes from 7 April 2026
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Building on the 2017 reforms, the Product Security and Telecommunications Infrastructure (PSTI) Act 2022 introduces further changes through sections 61-64, commencing <strong>7 April 2026</strong>. These provisions further amend the Electronic Communications Code, addressing:
          </p>

          <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", color: "#374151", lineHeight: 2, fontSize: "1.0625rem" }}>
            <li>Streamlined procedures for multi-operator infrastructure sharing</li>
            <li>Enhanced operator rights in respect of upgrading existing equipment</li>
            <li>Modified procedural requirements for Code agreement imposition</li>
            <li>Clarifications to the rights of landlords in the imposition process</li>
          </ul>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            Landlords with leases coming up for renewal in 2026 need to understand how both the Digital Economy Act 2017 Code and the PSTI Act 2022 changes affect their specific situation. The strategic timing of lease negotiations — relative to the April 2026 commencement — can be material to the outcome.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            The Landmark Case: Compton Beauchamp Estates v CTIL [2022] UKSC 18
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The Phone Mast Advice Company was involved in instigating and advising on{" "}
            <em>Compton Beauchamp Estates v CTIL</em> [2022] UKSC 18 — the Supreme Court case that stands as the most significant UK telecoms ruling since the Telecommunications Act 1984.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            The case established that operators with existing Landlord and Tenant Act 1954 protected leases cannot use the Electronic Communications Code to bypass those protections and impose significantly reduced rents. This ruling remains vital protection for landlords with pre-2017 leases with LTA 1954 status.
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid #a4ca62",
              paddingLeft: "1.5rem",
              margin: "0 0 2rem 0",
              fontStyle: "italic",
              fontSize: "1.0625rem",
              color: "#374151",
              lineHeight: 1.75,
            }}
          >
            &ldquo;Matt Restall has been managing the Compton Beauchamp Estates Phone Mast site portfolio since 2012. Matt was involved in instigating and advising on the famous court case Compton Beauchamp Estates v CTIL. We value the advice we have received from him over the last 12 years, and we would be happy to recommend his services to any landlords who have got Phone Mast sites.&rdquo;
            <cite style={{ display: "block", marginTop: "0.75rem", fontStyle: "normal", fontWeight: 600, color: "#1B4F72", fontSize: "0.9375rem" }}>
              — Richard Salmon, Director, Compton Beauchamp Estates
            </cite>
          </blockquote>

          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Acting Now — Before 2026
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The landscape for phone mast leases is more complex in 2026 than at any time since the Telecommunications Act 1984. Landlords who act now — with specialist independent advice — are better positioned to navigate both the existing Code framework and the PSTI Act changes.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7 }}>
            Whether your lease is due for renewal, you have received a rent reduction notice, or an operator has approached you about a new installation, we offer a free initial consultation to assess your position. Call us on{" "}
            <a href="tel:01691791543" style={{ color: "#1B4F72", fontWeight: 600 }}>01691 791543</a> or contact us via{" "}
            <a href="https://wa.me/447843352654" style={{ color: "#1B4F72", fontWeight: 600 }}>WhatsApp: 447843352654</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#f9f8f5", padding: "3rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.5rem",
            }}
          >
            Phone Mast Lease 2026 — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} showJsonLd={false} />
        </div>
      </section>

      <CTASection
        headline="Expert Phone Mast Lease Advice for 2026"
        subheadline="The PSTI Act commences 7 April 2026. Specialist advice now protects your lease income for years to come. Free initial consultation."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check"
      />
    </>
  );
}
