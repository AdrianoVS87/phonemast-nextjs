import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Phone Mast Lease 2026 | ECC Clauses & PSTI Act",
  description:
    "Key phone mast lease clauses under the ECC 2017, case law, rooftop vs greenfield provisions, and the 7 April 2026 PSTI Act changes explained for UK landlords.",
  alternates: { canonical: "https://phonemastadvice.co.uk/phone-mast-lease-2026" },
  openGraph: {
    title: "Phone Mast Lease 2026 | ECC Clauses & PSTI Act",
    description:
      "Key phone mast lease clauses under the ECC 2017, case law, rooftop vs greenfield provisions, and the 7 April 2026 PSTI Act changes explained for UK landlords.",
    type: "website",
  },
};

export default function PhoneMastLease2026Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Phone Mast Lease Advice",
    serviceType: "Telecom Property Advice",
    provider: {
      "@type": "ProfessionalService",
      name: "The Phone Mast Advice Company Ltd",
      url: "https://phonemastadvice.co.uk",
      telephone: "01691 791543",
    },
    areaServed: "United Kingdom",
    description:
      "Expert independent advice for UK landlords on phone mast lease clauses, ECC provisions, case law, and the 7 April 2026 PSTI Act changes.",
    url: "https://phonemastadvice.co.uk/phone-mast-lease-2026",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs items={[{ label: "Phone Mast Lease 2026" }]} />

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
            If you own land or a building with a phone mast, your lease agreement is governed by the Electronic Communications Code. Understanding the clauses in your lease — and the rights operators now hold by statute — is essential to protecting your position in 2026.
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

          {/* Legal Framework */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            The Legal Framework: The Electronic Communications Code
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The Electronic Communications Code (ECC) was reformed by the Digital Economy Act 2017 and came into force on <strong>28 December 2017</strong>. It is found at Schedule 3A to the Communications Act 2003. The Code grants Ofcom-registered operators specific statutory rights to install, maintain, upgrade, and share telecommunications apparatus on private land.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            What makes the Code significant for landowners is that it gives operators the power to apply to the Upper Tribunal (Lands Chamber) to have a lease agreement imposed on an unwilling site provider. Under <strong>Paragraph 21</strong>, the Tribunal will impose an agreement if two conditions are met: the prejudice to the site provider is capable of being adequately compensated in money, and the public benefit of the installation outweighs that prejudice. In practice, operators almost always satisfy this test.
          </p>

          <div
            style={{
              backgroundColor: "#f0f7ff",
              borderLeft: "4px solid #1B4F72",
              borderRadius: "0 0.75rem 0.75rem 0",
              padding: "1.5rem 1.75rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#1B4F72",
                marginBottom: "0.75rem",
              }}
            >
              The Redevelopment Defence — Paragraph 21(5)
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              The principal defence available to landowners is the redevelopment ground under <strong>Paragraph 21(5)</strong>: if you can demonstrate a firm, settled and unconditional intention to redevelop your land, and a reasonable prospect of carrying it out, the Tribunal may refuse the operator&rsquo;s application. This test was confirmed in <em>EE Ltd v Sir James Chichester</em> [2019] UKUT 164 (LC) and applied more recently in <em>CTIL v Firoka (Kings Cross) Ltd</em> (2025), where a hotel owner successfully defeated a rooftop installation application on genuine redevelopment grounds.
            </p>
          </div>

          {/* Key Lease Clauses */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Key Lease Clauses Under the Electronic Communications Code
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Whether your lease is negotiated voluntarily or imposed by the Tribunal under <strong>Paragraph 23</strong>, the following clauses are central to every phone mast lease in 2026.
          </p>

          {/* Duration and Break Clauses */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderRadius: "1rem",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
              border: "1px solid #e5e7eb",
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
              Duration and Break Clauses
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              The Code prescribes no minimum or maximum lease duration. In practice, the Tribunal typically imposes a <strong>10-year term with break clauses</strong>. The landmark decision in <em>EE Ltd &amp; Hutchison 3G UK Ltd v AP Wireless II (UK) Ltd</em> [2024] UKUT 216 (LC) (<em>Vache Farm</em>) established the current standard: a 10-year lease with a tenant break at year 5 and a <strong>landlord&rsquo;s redevelopment break exercisable on or after the fifth anniversary on 18 months&rsquo; notice</strong>.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              The redevelopment break clause imposed at Vache Farm is particularly significant. The Tribunal confirmed that the landlord&rsquo;s right to terminate is not limited to non-telecoms redevelopment — a landlord who intends to build their own telecoms infrastructure and renegotiate on different terms is entitled to exercise the break.
            </p>
            <div
              style={{
                backgroundColor: "#fff8e1",
                borderLeft: "3px solid #f59e0b",
                borderRadius: "0 0.5rem 0.5rem 0",
                padding: "1rem 1.25rem",
                fontSize: "1rem",
                color: "#374151",
                lineHeight: 1.65,
              }}
            >
              <strong>⚠️ Critical warning on break clauses:</strong> In <em>On Tower UK Ltd v British Telecommunications plc</em> [2025] EWCA Civ 844, the Court of Appeal held that where a site provider relies on a contractual break clause to terminate, <strong>every requirement of the clause must be strictly complied with</strong>. BT&rsquo;s termination notice was held void because the break notice cited the wrong ground. Landowners must ensure break clauses are drafted with precision — ideally as unconditional rolling breaks exercisable on notice alone.
            </div>
          </div>

          {/* Assignment — Paragraph 16 */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderRadius: "1rem",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
              border: "1px solid #e5e7eb",
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
              Assignment — Paragraph 16
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              Paragraph 16 of the Code provides that <strong>any term in a lease that prevents or limits assignment to another operator is void</strong>. This means you cannot contractually restrict an operator from transferring your lease to a different company. The only protection available is to require the outgoing operator to enter into an <strong>authorised guarantee agreement</strong>, guaranteeing the incoming operator&rsquo;s performance.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
              In <em>Vodafone Ltd v Potting Shed Bar and Gardens Ltd</em> [2023] EWCA Civ 825, the Court of Appeal confirmed that an operator who acquires Code rights by assignment retains full rights to seek lease renewal under Paragraph 33 of the Code.
            </p>
          </div>

          {/* Upgrading and Sharing — Paragraph 17 */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderRadius: "1rem",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
              border: "1px solid #e5e7eb",
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
              Upgrading and Sharing — Paragraph 17
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              Under <strong>Paragraph 17</strong>, an operator may upgrade apparatus or share it with another operator <strong>without the landowner&rsquo;s consent</strong>, provided two conditions are met: the changes have no more than a minimal adverse impact on the appearance of the apparatus, and they impose no additional burden on the site provider (including noise, vibration, and physical intrusion).
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              The Product Security and Telecommunications Infrastructure Act 2022 further strengthened these rights. Section 58 inserted <strong>Paragraph 17A</strong>, extending automatic upgrading and sharing rights to legacy agreements predating 2017 and even to apparatus installed before 29 December 2003, subject to 21 days&rsquo; advance notice.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
              In <em>On Tower UK Limited v Green</em> [2022] 4 WLR 27, the Court of Appeal upheld unrestricted upgrading rights, rejecting the site provider&rsquo;s attempts to impose restrictions based on security concerns and visual intrusion.
            </p>
          </div>

          {/* Continuation After Expiry — Paragraphs 30 & 31 */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderRadius: "1rem",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
              border: "1px solid #e5e7eb",
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
              Continuation After Expiry — Paragraphs 30 and 31
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              <strong>Paragraph 30</strong> provides that a phone mast lease <strong>does not end when the contractual term expires</strong>. It continues in force as a matter of statute until actively determined under the Code. Simply waiting for the lease to run out does not remove the operator from your land.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              To end a lease, the site provider must serve a <strong>Paragraph 31 notice</strong> giving at least 18 months&rsquo; notice and specifying one of four statutory grounds: substantial breach, persistent payment delays, intention to redevelop, or that the Paragraph 21 public benefit test is no longer met.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
              If the operator serves a counter-notice within three months, the agreement continues until the Tribunal determines the matter.
            </p>
          </div>

          {/* Rent Review */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              borderRadius: "1rem",
              padding: "1.75rem 2rem",
              marginBottom: "2rem",
              border: "1px solid #e5e7eb",
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
              Rent Review
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              Standard practice, as confirmed in recent Tribunal decisions, is for rent to be reviewed every five years in line with RPI or CPI. Additionally, the Tribunal has accepted an open market rent review trigger if the operator ceases to hold Code rights or assigns the agreement to a non-Code operator — a provision that protects the landowner if the nature of the tenant fundamentally changes.
            </p>
          </div>

          {/* Rooftop Sites */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Rooftop Sites: Additional Lease Considerations
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Leases for rooftop installations involve a number of considerations that do not arise with standalone masts:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
            {[
              {
                heading: "Access through the building",
                detail: "The lease must address how the operator accesses the roof, including the use of stairwells, lifts, and common areas. Access provisions should include advance notice requirements (typically 48–72 hours for routine maintenance) and narrowly defined emergency access rights.",
              },
              {
                heading: "Lift and shift clauses",
                detail: "These allow the building owner to require the operator to temporarily relocate or remove equipment when roof works are needed (such as re-roofing, waterproofing, or cladding replacement). The operator should bear the full cost of any temporary relocation. This clause is now particularly important given the obligations arising under the Building Safety Act 2022 for higher-risk buildings.",
              },
              {
                heading: "Structural surveys",
                detail: "Before any installation, the operator should commission and share a structural survey confirming the roof can bear the load. The landlord should retain the right to require a further survey before any upgrade or additional equipment.",
              },
              {
                heading: "Building insurance",
                detail: "The presence of telecoms apparatus may affect building insurance premiums. The lease should require the operator to notify the landlord's insurer, contribute to any premium increase, and maintain its own public liability insurance (typically a minimum of £5 million).",
              },
              {
                heading: "Roof warranty",
                detail: "Installation can void flat roof guarantees. The lease should address who bears the cost of reinstating any damaged warranty.",
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
                  {i + 1}
                </span>
                <div>
                  <strong style={{ fontSize: "1.0625rem", color: "#1a1a2e" }}>{item.heading}: </strong>
                  <span style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65 }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Standalone Masts */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Standalone Masts: Key Lease Provisions
          </h2>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Greenfield mast sites — free-standing structures on farmland, rural estates, or open ground — present different considerations:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
            {[
              {
                heading: "Access track and rights of way",
                detail: "The lease should carefully define the access route across the landowner's retained land. Where the operator needs to cross fields, tracks, or private roads, this additional access right has separate value and should be negotiated accordingly.",
              },
              {
                heading: "Compound boundaries",
                detail: "The demised area should be precisely defined (typically a fenced compound) to prevent the operator expanding their footprint without renegotiation.",
              },
              {
                heading: "Agricultural impact",
                detail: "For working farms, the lease should address the impact on farming operations, including livestock management around the compound and access during sensitive periods (lambing, harvest).",
              },
              {
                heading: "Reinstatement",
                detail: "Under Paragraph 40, the site provider can require full removal of all apparatus and restoration of the land on termination. For standalone masts, this includes foundations, cabinets, fencing, and any access track installed by the operator. The obligation should extend to apparatus installed by any sharing operator.",
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
                  {i + 1}
                </span>
                <div>
                  <strong style={{ fontSize: "1.0625rem", color: "#1a1a2e" }}>{item.heading}: </strong>
                  <span style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65 }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Key Court Decisions on Lease Terms */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Key Court Decisions on Lease Terms
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {[
              {
                citation: "Vache Farm [2024] UKUT 216 (LC)",
                summary: "The current leading authority on both rent and lease terms for rural mast sites. The Tribunal imposed a 10-year lease with a tenant break at year 5 and a landlord's redevelopment break from the fifth anniversary on 18 months' notice. The decision confirmed that redevelopment need not be for non-telecoms purposes, and established the current rural greenfield rent benchmark. It also confirmed RPI-linked rent reviews every five years as the standard.",
              },
              {
                citation: "On Tower UK Ltd v BT plc [2025] EWCA Civ 844",
                summary: "A Court of Appeal decision that exposed the dangers of poorly drafted break clauses. BT's termination was held void because the break notice cited the wrong contractual ground. The case established that strict compliance with every condition of a break clause is essential when founding a Paragraph 31 termination notice. This case is now before the Supreme Court.",
              },
              {
                citation: "On Tower UK Ltd v Green [2022] 4 WLR 27",
                summary: "The Court of Appeal upheld unrestricted upgrading rights for operators, confirming that landowners cannot contractually prevent equipment upgrades where the Paragraph 17 conditions are satisfied.",
              },
              {
                citation: "Vodafone Ltd v Potting Shed Bar and Gardens Ltd [2023] EWCA Civ 825",
                summary: "Confirmed that operators who acquire Code rights through assignment retain full renewal rights under the Code. This has significant implications for landowners whose original operator has been replaced through corporate restructuring.",
              },
              {
                citation: "Cornerstone v Compton Beauchamp Estates [2022] UKSC 18",
                summary: "A Supreme Court decision that confirmed operators with existing agreements protected under the Landlord and Tenant Act 1954 must renew under that Act, not under the Code. This has been one of the most important protections for landowners with pre-2017 leases — until now.",
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

          {/* 7 April 2026 Changes */}
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
              On <strong>7 April 2026</strong>, Sections 61 to 64 of the PSTI Act 2022 come into force, inserting a new <strong>Section 34A into the Landlord and Tenant Act 1954</strong>. For the first time, qualifying telecoms tenancies that renew under the 1954 Act will be subject to the Code&rsquo;s no-network assumption when rent is assessed on renewal.
            </p>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "1rem" }}>
              This removes the significant financial advantage that landowners with pre-2017 leases have enjoyed under the <em>Cornerstone v Compton Beauchamp</em> Supreme Court ruling. An estimated <strong>15,000 legacy telecoms agreements</strong> across the UK will be affected.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0" }}>
              {[
                "Transitional provisions ensure that rents already received are not required to be repaid",
                "Interim rent is split: periods before 7 April 2026 are valued under the old rules, and periods from that date onwards under the new framework",
                "From the same date, jurisdiction for telecoms disputes transfers from the Upper Tribunal (Lands Chamber) to the First-tier Tribunal (Property Chamber)",
                "Since November 2023, operators and site providers are required to consider Alternative Dispute Resolution before applying to the Tribunal for renewal or modification of agreements",
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
            At The Phone Mast Advice Company Ltd, we specialise exclusively in advising landowners on phone mast leases. We never act for operators. With over 25 years of experience negotiating lease terms with Vodafone, O2, EE, Three, CTIL, Cornerstone, Cellnex, On Tower, Airwave, and every other major operator in the UK, we understand the detail of every clause in your agreement.
          </p>

          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            Whether you are negotiating a new lease, facing a renewal, or have received a notice from an operator, our specialist telecoms surveyors can review your terms and advise on the best course of action.
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
              Contact Us Today for Free Advice on Your Phone Mast Lease
            </h3>
            <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.65, marginBottom: "1.5rem" }}>
              Speak to a specialist about your lease terms — no obligation, no cost for an initial consultation. We act exclusively for landowners.
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
                href="/free-lease-check"
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
                Free Lease Check →
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
        headline="Expert Phone Mast Lease Advice for 2026"
        subheadline="7 April 2026 is days away. The PSTI Act changes remove key protections for legacy lease holders. Specialist advice now protects your income for years to come."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check"
      />
    </>
  );
}
