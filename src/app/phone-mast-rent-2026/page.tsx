import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Phone Mast Rent 2026 | ECC Valuation & PSTI Act",
  description:
    "How phone mast rent is calculated under the ECC, the no-network assumption, key case law, and what changes for UK landlords on 7 April 2026.",
  alternates: { canonical: "https://phonemastadvice.co.uk/phone-mast-rent-2026" },
  openGraph: {
    title: "Phone Mast Rent 2026 | ECC Valuation & PSTI Act",
    description:
      "How phone mast rent is calculated under the ECC, the no-network assumption, key case law, and what changes for UK landlords on 7 April 2026.",
    type: "website",
  },
};

export default function PhoneMastRent2026Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Phone Mast Rent Advice",
    serviceType: "Telecom Property Advice",
    provider: {
      "@type": "ProfessionalService",
      name: "The Phone Mast Advice Company Ltd",
      url: "https://phonemastadvice.co.uk",
      telephone: "01691 791543",
    },
    areaServed: "United Kingdom",
    description:
      "Expert independent advice for UK landlords on phone mast rent under the Electronic Communications Code, including valuation methodology, case law, and 7 April 2026 PSTI Act changes.",
    url: "https://phonemastadvice.co.uk/phone-mast-rent-2026",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs items={[{ label: "Phone Mast Rent 2026" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "860px" }}>
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
            The rules on phone mast rent are changing significantly in 2026. Understanding how rent is calculated — and what changes on 7 April 2026 — could make a substantial difference to your income.
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
            <a
              href="https://wa.me/447843352654"
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
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "860px" }}>

          {/* How Rent Is Calculated */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            How Phone Mast Rent Is Calculated Under the Electronic Communications Code
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Since the Electronic Communications Code (ECC) was reformed by the Digital Economy Act 2017 and came into force on <strong>28 December 2017</strong>, the way phone mast rent is calculated has fundamentally changed. Under the previous legislation (Schedule 2 of the Telecommunications Act 1984), rent was typically negotiated at open market value. Landowners could factor in the strategic importance of their site to the operator and negotiate accordingly.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The 2017 Code introduced a radically different approach. Rent — referred to as &ldquo;consideration&rdquo; in the legislation — is now governed by <strong>Paragraph 24 of Schedule 3A to the Communications Act 2003</strong>. The central principle is the <strong>no-network assumption</strong>.
          </p>

          {/* No-Network Assumption */}
          <div
            style={{
              backgroundColor: "#f0f7ff",
              borderLeft: "4px solid #1B4F72",
              borderRadius: "0 0.75rem 0.75rem 0",
              padding: "1.75rem 2rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#1B4F72",
                marginBottom: "0.875rem",
              }}
            >
              The No-Network Assumption Explained
            </h3>
            <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1rem" }}>
              Under Paragraph 24, the Tribunal must value the site as though the agreement &ldquo;does not relate to the provision or use of an electronic communications network.&rdquo; In plain terms, <strong>the telecoms premium is stripped out entirely</strong>. Your land is valued at its underlying use value — for example, agricultural, storage, or car parking — rather than at a premium reflecting its importance to a mobile network.
            </p>
            <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              Additionally, the valuation assumes that there is more than one site the operator could use for the same purpose, removing any scarcity value a landlord might otherwise rely upon.
            </p>
          </div>

          {/* Three-Stage Methodology */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            The Structured Valuation Approach
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            The Upper Tribunal (Lands Chamber) has established a three-stage methodology for determining consideration:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {[
              {
                stage: "Stage 1",
                label: "Alternative use value",
                detail: "What rent would the site command for its best non-telecoms use?",
              },
              {
                stage: "Stage 2",
                label: "Additional benefits",
                detail: "Any extra value conferred on the operator, such as an elevated position or existing power supply.",
              },
              {
                stage: "Stage 3",
                label: "Adverse effects",
                detail: "The burden or disturbance imposed on the landowner by the telecoms use, including loss of amenity, restrictions on development, and interference with other activities.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  backgroundColor: "#f9f8f5",
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
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
                  {i + 1}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "1.0625rem", color: "#1a1a2e", marginBottom: "0.25rem" }}>
                    {item.stage} — {item.label}
                  </p>
                  <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            This structured approach was first set out in <em>Vodafone Ltd v Hanover Capital Ltd</em> and subsequently endorsed by the Upper Tribunal in multiple decisions.
          </p>

          {/* Rooftop vs Standalone */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Rooftop Sites vs Standalone Masts
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            The type of site significantly affects how rent is assessed.
          </p>

          <div style={{ display: "grid", gap: "1.5rem", marginBottom: "2rem" }} className="lg:grid-cols-2">
            <div
              style={{
                backgroundColor: "#f9f8f5",
                borderRadius: "1rem",
                padding: "1.75rem",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "#1B4F72",
                  marginBottom: "0.875rem",
                }}
              >
                🏗️ Standalone (Greenfield) Masts
              </h3>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                These are free-standing mast structures, typically located on farmland, rural estates, or open land. Under the no-network assumption, the alternative use value of a greenfield site is typically its agricultural or storage value — which is inherently low. The Upper Tribunal has assessed consideration for standard rural greenfield sites in a number of decisions, with the benchmark figure having increased over time to reflect inflation and evolving market evidence.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f9f8f5",
                borderRadius: "1rem",
                padding: "1.75rem",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "#1B4F72",
                  marginBottom: "0.875rem",
                }}
              >
                🏢 Rooftop Installations
              </h3>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                Rooftop sites on residential or commercial buildings tend to attract higher consideration than greenfield masts. The alternative use value of roof space is assessed by reference to comparable lettings for storage, signage, or other non-telecoms purposes. Urban rooftop sites — particularly in inner London and major cities — have been valued at higher levels than rural equivalents in Tribunal decisions.
              </p>
            </div>
          </div>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            The Tribunal has also addressed atypical structures such as water towers, church steeples, and similar installations, applying a hybrid of the structured approach with a sense-check against comparable decisions.
          </p>

          {/* Case Law */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Key Court Decisions That Have Shaped Phone Mast Rent
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            A series of Upper Tribunal decisions have progressively defined how phone mast rent is assessed under the 2017 Code. The most significant are:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {[
              {
                citation: "EE Ltd & Hutchison 3G UK Ltd v London Borough of Islington [2019] UKUT 53 (LC)",
                summary: "The first ever determination of consideration under the new Code. The Tribunal applied the no-network assumption to an urban rooftop site in inner London and confirmed that pre-2017 comparable rents are irrelevant under the new framework. This decision established that compensation for diminution in property value is not automatically recoverable and set the standard for future urban rooftop valuations.",
              },
              {
                citation: "On Tower UK Ltd v JH & FW Green Ltd (Dale Park) [2020] UKUT 0348 (LC)",
                summary: "The first contested rent determination for a lease renewal under Part 5 of the Code. The Tribunal endorsed the structured three-stage valuation approach and established the initial benchmark for standard rural greenfield mast sites. This decision also confirmed that the landlord is entitled to recover reasonable professional fees incurred in dealing with the operator.",
              },
              {
                citation: "EE Ltd & Hutchison 3G UK Ltd v AP Wireless II (UK) Ltd (Vache Farm) [2024] UKUT 216 (LC)",
                summary: "The current leading authority on rural greenfield mast rent. The Tribunal found that the earlier benchmark figure was too low by 2024 and applied an uplift to reflect inflation and updated comparable evidence. This decision sent a clear signal that consideration figures must keep pace with economic conditions. The Tribunal also imposed a compromise break clause allowing the landlord to terminate on notice where redevelopment is intended — a significant development for landowners with future building plans.",
              },
              {
                citation: "Cornerstone Telecommunications Infrastructure Ltd v Compton Beauchamp Estates Ltd [2022] UKSC 18",
                summary: "A landmark Supreme Court decision in which three conjoined appeals were heard together. The Court confirmed that operators with existing agreements protected under the Landlord and Tenant Act 1954 must renew under that Act — they cannot use the Code to impose new agreements on different terms. This decision has significant implications for the thousands of legacy mast leases that pre-date the 2017 Code.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f9f8f5",
                  borderRadius: "0.75rem",
                  padding: "1.5rem 1.75rem",
                  borderLeft: "4px solid #a4ca62",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#1B4F72",
                    marginBottom: "0.625rem",
                  }}
                >
                  <em>{item.citation}</em>
                </p>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

          {/* Why rents are being reduced */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Why Phone Mast Rents Are Being Reduced
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The reduction in phone mast rents is a direct consequence of Government policy. The stated objective behind the Digital Economy Act 2017 reforms was to reduce the cost of deploying and maintaining telecommunications infrastructure across the United Kingdom, thereby encouraging the rollout of 4G and 5G networks to underserved areas.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The practical effect of these reforms has been significant. Under the previous regime, landowners could negotiate rents that reflected the strategic value of their site to the operator. Under the new Code, the no-network assumption removes this premium entirely, and the site is valued at its bare alternative use.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            Since the new Code came into force in December 2017, the number of disputes between operators and landowners has increased dramatically. Over a thousand Tribunal cases have been filed under the new Code, compared with just 33 in the entire 30 years under the previous legislation.
          </p>

          {/* 7 April 2026 */}
          <div
            style={{
              backgroundColor: "#1B4F72",
              borderRadius: "1rem",
              padding: "2rem 2.25rem",
              marginBottom: "2rem",
              color: "#ffffff",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              ⚠️ What Changes on 7 April 2026
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "1rem" }}>
              On <strong>7 April 2026</strong>, Sections 61 to 64 of the Product Security and Telecommunications Infrastructure Act 2022 come into force. This is one of the most significant changes to phone mast rent law since 2017.
            </p>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "1rem" }}>
              These provisions insert a new <strong>Section 34A into the Landlord and Tenant Act 1954</strong>. For the first time, qualifying telecoms tenancies that renew under the 1954 Act will be subject to the no-network assumption when rent is assessed.
            </p>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Until now, landowners with legacy mast leases protected under the 1954 Act have benefited from open market rent valuations on renewal — often producing significantly higher rents than the Code valuation. The Supreme Court confirmed this protection in <em>Cornerstone v Compton Beauchamp</em> [2022] UKSC 18. From 7 April 2026, that advantage is removed.
            </p>

            <h3
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#a4ca62",
                marginBottom: "0.875rem",
              }}
            >
              What This Means for Landowners
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "If your mast lease pre-dates 28 December 2017 and is protected under the Landlord and Tenant Act 1954, your rent on renewal will now be assessed using the no-network assumption",
                "This affects an estimated 15,000 legacy telecoms agreements across the United Kingdom",
                "Transitional provisions ensure that rents already received are not required to be repaid",
                "Interim rent is split: periods before 7 April 2026 are valued under the old rules, periods from 7 April onwards under the new framework",
                "Jurisdiction for telecoms disputes transfers from the Upper Tribunal (Lands Chamber) to the First-tier Tribunal (Property Chamber) from the same date",
              ].map((point, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "0.875rem",
                    fontSize: "1.0625rem",
                    color: "rgba(255,255,255,0.88)",
                    lineHeight: 1.6,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: "#a4ca62", flexShrink: 0, fontSize: "1.25rem", lineHeight: 1.3 }}>→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* What landlords CAN charge */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            What You Can Charge in Addition to Rent
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            While the no-network assumption limits the basic consideration payable, there are a number of additional items that landowners can legitimately recover:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
            {[
              {
                heading: "Compensation for loss or damage",
                detail: "Under Paragraph 25 of the Code, you are entitled to compensation for any loss or damage actually sustained as a result of the exercise of Code rights. This is separate from and additional to the annual consideration.",
              },
              {
                heading: "Reasonable professional fees",
                detail: "Under Paragraph 84, compensation includes reasonable legal and valuation expenses incurred in connection with the grant or renewal of Code rights.",
              },
              {
                heading: "Electricity costs",
                detail: "Where the operator uses your electricity supply, you can recover those costs in full.",
              },
              {
                heading: "Access rights over retained land",
                detail: "Where the operator needs to cross your land to reach the mast site, this additional right has value and can be separately negotiated.",
              },
              {
                heading: "Physical damage",
                detail: "Any damage to fences, gates, boundaries, land surface, or other property caused by the operator or their contractors.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  backgroundColor: "#f9f8f5",
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.5rem",
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
                  <strong style={{ fontSize: "1.0625rem", color: "#1a1a2e" }}>{item.heading}: </strong>
                  <span style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65 }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* What landlords CANNOT charge */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            What You Cannot Charge For
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
            {[
              {
                heading: "The value of the telecoms network",
                detail: "The entire purpose of the no-network assumption is to exclude this. You cannot charge a premium because the operator needs your specific site for coverage.",
              },
              {
                heading: "Speculative diminution in property value",
                detail: "Unless you can demonstrate actual measurable loss, the Tribunal will not award compensation for theoretical reductions in your property value.",
              },
              {
                heading: "Pre-2017 rent levels as a benchmark",
                detail: "Rents agreed before the new Code came into force are not admissible as comparable evidence in Tribunal proceedings.",
              },
              {
                heading: "Lost opportunity to use the site for telecoms yourself",
                detail: "Development potential attributable to telecoms use is excluded by the no-network assumption.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  backgroundColor: "#fff5f5",
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.5rem",
                  borderLeft: "3px solid #e53e3e",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    color: "#e53e3e",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginTop: "0.1rem",
                  }}
                >
                  ✗
                </span>
                <div>
                  <strong style={{ fontSize: "1.0625rem", color: "#1a1a2e" }}>{item.heading}: </strong>
                  <span style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65 }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* How We Can Help */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            How We Can Help
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            At The Phone Mast Advice Company Ltd, we act exclusively for landowners — we never act for operators. With over 30 years of experience advising on phone mast leases across the United Kingdom, we understand the complexities of the Electronic Communications Code and the practical impact of the 7 April 2026 changes.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            Whether your lease is coming up for renewal, you have received a notice from an operator, or you simply want to understand what your mast site is worth in 2026, our specialist telecoms surveyors can advise you.
          </p>

          {/* CTA contact box */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderRadius: "1rem",
              padding: "2rem",
              border: "1px solid #e5e7eb",
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
              Contact Us Today for Free Advice
            </h3>
            <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.65, marginBottom: "1.5rem" }}>
              Speak to a specialist about your phone mast rent — no obligation, no cost for an initial consultation. We act exclusively for landowners.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a
                href="tel:01691791543"
                className="btn-primary"
                style={{ fontSize: "1.0625rem", padding: "0.875rem 1.75rem" }}
              >
                📞 01691 791543
              </a>
              <a
                href="https://wa.me/447843352654"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "1.0625rem",
                  textDecoration: "none",
                  minHeight: "44px",
                }}
              >
                💬 WhatsApp Us
              </a>
              <a
                href="/free-rent-estimate"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  backgroundColor: "transparent",
                  color: "#1B4F72",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "1.0625rem",
                  textDecoration: "none",
                  border: "2px solid #1B4F72",
                  minHeight: "44px",
                }}
              >
                Free Rent Estimate →
              </a>
            </div>
          </div>

          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              lineHeight: 1.6,
              borderTop: "1px solid #e5e7eb",
              paddingTop: "1.5rem",
            }}
          >
            This page was last updated on 30 March 2026. The information provided is for general guidance only and does not constitute legal advice. For advice specific to your circumstances, please contact us directly.
          </p>
        </div>
      </section>

      <CTASection
        headline="Protect Your Phone Mast Rent Income in 2026"
        subheadline="7 April 2026 is days away. The PSTI Act changes remove key protections for legacy lease holders. Take specialist advice now. Free initial consultation."
        ctaText="Free Rent Estimate"
        ctaHref="/free-rent-estimate"
      />
    </>
  );
}
