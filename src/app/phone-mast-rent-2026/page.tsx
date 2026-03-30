import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Phone Mast Rent 2026 | PSTI Act & Vache Farm Benchmark | UK Advice",
  description:
    "What will phone mast rent look like in 2026? PSTI Act 2022 sections 61-64 commence 7 April 2026. Vache Farm [2024] UKUT 216 (LC) sets the new benchmark. Expert landlord advice.",
  alternates: { canonical: "https://phonemastadvice.co.uk/phone-mast-rent-2026" },
  openGraph: {
    title: "Phone Mast Rent 2026 | PSTI Act & Vache Farm Benchmark",
    description:
      "Key legislative changes affecting phone mast rent in 2026. PSTI Act 2022, Vache Farm benchmark, and what UK landlords need to know.",
    type: "website",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is the PSTI Act 2022 and how does it affect phone mast rent?",
    answer:
      "The Product Security and Telecommunications Infrastructure (PSTI) Act 2022 contains provisions in sections 61-64 that amend the Electronic Communications Code. These sections are expected to commence on 7 April 2026. The changes are designed to facilitate greater infrastructure sharing and deployment, with implications for how operators can seek to impose or modify Code agreements. Landlords should seek specialist advice before April 2026 to understand how the changes may affect their specific lease.",
  },
  {
    question: "What is the Vache Farm case and why does it matter for rent in 2026?",
    answer:
      "Vache Farm [2024] UKUT 216 (LC) is the current benchmark Upper Tribunal (Lands Chamber) decision on phone mast rent under the Electronic Communications Code 'no-scheme' valuation model. The case established an updated benchmark for consideration and compensation payable to landowners. Operators will seek to apply this benchmark in rent review negotiations in 2026 and beyond. Understanding the Vache Farm decision and its implications for your specific site is essential.",
  },
  {
    question: "Will my phone mast rent go up or down in 2026?",
    answer:
      "The direction of your rent will depend on your specific lease, when it was granted, which operator holds it, and the current condition of the market. The Vache Farm benchmark and PSTI Act changes create both risks and opportunities for landlords. Without specialist advice, you are unlikely to achieve the best possible outcome. Contact us for a free assessment of your specific situation.",
  },
  {
    question: "Should I wait for the PSTI Act to commence before renewing my lease?",
    answer:
      "Not necessarily — and in many cases, acting before April 2026 may be in your interests. The strategic timing of lease negotiations is an important consideration, and our specialists advise on the optimal approach for each client's circumstances. Contact us well in advance of April 2026 to assess your position.",
  },
  {
    question: "What is the Upper Tribunal (Lands Chamber)?",
    answer:
      "The Upper Tribunal (Lands Chamber) is the specialist court in England and Wales that determines disputes under the Electronic Communications Code — including disputed rents, Code agreement terms, and removal applications. It is commonly abbreviated to UKUT (LC) in case citations. It is important to use the correct name: 'Upper Tribunal (Lands Chamber)' — not 'Upper Land Tribunal'.",
  },
  {
    question: "How does the no-scheme valuation model work in 2026?",
    answer:
      "The 'no-scheme' valuation model, introduced by the Digital Economy Act 2017, values land for phone mast purposes disregarding the telecoms use. On agricultural or lower-value land, this produces much lower rents than the previous market-value approach. The Vache Farm case [2024] UKUT 216 (LC) updated the benchmark figures under this model. Our specialists advise on what the no-scheme valuation means for your site and how to maximise the total consideration payable.",
  },
];

