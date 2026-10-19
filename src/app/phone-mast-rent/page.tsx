/* eslint-disable @next/next/no-html-link-for-pages -- plain anchors, as on every other page of this site */
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

const REVIEWED = "19 October 2026";
const REVIEWED_ISO = "2026-10-19";

export const metadata: Metadata = {
  title: { absolute: "Phone Mast Rent: How Much Operators Pay UK Landlords in 2026 | Phone Mast Advice" },
  description:
    "How much rent a phone mast pays in 2026: the Tribunal figures by site type, how the no-network valuation works, what changed on 7 April 2026, and what you can still charge on top.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-rent/" },
  openGraph: {
    title: "Phone Mast Rent: How Much Operators Pay UK Landlords in 2026",
    description:
      "Tribunal rent figures by site type, how the no-network valuation works, the 7 April 2026 changes, and what you can still charge on top.",
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

const RENT_BENCHMARKS = [
  { site: "Standard rural mast on farmland (greenfield)", figure: "£1,750 a year", source: "Vache Farm, Upper Tribunal, 2024" },
  { site: "Standard rural mast, the earlier Tribunal benchmark", figure: "£750 a year", source: "Upper Tribunal decisions before 2024" },
  { site: "Rural site next to housing", figure: "£1,200 a year", source: "Dale Park, Upper Tribunal, 2020" },
  { site: "Water tower on greenfield land", figure: "£3,300 a year", source: "Affinity Water, Upper Tribunal" },
  { site: "City rooftop on a retail or office building", figure: "£3,850 a year", source: "Affinity Water table, Upper Tribunal" },
  { site: "City rooftop on a residential building", figure: "£5,000 a year", source: "Affinity Water table, Upper Tribunal" },
];

export default function PhoneMastRentPage() {
  const rentFaqs = [
    {
      q: "How much rent can I get for a phone mast in 2026?",
      a: "It depends on the site type. Under the Code's no-network assumption, rent reflects your land's alternative use value rather than its value to the operator's network. For a standard rural greenfield mast, the Upper Tribunal's Vache Farm decision (2024) set consideration at £1,750 per annum, while rooftop and urban sites are generally assessed at higher levels. On top of this you can recover professional fees, compensation and electricity costs. Request a free rent estimate for a figure specific to your site.",
    },
    {
      q: "How is phone mast rent calculated?",
      a: "Under Paragraph 24 of the Electronic Communications Code, rent (known in the legislation as consideration) is assessed on the no-network assumption: your land is valued at its best alternative, non-telecoms use, ignoring its value to the operator's network. The Upper Tribunal applies a three-stage approach: alternative use value, plus any additional benefits the site confers on the operator, plus an allowance for the burdens the telecoms use imposes on you.",
    },
    {
      q: "Can the operator reduce my phone mast rent?",
      a: "On renewal, yes. Code valuations are typically much lower than legacy open-market rents, and since 7 April 2026 the no-network assumption also applies to qualifying renewals under the Landlord and Tenant Act 1954. However, the operator's proposed figure is an opening position: professional fees, compensation and electricity costs remain recoverable, and terms can usually be improved with landlord-side advice.",
    },
    {
      q: "What can I charge in addition to phone mast rent?",
      a: "Compensation for loss or damage under Paragraph 25, reasonable professional fees under Paragraph 84, electricity costs where the operator uses your supply, payment for access rights over your retained land, and the cost of any physical damage caused by the operator or its contractors.",
    },
    {
      q: "Do the 7 April 2026 PSTI Act changes affect my rent?",
      a: "If your agreement pre-dates 28 December 2017 and renews under the Landlord and Tenant Act 1954, renewal rent is now assessed on the no-network basis under the new Section 34A. Rent already received does not have to be repaid, interim rent is split at 7 April 2026, and since 30 July 2026 new renewal proceedings for these leases go to the First-tier Tribunal and the Upper Tribunal instead of the courts.",
    },
    {
      q: "Is the rent figure in the operator's letter final?",
      a: "No. The figure in a renewal letter or Heads of Terms is the operator's advisers' opening position. Whether it is right for your site depends on the site type, the agreement you hold, the Tribunal benchmarks and the extras you are entitled to. Do not sign or agree a figure before it has been checked.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rentFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Phone Mast Rent: How Much Operators Pay UK Landlords in 2026",
    description: metadata.description,
    url: "https://www.phonemastadvice.co.uk/phone-mast-rent/",
    mainEntityOfPage: "https://www.phonemastadvice.co.uk/phone-mast-rent/",
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
    publisher: {
      "@type": "Organization",
      name: "The Phone Mast Advice Company Ltd",
      url: "https://www.phonemastadvice.co.uk",
    },
    about: ["Phone mast rent", "Electronic Communications Code", "Telecoms lease renewal"],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Phone Mast Rent Advice",
    serviceType: "Telecom Property Advice",
    provider: { "@type": "ProfessionalService", name: "The Phone Mast Advice Company Ltd", url: "https://www.phonemastadvice.co.uk", telephone: "01691 791543" },
    areaServed: "United Kingdom",
    description: "Independent advice for UK landlords on phone mast rent under the Electronic Communications Code: valuation, Tribunal benchmarks, the 7 April 2026 changes and what you can recover on top.",
    url: "https://www.phonemastadvice.co.uk/phone-mast-rent/",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: "Phone Mast Rent" }]} />

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
            Phone Mast Rent: How Much Operators Pay UK Landlords in 2026
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.65, marginBottom: "1rem" }}>
            The Tribunal figures by site type, how rent is calculated under the Electronic Communications Code, what changed on 7 April 2026, and what you can still charge on top of the rent.
          </p>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "2rem" }}>
            Written by <a href="/team/matt-restall/" style={{ color: "#ffffff", fontWeight: 700, textDecoration: "underline" }}>Matt Restall</a>, founder, specialist telecoms surveyor. Last reviewed {REVIEWED}.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="/free-rent-estimate/" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
              Free Rent Estimate
            </a>
            <a href="tel:01691791543" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2rem", color: "#ffffff", border: "2px solid rgba(255,255,255,0.6)", borderRadius: "10px", fontWeight: 600, fontSize: "1.0625rem", textDecoration: "none", minHeight: "44px" }}>
              📞 01691 791543
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "860px" }}>

          {/* Short answer */}
          <div style={{ backgroundColor: "#f0f7ff", border: "1px solid #cfe3f5", borderRadius: "1rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.95rem", color: "#1B4F72", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 0.5rem" }}>In short</p>
            <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              Since the 2017 Code, phone mast rent is valued as if the site were not needed for a mobile network. Where landlord and operator cannot agree, the Upper Tribunal has imposed figures from <strong>£750 to £1,750 a year</strong> for a standard rural mast and <strong>£3,850 to £5,000 a year</strong> for city rooftops. Fees, compensation and electricity are paid on top. Legacy leases renewing under the Landlord and Tenant Act 1954 moved to the same basis on 7 April 2026. The figure in an operator&rsquo;s letter is an opening position, not the answer. Reviewing the agreement itself? Read the <a href="/phone-mast-lease/" style={LINK}>phone mast lease</a> guide.
            </p>
          </div>

          {/* How much */}
          <h2 style={H2}>How much rent does a phone mast pay in 2026?</h2>
          <p style={P}>
            There is no official tariff. Rent is agreed between landlord and operator, and when they cannot agree the Upper Tribunal (Lands Chamber) sets it. The published Tribunal figures are the best public benchmark, because every operator&rsquo;s adviser uses them as the starting point for an offer.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "1.25rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1.0625rem", color: "#374151", minWidth: "560px" }}>
              <thead>
                <tr style={{ backgroundColor: "#1B4F72", color: "#ffffff" }}>
                  <th style={{ textAlign: "left", padding: "0.75rem 1rem" }}>Site type</th>
                  <th style={{ textAlign: "left", padding: "0.75rem 1rem" }}>Tribunal figure</th>
                  <th style={{ textAlign: "left", padding: "0.75rem 1rem" }}>Decision</th>
                </tr>
              </thead>
              <tbody>
                {RENT_BENCHMARKS.map((r, i) => (
                  <tr key={r.site} style={{ backgroundColor: i % 2 ? "#ffffff" : "#f9f8f5", borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "0.75rem 1rem", lineHeight: 1.5 }}>{r.site}</td>
                    <td style={{ padding: "0.75rem 1rem", fontWeight: 700, color: "#1a1a2e", whiteSpace: "nowrap" }}>{r.figure}</td>
                    <td style={{ padding: "0.75rem 1rem", lineHeight: 1.5 }}>{r.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={P}>
            Three things to read with that table. First, these are figures imposed where the parties could not agree; negotiated agreements, sites with unusual features and leases still governed by the Landlord and Tenant Act 1954 can differ. Second, the Tribunal has said that the older figures should be adjusted for inflation, which is why the standard rural figure rose from £750 to £1,750 in <em>Vache Farm</em> (2024). Third, the rent is only part of what you receive: the extras in the section <a href="#extras" style={LINK}>what you can charge in addition to rent</a> are often worth more than the rent itself in the first year.
          </p>
          <p style={P}>
            For a figure specific to your site, request a <a href="/free-rent-estimate/" style={LINK}>free phone mast rent estimate</a>. We compare your site with our own record of agreed deals as well as the Tribunal decisions.
          </p>

          {/* How calculated */}
          <h2 style={H2}>How is phone mast rent calculated under the Electronic Communications Code?</h2>
          <p style={P}>
            Since the Electronic Communications Code (ECC) was reformed by the Digital Economy Act 2017 and came into force on <strong>28 December 2017</strong>, the way phone mast rent is calculated has fundamentally changed. Under the previous legislation (Schedule 2 of the Telecommunications Act 1984), rent was typically negotiated at open market value, and landowners could factor in the strategic importance of their site to the operator.
          </p>
          <p style={P}>
            The 2017 Code introduced a radically different approach. Rent, referred to as &ldquo;consideration&rdquo; in the legislation, is now governed by <strong>Paragraph 24 of Schedule 3A to the Communications Act 2003</strong>. The central principle is the <strong>no-network assumption</strong>.
          </p>
          <div style={{ backgroundColor: "#f0f7ff", borderLeft: "4px solid #1B4F72", borderRadius: "0 0.75rem 0.75rem 0", padding: "1.75rem 2rem", marginBottom: "2rem" }}>
            <h3 style={H3}>The no-network assumption explained</h3>
            <p style={{ ...P, marginBottom: "1rem" }}>
              Under Paragraph 24, the Tribunal must value the site as though the agreement &ldquo;does not relate to the provision or use of an electronic communications network.&rdquo; In plain terms, <strong>the telecoms premium is stripped out entirely</strong>. Your land is valued at its underlying use value, for example agricultural, storage or car parking, rather than at a premium reflecting its importance to a mobile network.
            </p>
            <p style={{ ...P, margin: 0 }}>
              The valuation also assumes that there is more than one site the operator could use for the same purpose, removing any scarcity value a landlord might otherwise rely upon.
            </p>
          </div>

          <h2 style={H2}>What is the three-stage valuation the Tribunal applies?</h2>
          <p style={P}>The Upper Tribunal (Lands Chamber) has established a three-stage methodology for determining consideration:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {[
              { stage: "Stage 1", label: "Alternative use value", detail: "What rent would the site command for its best non-telecoms use?" },
              { stage: "Stage 2", label: "Additional benefits", detail: "Any extra value conferred on the operator, such as an elevated position or existing power supply." },
              { stage: "Stage 3", label: "Adverse effects", detail: "The burden or disturbance imposed on the landowner by the telecoms use, including loss of amenity, restrictions on development, and interference with other activities." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", backgroundColor: "#f9f8f5", borderRadius: "0.75rem", padding: "1.25rem 1.5rem" }}>
                <div style={{ flexShrink: 0, width: "3rem", height: "3rem", borderRadius: "50%", backgroundColor: "#1B4F72", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "0.8125rem", fontWeight: 700 }}>
                  {i + 1}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "1.0625rem", color: "#1a1a2e", marginBottom: "0.25rem" }}>{item.stage}: {item.label}</p>
                  <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={P}>
            This structured approach was first set out in <em>Vodafone Ltd v Hanover Capital Ltd</em> and subsequently endorsed by the Upper Tribunal in multiple decisions.
          </p>

          {/* Rooftop vs greenfield */}
          <h2 style={H2}>Why do rooftop sites pay more than greenfield masts?</h2>
          <div style={{ display: "grid", gap: "1.5rem", marginBottom: "2rem" }} className="lg:grid-cols-2">
            <div style={{ ...CARD, marginBottom: 0 }}>
              <h3 style={{ ...H3, fontSize: "1.125rem" }}>🏗️ Standalone (greenfield) masts</h3>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                Free-standing masts on farmland, rural estates or open land. Under the no-network assumption the alternative use value of a greenfield site is its agricultural or storage value, which is inherently low. The Tribunal&rsquo;s standard rural figure has moved from £750 to £1,750 a year to reflect inflation and updated evidence.
              </p>
            </div>
            <div style={{ ...CARD, marginBottom: 0 }}>
              <h3 style={{ ...H3, fontSize: "1.125rem" }}>🏢 Rooftop installations</h3>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                Rooftop sites on residential or commercial buildings attract higher consideration. The alternative use value of roof space is assessed by reference to comparable lettings for storage, signage or other non-telecoms purposes, and urban rooftops, particularly in inner London and major cities, have been valued at higher levels than rural equivalents.
              </p>
            </div>
          </div>
          <p style={P}>
            The Tribunal has also addressed atypical structures such as water towers and church steeples, applying a hybrid of the structured approach with a sense-check against comparable decisions.
          </p>

          {/* Case law */}
          <h2 style={H2}>Which decisions set the phone mast rent benchmarks?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {[
              {
                citation: "EE Ltd & Hutchison 3G UK Ltd v London Borough of Islington [2019] UKUT 53 (LC)",
                summary: "The first ever determination of consideration under the new Code. The Tribunal applied the no-network assumption to an urban rooftop site in inner London and confirmed that pre-2017 comparable rents are irrelevant under the new framework. It also established that compensation for diminution in property value is not automatically recoverable.",
              },
              {
                citation: "On Tower UK Ltd v JH & FW Green Ltd (Dale Park) [2020] UKUT 0348 (LC)",
                summary: "The first contested rent determination for a lease renewal under Part 5 of the Code. The Tribunal endorsed the three-stage approach, set £1,200 a year for a rural site next to housing, and confirmed that the landlord is entitled to recover reasonable professional fees incurred in dealing with the operator.",
              },
              {
                citation: "EE Ltd & Hutchison 3G UK Ltd v Affinity Water Ltd (Upper Tribunal)",
                summary: "A water tower on greenfield land, assessed at £3,300 a year. The decision also published a table of figures by site type, including £3,850 a year for a city rooftop on a retail or office building and £5,000 a year on a residential building, which later decisions have used as a reference point.",
              },
              {
                citation: "EE Ltd & Hutchison 3G UK Ltd v AP Wireless II (UK) Ltd (Vache Farm) [2024] UKUT 216 (LC)",
                summary: "The current leading authority on rural greenfield mast rent. The Tribunal found that the earlier £750 benchmark was too low by 2024 and set £1,750 a year, signalling that consideration figures must keep pace with economic conditions. It also imposed a break clause allowing the landlord to terminate on notice where redevelopment is intended.",
              },
              {
                citation: "Cornerstone Telecommunications Infrastructure Ltd v Compton Beauchamp Estates Ltd [2022] UKSC 18",
                summary: "A landmark Supreme Court decision in which three conjoined appeals were heard together. The Court confirmed that operators with existing agreements protected under the Landlord and Tenant Act 1954 must renew under that Act and cannot use the Code to impose new agreements on different terms. The Phone Mast Advice Company instigated and advised on this case.",
              },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#f9f8f5", borderRadius: "0.75rem", padding: "1.5rem 1.75rem", borderLeft: "4px solid #a4ca62" }}>
                <p style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1B4F72", marginBottom: "0.625rem" }}>
                  <em>{item.citation}</em>
                </p>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>{item.summary}</p>
              </div>
            ))}
          </div>

          {/* Why reduced */}
          <h2 style={H2}>Why are phone mast rents being reduced?</h2>
          <p style={P}>
            The reduction in phone mast rents is a direct consequence of Government policy. The stated objective behind the Digital Economy Act 2017 reforms was to reduce the cost of deploying and maintaining telecommunications infrastructure across the United Kingdom, to encourage the rollout of 4G and 5G networks to underserved areas.
          </p>
          <p style={P}>
            Under the previous regime, landowners could negotiate rents that reflected the strategic value of their site to the operator. Under the new Code, the no-network assumption removes this premium entirely. Since December 2017 the number of disputes between operators and landowners has increased dramatically: over a thousand Tribunal cases have been filed under the new Code, compared with 33 in the 30 years under the previous legislation.
          </p>

          {/* 7 April 2026 */}
          <div style={{ backgroundColor: "#1B4F72", borderRadius: "1rem", padding: "2rem 2.25rem", marginBottom: "2rem", color: "#ffffff" }}>
            <h2 style={{ ...H2, color: "#ffffff", fontWeight: 800, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)" }}>What changed on 7 April 2026?</h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "1rem" }}>
              On <strong>7 April 2026</strong>, Sections 61 to 64 of the Product Security and Telecommunications Infrastructure Act 2022 came into force. They inserted a new <strong>Section 34A into the Landlord and Tenant Act 1954</strong>. For the first time, qualifying telecoms tenancies that renew under the 1954 Act are subject to the no-network assumption when rent is assessed.
            </p>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Until then, landowners with legacy mast leases protected under the 1954 Act benefited from open market rent valuations on renewal, often producing significantly higher rents than the Code valuation. The Supreme Court confirmed this protection in <em>Cornerstone v Compton Beauchamp</em> [2022] UKSC 18. Since 7 April 2026, that advantage has been removed.
            </p>
            <h3 style={{ ...H3, color: "#a4ca62", fontSize: "1.125rem" }}>What this means for landowners</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "If your mast lease pre-dates 28 December 2017 and is protected under the Landlord and Tenant Act 1954, your rent on renewal is now assessed using the no-network assumption",
                "Transitional provisions ensure that rents already received are not required to be repaid",
                "Interim rent is split: periods before 7 April 2026 are valued under the old rules, periods from 7 April onwards under the new framework",
                "Since 30 July 2026, new renewal proceedings for these leases are heard by the First-tier Tribunal and the Upper Tribunal instead of the courts",
              ].map((point, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, alignItems: "flex-start" }}>
                  <span style={{ color: "#a4ca62", flexShrink: 0, fontSize: "1.25rem", lineHeight: 1.3 }}>→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Extras */}
          <h2 id="extras" style={H2}>What can I charge in addition to rent?</h2>
          <p style={P}>While the no-network assumption limits the basic consideration payable, a number of additional items can legitimately be recovered:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
            {[
              { heading: "Compensation for loss or damage", detail: "Under Paragraph 25 of the Code, you are entitled to compensation for any loss or damage actually sustained as a result of the exercise of Code rights. This is separate from and additional to the annual consideration." },
              { heading: "Reasonable professional fees", detail: "Under Paragraph 84, compensation includes reasonable legal and valuation expenses incurred in connection with the grant or renewal of Code rights." },
              { heading: "Electricity costs", detail: "Where the operator uses your electricity supply, you can recover those costs in full." },
              { heading: "Access rights over retained land", detail: "Where the operator needs to cross your land to reach the mast site, this additional right has value and can be separately negotiated." },
              { heading: "Physical damage", detail: "Any damage to fences, gates, boundaries, land surface or other property caused by the operator or their contractors." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "#f9f8f5", borderRadius: "0.75rem", padding: "1.25rem 1.5rem" }}>
                <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.125rem" }}>✓</span>
                <div>
                  <strong style={{ fontSize: "1.0625rem", color: "#1a1a2e" }}>{item.heading}: </strong>
                  <span style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65 }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 style={H2}>What can I not charge for?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
            {[
              { heading: "The value of the telecoms network", detail: "The entire purpose of the no-network assumption is to exclude this. You cannot charge a premium because the operator needs your specific site for coverage." },
              { heading: "Speculative diminution in property value", detail: "Unless you can demonstrate actual measurable loss, the Tribunal will not award compensation for theoretical reductions in your property value." },
              { heading: "Pre-2017 rent levels as a benchmark", detail: "Rents agreed before the new Code came into force are not admissible as comparable evidence in Tribunal proceedings." },
              { heading: "Lost opportunity to use the site for telecoms yourself", detail: "Development potential attributable to telecoms use is excluded by the no-network assumption." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "#fff5f5", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", borderLeft: "3px solid #e53e3e" }}>
                <span style={{ flexShrink: 0, color: "#e53e3e", fontSize: "1.125rem", fontWeight: 700, lineHeight: 1.3, marginTop: "0.1rem" }}>✗</span>
                <div>
                  <strong style={{ fontSize: "1.0625rem", color: "#1a1a2e" }}>{item.heading}: </strong>
                  <span style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65 }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* What to do */}
          <h2 style={H2}>What should I do if the operator has offered a lower rent?</h2>
          <div style={CARD}>
            <ol style={{ paddingLeft: "1.25rem", margin: 0 }}>
              {[
                "Do not sign or agree the figure. A renewal letter or Heads of Terms is an opening position prepared by the operator's advisers.",
                "Acknowledge the letter in writing and say you are taking independent advice. That keeps the process on a negotiated footing and keeps the operator's fee undertaking alive.",
                "Identify which regime applies: a Code agreement, a 1954 Act lease renewing after 7 April 2026, or a renewal already under way under the old rules.",
                "Have the figure checked against the Tribunal benchmarks and agreed deals for your site type, and add the recoverable extras.",
                "Keep every notice and its date. Statutory deadlines under the Code and the 1954 Act are strict.",
              ].map((step, i) => (
                <li key={i} style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, marginBottom: "0.75rem" }}>{step}</li>
              ))}
            </ol>
          </div>
          <p style={P}>
            For the mechanics of a review, see our <a href="/phone-mast-services/rent-reviews/" style={LINK}>phone mast rent review service</a>; for renewals, our <a href="/phone-mast-services/lease-renewals/" style={LINK}>lease renewal service</a>; for the notice itself, the <a href="/section-26-notice/" style={LINK}>Section 26 notice guide</a>.
          </p>

          {/* How we help */}
          <h2 style={H2}>How we can help</h2>
          <p style={P}>
            The Phone Mast Advice Company Ltd acts exclusively for landowners and never for operators. With over 30 years advising on phone mast leases across the United Kingdom, we hold one of the most comprehensive records of comparable UK phone mast deals in the industry, and we instigated and advised on <em>Compton Beauchamp</em>, the Supreme Court case that protected legacy leases until the 2026 changes.
          </p>

          {/* FAQ */}
          <h2 style={H2}>Phone mast rent: frequently asked questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
            {rentFaqs.map((f, i) => (
              <div key={i} style={{ backgroundColor: "#f9f8f5", borderRadius: "0.75rem", padding: "1.5rem 1.75rem", border: "1px solid #e5e7eb" }}>
                <h3 style={{ ...H3, fontSize: "1.125rem", marginBottom: "0.625rem" }}>{f.q}</h3>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>

          {/* Author box */}
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", backgroundColor: "#f0f7ff", border: "1px solid #cfe3f5", borderRadius: "1rem", padding: "1.5rem 1.75rem", marginBottom: "2rem" }}>
            <div>
              <p style={{ fontSize: "0.95rem", color: "#1B4F72", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 0.5rem" }}>About the author</p>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
                <a href="/team/matt-restall/" style={LINK}>Matt Restall</a> founded The Phone Mast Advice Company and has advised UK landlords on phone mast rents, leases and renewals for over 30 years. He instigated and advised on <em>Compton Beauchamp Estates v CTIL</em> [2022] UKSC 18. This guide is kept to what the legislation, the Tribunal decisions and the firm&rsquo;s own deal evidence support. Last reviewed {REVIEWED}.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ ...CARD, padding: "2rem" }}>
            <h3 style={{ ...H3 }}>Find out what your site should be paying</h3>
            <p style={{ ...P, marginBottom: "1.5rem" }}>
              A free, no-obligation rent estimate from a specialist who acts only for landowners.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a href="/free-rent-estimate/" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "0.875rem 1.75rem" }}>Free Rent Estimate →</a>
              <a href="tel:01691791543" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", backgroundColor: "transparent", color: "#1B4F72", borderRadius: "10px", fontWeight: 600, fontSize: "1.0625rem", textDecoration: "none", border: "2px solid #1B4F72", minHeight: "44px" }}>📞 01691 791543</a>
            </div>
          </div>

          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem" }}>
            Last reviewed on {REVIEWED}. The figures above are published Tribunal determinations and are quoted for guidance only; they do not constitute legal or valuation advice for any particular site. For advice specific to your circumstances, please contact us directly.
          </p>
        </div>
      </section>

      <CTASection
        headline="Protect Your Phone Mast Rent Income in 2026"
        subheadline="The PSTI Act changes are in force: legacy 1954 Act leases renew on no-network valuations. Take specialist advice before your renewal. Free initial consultation."
        ctaText="Free Rent Estimate"
        ctaHref="/free-rent-estimate/"
      />
    </>
  );
}
