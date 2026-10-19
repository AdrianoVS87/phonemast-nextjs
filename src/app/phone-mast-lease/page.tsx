/* eslint-disable @next/next/no-html-link-for-pages -- plain anchors, as on every other page of this site */
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

const REVIEWED = "19 October 2026";
const REVIEWED_ISO = "2026-10-19";

export const metadata: Metadata = {
  title: { absolute: "Phone Mast Lease: What UK Landlords Need to Know in 2026 | Phone Mast Advice" },
  description:
    "What a phone mast lease is, the clauses it contains, how long it lasts, what happens when it expires, operator rights to upgrade and share, the 7 April 2026 changes, and the mistakes to avoid before signing.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-lease/" },
  openGraph: {
    title: "Phone Mast Lease: What UK Landlords Need to Know in 2026",
    description:
      "The clauses, the Code, break clauses, renewals, upgrade and sharing rights, the 7 April 2026 changes, and the mistakes to avoid before signing.",
    type: "article",
  },
};

const H2: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
  color: "#1a1a2e",
  marginBottom: "1.25rem",
};
const H3: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "1.25rem",
  color: "#1B4F72",
  marginBottom: "0.875rem",
};
const P: React.CSSProperties = { fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" };
const LINK: React.CSSProperties = { color: "#1B4F72", fontWeight: 700, textDecoration: "underline" };
const CARD: React.CSSProperties = {
  backgroundColor: "#f9f8f5",
  borderRadius: "1rem",
  padding: "1.75rem 2rem",
  marginBottom: "1.5rem",
  border: "1px solid #e5e7eb",
};

const CLAUSES = [
  ["Date and parties", "When the lease was granted, and who the lessor (landlord) and lessee (operator) are."],
  ["Premises", "The exact area the operator has exclusive possession of: the compound or the roof area, with a plan."],
  ["Term and commencement date", "How long the lease runs and from when; the commencement date can differ from the date of the document."],
  ["Rent", "What the operator pays, normally annually. Under the Code it is called consideration."],
  ["Permitted use", "Normally restricted to telecommunications."],
  ["The rights and equipment rights", "What the operator may install, maintain and upgrade on the site."],
  ["Sharing and assignment", "The operator's rights to share the site with other operators and to assign the lease. Both changed under the 2017 Code: restrictions are largely void."],
  ["Group companies", "Whether companies in the operator's group may benefit from the lease."],
  ["Rent review and review dates", "The method (often the higher of market value or an index such as RPI) and the frequency, typically every three to five years."],
  ["Tenant and landlord break clauses", "The dates and the procedure for either side to end the lease early."],
  ["Lift and shift", "The right to require equipment to be moved or removed for essential repairs or works, and who pays."],
  ["Access and emergency access", "The route to the site, notice for routine visits, and the procedure in an emergency."],
  ["Switch off", "How the equipment is powered down in an emergency or during works."],
  ["Insurance and indemnity", "Who insures what, and the process if there is a claim."],
  ["Yield up and reinstatement", "What the operator must remove and restore when the lease ends (Paragraph 40 of the Code)."],
  ["Wayleaves and easements", "The landlord's obligations to allow third parties to install power and communication links to the site."],
];

export default function PhoneMastLeasePage() {
  const leaseFaqs = [
    {
      q: "How long does a phone mast lease last?",
      a: "There is no statutory minimum or maximum, but the Upper Tribunal now typically imposes a 10-year term with a tenant break at year 5 and a landlord's redevelopment break exercisable from the fifth anniversary on 18 months' notice, the pattern set in the 2024 Vache Farm decision. Rent is usually reviewed every five years, linked to RPI or CPI.",
    },
    {
      q: "What happens when my phone mast lease expires?",
      a: "It does not simply end. Under Paragraph 30 of the Electronic Communications Code the agreement continues in force by statute until it is properly terminated. To end it, the site provider must serve a Paragraph 31 notice giving at least 18 months' notice on one of four statutory grounds, and if the operator serves a counter-notice within three months, the matter goes to the Tribunal.",
    },
    {
      q: "Can I refuse a phone mast lease or make the operator leave?",
      a: "Rarely. Under Paragraph 21 the Tribunal can impose an agreement if the prejudice to you can be adequately compensated in money and the public benefit outweighs it, a test operators almost always satisfy. The main exception is the redevelopment defence under Paragraph 21(5): a firm, settled and unconditional intention to redevelop, with a reasonable prospect of carrying it out.",
    },
    {
      q: "Can the operator upgrade or share the mast without my consent?",
      a: "Usually, yes. Paragraph 17 permits upgrading and sharing without consent where there is no more than a minimal adverse impact on appearance and no additional burden on you, and the PSTI Act extended similar rights to older agreements through Paragraph 17A, subject to 21 days' notice. Terms restricting assignment to another operator are void under Paragraph 16.",
    },
    {
      q: "Should I sign the operator's proposed lease terms?",
      a: "Not without advice. Draft Heads of Terms are prepared by the operator's advisers and represent an opening position. Break clause drafting is critical: in On Tower v BT (2025) a termination failed because the break notice cited the wrong ground. Protections such as fee recovery, reinstatement obligations and rent review terms are commonly improved with landlord-side input.",
    },
    {
      q: "Is a phone mast agreement always a lease?",
      a: "No. Some agreements are licences or wayleaves, which do not grant exclusive possession. The label matters less than the substance: what the operator actually has on the ground, and whether the agreement pre-dates 28 December 2017 and is protected by the Landlord and Tenant Act 1954, decide which renewal regime applies.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: leaseFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Phone Mast Lease: What UK Landlords Need to Know in 2026",
    description: metadata.description,
    url: "https://www.phonemastadvice.co.uk/phone-mast-lease/",
    mainEntityOfPage: "https://www.phonemastadvice.co.uk/phone-mast-lease/",
    datePublished: "2026-03-30",
    dateModified: REVIEWED_ISO,
    inLanguage: "en-GB",
    author: {
      "@type": "Person",
      "@id": "https://www.phonemastadvice.co.uk/team/matt-restall/#person",
      name: "Matt Restall",
      jobTitle: "Founder and Director",
      url: "https://www.phonemastadvice.co.uk/team/matt-restall/",
    },
    publisher: { "@type": "Organization", name: "The Phone Mast Advice Company Ltd", url: "https://www.phonemastadvice.co.uk" },
    about: ["Phone mast lease", "Electronic Communications Code", "Telecoms lease renewal"],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Phone Mast Lease Advice",
    serviceType: "Telecom Property Advice",
    provider: { "@type": "ProfessionalService", name: "The Phone Mast Advice Company Ltd", url: "https://www.phonemastadvice.co.uk", telephone: "01691 791543" },
    areaServed: "United Kingdom",
    description: "Independent advice for UK landlords on phone mast lease clauses, Code provisions, case law and the 7 April 2026 PSTI Act changes.",
    url: "https://www.phonemastadvice.co.uk/phone-mast-lease/",
  };

  const numbered = (items: { heading: string; detail: string }[], colour = "#1B4F72") => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "#f9f8f5", borderRadius: "0.75rem", padding: "1.25rem 1.5rem" }}>
          <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: colour, display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.125rem" }}>
            {i + 1}
          </span>
          <div>
            <strong style={{ fontSize: "1.0625rem", color: "#1a1a2e" }}>{item.heading}: </strong>
            <span style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65 }}>{item.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: "Phone Mast Lease" }]} />

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
            Phone Mast Lease: What UK Landlords Need to Know in 2026
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.65, marginBottom: "1rem" }}>
            What a phone mast lease is, the clauses it contains, how long it lasts, what happens when it expires, what the operator may do without asking, what changed on 7 April 2026, and the mistakes to avoid before you sign.
          </p>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "2rem" }}>
            Written by <a href="/team/matt-restall/" style={{ color: "#ffffff", fontWeight: 700, textDecoration: "underline" }}>Matt Restall</a>, founder, specialist telecoms surveyor. Last reviewed {REVIEWED}.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="/free-lease-check/" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>Free Lease Check</a>
            <a href="tel:01691791543" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2rem", color: "#ffffff", border: "2px solid rgba(255,255,255,0.6)", borderRadius: "10px", fontWeight: 600, fontSize: "1.0625rem", textDecoration: "none", minHeight: "44px" }}>
              📞 01691 791543
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "860px" }}>

          {/* In short */}
          <div style={{ backgroundColor: "#f0f7ff", border: "1px solid #cfe3f5", borderRadius: "1rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.95rem", color: "#1B4F72", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 0.5rem" }}>In short</p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              A phone mast lease is a commercial lease with one big difference: the operator holds statutory rights under the Electronic Communications Code that override many of the clauses. The lease does not end when the term expires, the operator can usually upgrade and share without consent, restrictions on assignment are void, and the Tribunal can impose terms. Since 7 April 2026 even legacy leases renewing under the Landlord and Tenant Act 1954 are valued on the Code basis. The money side is covered in our <a href="/phone-mast-rent/" style={LINK}>phone mast rent</a> guide; the practical next step is a <a href="/free-lease-check/" style={LINK}>free lease check</a>.
            </p>
          </div>

          {/* What is */}
          <h2 style={H2}>What is a phone mast lease?</h2>
          <p style={P}>
            A phone mast lease is a legal contract that grants an operator exclusive possession of land or part of a building for a period of time, fixed or periodic, in return for rent (called consideration under the Code). Not all phone mast agreements are leases: some are structured as licences or wayleaves, which do not grant exclusive possession. The distinction matters because the rights and protections available to both landlord and operator differ depending on the type of agreement.
          </p>
          <p style={P}>
            In essence a phone mast lease is very similar to a normal commercial lease for a shop or an industrial unit. The exception is that the tenant benefits from &ldquo;code powers&rdquo; under the Electronic Communications Code, set out in Schedule 3A to the Communications Act 2003 (inserted by the Digital Economy Act 2017), which replaced the old code in the Telecommunications Act 1984 on <strong>28 December 2017</strong>. Those powers sit above the contract: several clauses a landlord would expect to rely on are overridden or void.
          </p>
          <p style={P}>
            Until 28 December 2017, phone mast leases were given security of tenure under Part II of the Landlord and Tenant Act 1954. Leases granted before that date and protected by the 1954 Act are still renewed under that Act. Leases granted after it are not protected by the 1954 Act; instead the Code gives operators their own form of security of tenure, with no option for the landlord to contract out.
          </p>

          {/* Clauses */}
          <h2 style={H2}>What clauses does a phone mast lease contain?</h2>
          <p style={P}>These are the standard clauses and provisions you would expect to find, and what each one does:</p>
          <div style={{ ...CARD, padding: "1.25rem 1.5rem" }}>
            <dl style={{ margin: 0 }}>
              {CLAUSES.map(([term, def]) => (
                <div key={term} style={{ display: "grid", gridTemplateColumns: "minmax(140px, 1fr) 3fr", gap: "0.75rem 1rem", padding: "0.75rem 0", borderBottom: "1px solid #e5e7eb" }}>
                  <dt style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "1.0625rem" }}>{term}</dt>
                  <dd style={{ margin: 0, color: "#374151", fontSize: "1.0625rem", lineHeight: 1.6 }}>{def}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div style={{ backgroundColor: "#fff8e1", borderLeft: "3px solid #f59e0b", borderRadius: "0 0.5rem 0.5rem 0", padding: "1rem 1.25rem", fontSize: "1rem", color: "#374151", lineHeight: 1.65, marginBottom: "2rem" }}>
            <strong>Two points landlords get wrong:</strong> once a lease is completed it is very hard to change terms that are not in your favour; and a lease that is silent on a matter does not stop the operator doing it. If you want to restrict something, it must be written into the lease, and even then the Code may override it.
          </div>

          {/* Heads of terms */}
          <h2 style={H2}>What are heads of terms, and why do they matter?</h2>
          <p style={P}>
            Heads of Terms are the main points of the lease, negotiated between the landlord&rsquo;s and the operator&rsquo;s surveyors before solicitors are instructed. Agreeing good Heads of Terms in principle first saves both sides time and legal fees, because the solicitors then document what has been agreed rather than negotiating it.
          </p>
          <p style={P}>
            Draft Heads of Terms arrive from the operator&rsquo;s advisers and represent their opening position. They should be negotiated by a specialist telecoms surveyor so that the wording, and the protections it gives you, are right before the lease is drafted. See <a href="/phone-mast-solicitors/" style={LINK}>phone mast solicitors or surveyors: who you need, and when</a>.
          </p>

          {/* Legal framework */}
          <h2 style={H2}>What does the Electronic Communications Code let the operator do?</h2>
          <p style={P}>
            The Code grants Ofcom-registered operators statutory rights to install, maintain, upgrade and share telecommunications apparatus on private land. What makes it significant for landowners is that it gives operators the power to apply to the Tribunal (in England and Wales, the First-tier Tribunal (Property Chamber) or the Upper Tribunal (Lands Chamber)) to have an agreement imposed on an unwilling site provider. Under <strong>Paragraph 21</strong>, the Tribunal will impose an agreement if the prejudice to the site provider is capable of being adequately compensated in money and the public benefit of the installation outweighs that prejudice. In practice, operators almost always satisfy this test.
          </p>
          <div style={{ backgroundColor: "#f0f7ff", borderLeft: "4px solid #1B4F72", borderRadius: "0 0.75rem 0.75rem 0", padding: "1.5rem 1.75rem", marginBottom: "2rem" }}>
            <h3 style={{ ...H3, fontSize: "1.125rem" }}>The redevelopment defence: Paragraph 21(5)</h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              The principal defence available to landowners is the redevelopment ground: if you can demonstrate a firm, settled and unconditional intention to redevelop your land, and a reasonable prospect of carrying it out, the Tribunal may refuse the operator&rsquo;s application. This test was confirmed in <em>EE Ltd v Sir James Chichester</em> [2019] UKUT 164 (LC) and applied more recently in <em>CTIL v Firoka (Kings Cross) Ltd</em> (2025), where a hotel owner defeated a rooftop installation application on genuine redevelopment grounds.
            </p>
          </div>

          {/* Key clauses under the Code */}
          <h2 style={H2}>How long does a phone mast lease last, and can it be ended early?</h2>
          <div style={CARD}>
            <h3 style={H3}>Duration and break clauses</h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              The Code prescribes no minimum or maximum duration. In practice the Tribunal typically imposes a <strong>10-year term with break clauses</strong>. <em>EE Ltd &amp; Hutchison 3G UK Ltd v AP Wireless II (UK) Ltd</em> [2024] UKUT 216 (LC) (<em>Vache Farm</em>) set the current standard: a 10-year lease with a tenant break at year 5 and a <strong>landlord&rsquo;s redevelopment break exercisable on or after the fifth anniversary on 18 months&rsquo; notice</strong>. The Tribunal confirmed that the landlord&rsquo;s right to terminate is not limited to non-telecoms redevelopment.
            </p>
            <div style={{ backgroundColor: "#fff8e1", borderLeft: "3px solid #f59e0b", borderRadius: "0 0.5rem 0.5rem 0", padding: "1rem 1.25rem", fontSize: "1rem", color: "#374151", lineHeight: 1.65 }}>
              <strong>⚠️ Break clauses must be followed to the letter.</strong> In <em>On Tower UK Ltd v British Telecommunications plc</em> [2025] EWCA Civ 844 the Court of Appeal held that where a site provider relies on a contractual break clause, every requirement of the clause must be strictly complied with. BT&rsquo;s termination notice was void because it cited the wrong ground. The case is now before the Supreme Court.
            </div>
          </div>

          <h2 style={H2}>What happens when a phone mast lease expires?</h2>
          <div style={CARD}>
            <h3 style={H3}>Continuation after expiry: Paragraphs 30 and 31</h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              <strong>Paragraph 30</strong> provides that a phone mast lease <strong>does not end when the contractual term expires</strong>. It continues in force as a matter of statute until actively determined under the Code. Simply waiting for the lease to run out does not remove the operator from your land.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              To end a lease, the site provider must serve a <strong>Paragraph 31 notice</strong> giving at least 18 months&rsquo; notice and specifying one of four statutory grounds: substantial breach, persistent payment delays, intention to redevelop, or that the Paragraph 21 public benefit test is no longer met. If the operator serves a counter-notice within three months, the agreement continues until the Tribunal determines the matter.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
              If the operator wants a new agreement instead, it serves a Paragraph 33 notice, or for a 1954 Act lease a Section 26 request: see our <a href="/section-26-notice/" style={LINK}>Section 26 notice guide</a> and the <a href="/blog/phone-mast-renewal-letter/" style={LINK}>renewal letter</a> explainer.
            </p>
          </div>

          <h2 style={H2}>Can the operator upgrade, share or assign the lease without my consent?</h2>
          <div style={CARD}>
            <h3 style={H3}>Upgrading and sharing: Paragraph 17</h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              Under <strong>Paragraph 17</strong>, an operator may upgrade apparatus or share it with another operator <strong>without the landowner&rsquo;s consent</strong>, provided the changes have no more than a minimal adverse impact on the appearance of the apparatus and impose no additional burden on the site provider. The Product Security and Telecommunications Infrastructure Act 2022 strengthened these rights: Section 58 inserted <strong>Paragraph 17A</strong>, extending automatic upgrading and sharing rights to legacy agreements pre-dating 2017, subject to 21 days&rsquo; notice. In <em>On Tower UK Limited v Green</em> [2022] 4 WLR 27 the Court of Appeal upheld unrestricted upgrading rights.
            </p>
            <h3 style={H3}>Assignment: Paragraph 16</h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "1rem" }}>
              <strong>Any term that prevents or limits assignment to another operator is void.</strong> The only protection available is to require the outgoing operator to enter into an authorised guarantee agreement. In <em>Vodafone Ltd v Potting Shed Bar and Gardens Ltd</em> [2023] EWCA Civ 825 the Court of Appeal confirmed that an operator who acquires Code rights by assignment retains full rights to seek renewal under Paragraph 33.
            </p>
            <h3 style={H3}>Rent review</h3>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
              Standard practice, as confirmed in recent Tribunal decisions, is for rent to be reviewed every five years in line with RPI or CPI. The Tribunal has also accepted an open market review trigger if the operator ceases to hold Code rights or assigns to a non-Code operator. How the rent itself is valued is explained in the <a href="/phone-mast-rent/" style={LINK}>phone mast rent</a> guide.
            </p>
          </div>

          {/* Rooftop */}
          <h2 style={H2}>What is different for rooftop sites?</h2>
          <p style={P}>Leases for rooftop installations involve considerations that do not arise with standalone masts:</p>
          {numbered([
            { heading: "Access through the building", detail: "How the operator reaches the roof, including stairwells, lifts and common areas, with advance notice for routine maintenance (typically 48 to 72 hours) and narrowly defined emergency access." },
            { heading: "Lift and shift", detail: "The right to require the operator to relocate or remove equipment temporarily for roof works, at the operator's cost. Particularly important given the Building Safety Act 2022 obligations on higher-risk buildings." },
            { heading: "Structural surveys", detail: "A structural survey before installation confirming the roof can bear the load, and the right to require a further survey before any upgrade." },
            { heading: "Building insurance", detail: "The operator should notify your insurer, contribute to any premium increase and hold its own public liability cover, typically a minimum of £5 million." },
            { heading: "Roof warranty", detail: "Installation can void flat roof guarantees; the lease should say who bears the cost of reinstating a damaged warranty." },
          ])}

          <h2 style={H2}>What should a standalone mast lease include?</h2>
          <p style={P}>Greenfield mast sites on farmland, rural estates or open ground present their own points:</p>
          {numbered([
            { heading: "Access track and rights of way", detail: "The route across your retained land has separate value and should be defined and negotiated." },
            { heading: "Compound boundaries", detail: "A precisely defined, typically fenced, compound, so the operator cannot expand its footprint without renegotiation." },
            { heading: "Agricultural impact", detail: "Livestock management around the compound and access during sensitive periods such as lambing and harvest." },
            { heading: "Reinstatement", detail: "Under Paragraph 40 you can require full removal of all apparatus and restoration of the land on termination, including foundations, cabinets, fencing and any access track, and apparatus installed by any sharing operator." },
          ])}

          {/* Decisions */}
          <h2 style={H2}>Which court decisions shape phone mast lease terms?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {[
              { citation: "Vache Farm [2024] UKUT 216 (LC)", summary: "The current leading authority on both rent and lease terms for rural mast sites: a 10-year lease, tenant break at year 5, landlord's redevelopment break from the fifth anniversary on 18 months' notice, RPI-linked reviews every five years, and the current rural rent benchmark." },
              { citation: "On Tower UK Ltd v BT plc [2025] EWCA Civ 844", summary: "Strict compliance with every condition of a break clause is essential when founding a Paragraph 31 termination notice. BT's termination was void because the notice cited the wrong ground. Now before the Supreme Court." },
              { citation: "On Tower UK Ltd v Green [2022] 4 WLR 27", summary: "Landowners cannot contractually prevent equipment upgrades where the Paragraph 17 conditions are satisfied." },
              { citation: "Vodafone Ltd v Potting Shed Bar and Gardens Ltd [2023] EWCA Civ 825", summary: "Operators who acquire Code rights through assignment retain full renewal rights under the Code, which matters where the original operator has been replaced through corporate restructuring." },
              { citation: "Cornerstone v Compton Beauchamp Estates [2022] UKSC 18", summary: "Operators with existing agreements protected under the Landlord and Tenant Act 1954 must renew under that Act, not under the Code. One of the most important protections for landowners with pre-2017 leases until the PSTI Act changes took effect on 7 April 2026. The Phone Mast Advice Company instigated and advised on this case." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#f9f8f5", borderRadius: "0.75rem", padding: "1.5rem 1.75rem", borderLeft: "4px solid #a4ca62" }}>
                <p style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1B4F72", marginBottom: "0.625rem" }}><em>{item.citation}</em></p>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>{item.summary}</p>
              </div>
            ))}
          </div>

          {/* 7 April 2026 */}
          <div style={{ backgroundColor: "#1B4F72", borderRadius: "1rem", padding: "2rem 2.25rem", marginBottom: "2rem", color: "#ffffff" }}>
            <h2 style={{ ...H2, color: "#ffffff", fontWeight: 800, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)" }}>What changed on 7 April 2026?</h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "1rem" }}>
              On <strong>7 April 2026</strong>, Sections 61 to 64 of the PSTI Act 2022 came into force, inserting a new <strong>Section 34A into the Landlord and Tenant Act 1954</strong>. For the first time, qualifying telecoms tenancies that renew under the 1954 Act are subject to the Code&rsquo;s no-network assumption when rent is assessed on renewal. This removed the financial advantage that landowners with pre-2017 leases previously enjoyed under <em>Compton Beauchamp</em>.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Transitional provisions ensure that rents already received are not required to be repaid",
                "Interim rent is split: periods before 7 April 2026 are valued under the old rules, and periods from that date onwards under the new framework",
                "Since 30 July 2026, new 1954 Act renewal proceedings for these telecoms leases are heard by the First-tier Tribunal and the Upper Tribunal instead of the courts; Code disputes have been heard by the First-tier Tribunal (Property Chamber) since 6 April 2024",
                "Since November 2023, an operator must consider alternative dispute resolution, where reasonably practicable, before applying to impose Code rights, and both sides must do so before applying for new terms under Paragraph 33",
              ].map((point, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, alignItems: "flex-start" }}>
                  <span style={{ color: "#a4ca62", flexShrink: 0, fontSize: "1.25rem", lineHeight: 1.3 }}>→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Mistakes */}
          <h2 style={H2}>What mistakes do landlords make with phone mast leases?</h2>
          {numbered([
            { heading: "Accepting the first offer", detail: "Initial offers usually undervalue the site and lock the landlord into weaker terms for the whole term." },
            { heading: "Agreeing unfavourable terms", detail: "Broad access rights, minimal maintenance duties and weak reinstatement clauses cause years of friction." },
            { heading: "Ignoring operator notices", detail: "Silence does not pause the statutory process. It pushes the operator to the Tribunal, where terms are imposed and the operator's fee undertaking may fall away." },
            { heading: "Demanding immediate removal", detail: "An outright refusal or a removal demand without a valid ground invites proceedings and court-enforced terms." },
            { heading: "Not keeping records", detail: "Offers, counter-offers, notices and their dates are the evidence you will need if the matter goes to the Tribunal." },
          ], "#e53e3e")}

          {/* How we help */}
          <h2 style={H2}>How we can help</h2>
          <p style={P}>
            The Phone Mast Advice Company Ltd advises landowners only; we never act for operators. With over 30 years negotiating lease terms with Vodafone, O2, EE, Three, CTIL/Cornerstone, Cellnex, On Tower, Airwave and every other major operator in the UK, we know what each clause does in practice. Whether you are negotiating a new lease, facing a <a href="/phone-mast-services/lease-renewals/" style={LINK}>renewal</a>, or have received a notice, start with a <a href="/free-lease-check/" style={LINK}>free lease check</a>.
          </p>

          {/* FAQ */}
          <h2 style={H2}>Phone mast lease: frequently asked questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
            {leaseFaqs.map((f, i) => (
              <div key={i} style={{ backgroundColor: "#f9f8f5", borderRadius: "0.75rem", padding: "1.5rem 1.75rem", border: "1px solid #e5e7eb" }}>
                <h3 style={{ ...H3, fontSize: "1.125rem", marginBottom: "0.625rem" }}>{f.q}</h3>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>

          {/* Author */}
          <div style={{ backgroundColor: "#f0f7ff", border: "1px solid #cfe3f5", borderRadius: "1rem", padding: "1.5rem 1.75rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.95rem", color: "#1B4F72", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 0.5rem" }}>About the author</p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              <a href="/team/matt-restall/" style={LINK}>Matt Restall</a> founded The Phone Mast Advice Company and has advised UK landlords on phone mast leases, rents and renewals for over 30 years. He instigated and advised on <em>Compton Beauchamp Estates v CTIL</em> [2022] UKSC 18. This guide is kept to what the legislation, the Tribunal decisions and the firm&rsquo;s own deal evidence support. Last reviewed {REVIEWED}.
            </p>
          </div>

          {/* CTA */}
          <div style={{ ...CARD, padding: "2rem" }}>
            <h3 style={H3}>Have your lease or the operator&rsquo;s terms checked, free</h3>
            <p style={{ ...P, marginBottom: "1.5rem" }}>No obligation, no cost for the initial review. We act exclusively for landowners.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a href="/free-lease-check/" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "0.875rem 1.75rem" }}>Free Lease Check →</a>
              <a href="tel:01691791543" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", backgroundColor: "transparent", color: "#1B4F72", borderRadius: "10px", fontWeight: 600, fontSize: "1.0625rem", textDecoration: "none", border: "2px solid #1B4F72", minHeight: "44px" }}>📞 01691 791543</a>
            </div>
          </div>

          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem" }}>
            Last reviewed on {REVIEWED}. The information provided is for general guidance only and does not constitute legal advice. For advice specific to your circumstances, please contact us directly.
          </p>
        </div>
      </section>

      <CTASection
        headline="Expert Phone Mast Lease Advice for 2026"
        subheadline="The PSTI Act changes are in force and the legacy protections have changed. Specialist advice on your lease terms protects your income for years to come."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check/"
      />
    </>
  );
}