export default function PhoneMastRent2026Page() {
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
    headline: "Phone Mast Rent 2026: PSTI Act and Vache Farm Benchmark",
    url: "https://phonemastadvice.co.uk/phone-mast-rent-2026",
    datePublished: "2025-01-01",
    dateModified: "2025-03-30",
    description:
      "Key legislative and case law developments affecting phone mast rent in 2026, including the PSTI Act 2022 sections 61-64 and the Vache Farm benchmark.",
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

      <Breadcrumbs items={[{ label: "Phone Mast Rent 2026" }]} />

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
            Phone Mast Rent 2026: What UK Landlords Need to Know
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
              marginBottom: "2rem",
            }}
          >
            The PSTI Act 2022 commences 7 April 2026. The Vache Farm case sets the current rent benchmark. Expert advice now can protect your income.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="/free-rent-estimate"
              className="btn-primary"
              style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}
            >
              Free Rent Estimate
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
            The Key 2026 Changes for Phone Mast Landlords
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            April 2026 marks a significant moment in UK telecoms property law. Sections 61-64 of the Product Security and Telecommunications Infrastructure (PSTI) Act 2022 are expected to commence on <strong>7 April 2026</strong>. These provisions amend the Electronic Communications Code (ECC) — the legal framework that governs the rights of mobile operators to access land and the rents they pay.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Alongside this legislative change, the Upper Tribunal (Lands Chamber) decision in{" "}
            <em>Vache Farm Ltd v On Tower UK Ltd</em> [2024] UKUT 216 (LC) has established a new benchmark for phone mast rents under the ECC's 'no-scheme' valuation model. This case will be cited by operators in rent review and renewal negotiations throughout 2026 and beyond.
          </p>

          {/* PSTI Act section */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderLeft: "4px solid #1B4F72",
              borderRadius: "0 0.75rem 0.75rem 0",
              padding: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#1B4F72",
                marginBottom: "0.75rem",
              }}
            >
              PSTI Act 2022 — Sections 61-64 (commencing 7 April 2026)
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7, marginBottom: "0.75rem" }}>
              The Product Security and Telecommunications Infrastructure Act 2022 amends the Electronic Communications Code in Schedule 3A of the Communications Act 2003. Sections 61-64, commencing on 7 April 2026, introduce:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "0", color: "#374151", lineHeight: 2, fontSize: "1.0625rem" }}>
              <li>Changes to the process for upgrading and sharing telecoms equipment</li>
              <li>Modifications to Code agreement imposition procedures</li>
              <li>Amendments affecting the rights of operators to access land for multi-operator sharing</li>
              <li>Updated protections and processes relevant to both new and existing Code agreements</li>
            </ul>
          </div>

          {/* Vache Farm section */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderLeft: "4px solid #a4ca62",
              borderRadius: "0 0.75rem 0.75rem 0",
              padding: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#1B4F72",
                marginBottom: "0.75rem",
              }}
            >
              Vache Farm — [2024] UKUT 216 (LC) — The Current Rent Benchmark
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7, marginBottom: "0.75rem" }}>
              <em>Vache Farm Ltd v On Tower UK Ltd</em> [2024] UKUT 216 (LC) is the Upper Tribunal (Lands Chamber) decision that sets the current benchmark for phone mast consideration and compensation under the ECC no-scheme model. This decision will be the primary comparable evidence used by operators — including Vodafone, O2, EE, Three, CTIL/Cornerstone, On Tower, Cellnex, and others — when proposing rents in 2026.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7 }}>
              Understanding how the Vache Farm benchmark applies to your specific site — its location, land type, and operator — is essential before engaging in any rent negotiation. Our specialists analyse each site individually against the benchmark to develop evidence-based negotiating strategies.
            </p>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
              marginTop: "2rem",
            }}
          >
            The Legislative Background: How We Got Here
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The current framework for phone mast rents has evolved significantly over recent decades:
          </p>

          <div style={{ marginBottom: "2rem" }}>
            {[
              {
                year: "1984",
                event: "Telecommunications Act 1984",
                detail: "Introduced the original Electronic Communications Code in Schedule 2. Rents based on market value.",
              },
              {
                year: "2003",
                event: "Communications Act 2003",
                detail: "Created Ofcom. The Code remained largely unchanged but was incorporated as Schedule 3A.",
              },
              {
                year: "2017",
                event: "Digital Economy Act 2017 (28 December 2017)",
                detail: "The most significant reform. Introduced the 'no-scheme' valuation model, replacing market value rents. Operators gained significant new powers.",
              },
              {
                year: "2022",
                event: "UKSC 18 — Compton Beauchamp Estates v CTIL",
                detail: "The Phone Mast Advice Company instigated and advised on this landmark Supreme Court case, protecting landlords with LTA 1954 leases from Code imposition.",
              },
              {
                year: "2024",
                event: "Vache Farm [2024] UKUT 216 (LC)",
                detail: "Current benchmark Upper Tribunal decision on no-scheme rent under the 2017 Code.",
              },
              {
                year: "2026",
                event: "PSTI Act 2022 sections 61-64 — 7 April 2026",
                detail: "Next significant legislative change affecting Code agreements and operator rights.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginBottom: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#1B4F72",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {item.year}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "#1a1a2e",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.event}
                  </p>
                  <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.6, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
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
            What Should Landlords Do Before April 2026?
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The most important thing you can do before April 2026 is to seek specialist independent advice on your current lease position. Key questions to consider:
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0" }}>
            {[
              "When does your current lease expire or come up for rent review?",
              "Is your lease governed by the Landlord and Tenant Act 1954 or the Electronic Communications Code?",
              "Has your operator contacted you about renewal, rent review, or lease modification?",
              "Do you know the current market benchmark for your type of site?",
              "Are you aware of your rights under the PSTI Act changes?",
            ].map((question, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  marginBottom: "1rem",
                  fontSize: "1.0625rem",
                  color: "#374151",
                  lineHeight: 1.6,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "1.5rem",
                    height: "1.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#1B4F72",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    marginTop: "0.125rem",
                  }}
                >
                  ?
                </span>
                {question}
              </li>
            ))}
          </ul>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7 }}>
            We offer a free initial consultation to assess your position and advise on the optimal strategy for 2026 and beyond. Contact us on{" "}
            <a href="tel:01691791543" style={{ color: "#1B4F72", fontWeight: 600 }}>01691 791543</a> or{" "}
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
            Phone Mast Rent 2026 — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} showJsonLd={false} />
        </div>
      </section>

      <CTASection
        headline="Protect Your Phone Mast Rent Income in 2026"
        subheadline="The PSTI Act commences April 2026. Take specialist advice now to protect your position. Free initial consultation."
        ctaText="Free Rent Estimate"
        ctaHref="/free-rent-estimate"
      />
    </>
  );
}
