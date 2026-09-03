import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Phone Mast Removal for Redevelopment",
  description:
    "Need a phone mast removed so you can redevelop? Independent advice for UK landowners on Paragraph 31 notices, the redevelopment ground, timescales, and getting the operator off your land.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-services/removal-and-redevelopment" },
  openGraph: {
    title: "Phone Mast Removal & Redevelopment: Getting an Operator Off Your Land",
    description:
      "How to end a phone mast agreement for redevelopment under the Electronic Communications Code, what notices are required, how long it takes, and how we manage it.",
    type: "website",
  },
};

const h2: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
  color: "#1a1a2e",
  marginBottom: "1rem",
  marginTop: "2.25rem",
};
const h3: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "1.25rem",
  color: "#1B4F72",
  marginBottom: "0.75rem",
  marginTop: "1.5rem",
};
const p: React.CSSProperties = { fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" };
const link: React.CSSProperties = { color: "#1B4F72", fontWeight: 700, textDecoration: "underline" };

const faqs = [
  {
    question: "Can I make a mobile operator remove a phone mast from my land?",
    answer:
      "Yes, but only through the statutory process. A Code agreement does not end when its term expires; under Paragraph 30 it continues until it is terminated. To end it you must serve a Paragraph 31 notice giving at least 18 months' notice on one of four grounds, the most common being a genuine intention to redevelop. If the operator serves a counter-notice, the matter is decided by the Tribunal.",
  },
  {
    question: "How long does it take to get a phone mast removed for redevelopment?",
    answer:
      "Plan for two years or more. The Paragraph 31 notice period is a minimum of 18 months; if the operator serves a counter-notice within three months, the agreement continues until the Tribunal determines the case, and time is then needed for the physical removal and reinstatement of the site. Starting early is the single most effective way to protect a development timetable.",
  },
  {
    question: "What counts as redevelopment for a phone mast termination?",
    answer:
      "The landowner must show a firm, settled, and unconditional intention to redevelop all or part of the land, or neighbouring land, and that the redevelopment could not reasonably be carried out unless the Code agreement ends. Planning permission, funding, and a realistic programme all strengthen the case. The test was confirmed in EE Ltd v Sir James Chichester [2019] UKUT 164 (LC) and applied again in CTIL v Firoka (Kings Cross) in 2025, where a hotel owner defeated a rooftop application on genuine redevelopment grounds.",
  },
  {
    question: "Who pays to remove the mast and restore my land?",
    answer:
      "The operator. Under Paragraph 40 of the Code the site provider can require removal of the apparatus and restoration of the land once the agreement has ended, and the reinstatement clause in a well-drafted lease should cover foundations, cabinets, fencing, access tracks, and equipment installed by any sharing operator.",
  },
  {
    question: "My mast is on a rooftop and I need to do roof works. Do I have to terminate the lease?",
    answer:
      "Usually not. Temporary works are normally handled by a lift and shift clause, which requires the operator to relocate or remove its equipment for the duration of the works at its own cost. If your lease has no such clause, we can negotiate one or, where the works amount to redevelopment, advise on the Paragraph 31 route.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          type: "Service",
          name: "Phone Mast Removal and Redevelopment Advice",
          description:
            "Independent advice for UK landowners who need a phone mast removed for redevelopment: Paragraph 31 notices, the redevelopment ground, lift and shift, reinstatement, and Tribunal proceedings under the Electronic Communications Code.",
          provider: "The Phone Mast Advice Company",
          url: "https://www.phonemastadvice.co.uk/phone-mast-services/removal-and-redevelopment",
          areaServed: "United Kingdom",
        }}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Removal & Redevelopment" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Phone Mast Removal &amp; Redevelopment: Getting an Operator Off Your Land
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            A phone mast does not leave when the lease runs out. Ending a Code agreement for redevelopment means serving the right notice, on the right ground, with enough time built in. We manage the whole process for landowners, from notice to reinstatement.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="/free-lease-check" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
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
          <div style={{ backgroundColor: "#f9f8f5", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              This is our removal and redevelopment service page. For the legal framework behind every clause and notice mentioned here, read our{" "}
              <a href="/phone-mast-lease-2026" style={link}>phone mast lease</a> guide. Reviewed by the <a href="/team" style={link}>Phone Mast Advice team</a>.
            </p>
          </div>

          <h2 style={{ ...h2, marginTop: 0 }}>Why a phone mast lease does not simply end</h2>
          <p style={p}>
            Under Paragraph 30 of the Electronic Communications Code, a Code agreement continues in force after its contractual term expires until it is brought to an end using the statutory procedure. Waiting for the lease to run out therefore achieves nothing. The operator stays, the rent continues at the old level, and your redevelopment timetable slips.
          </p>

          <h2 style={h2}>How do I end a phone mast agreement for redevelopment?</h2>
          <p style={p}>
            The site provider serves a notice under Paragraph 31 giving at least 18 months&rsquo; notice and specifying one of four statutory grounds:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem" }}>
            {[
              "Substantial breach of the agreement by the operator",
              "Persistent delays in paying the consideration",
              "An intention to redevelop all or part of the land, or neighbouring land, which cannot reasonably be carried out unless the agreement ends",
              "The public benefit test in Paragraph 21 is no longer met",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#1B4F72", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.15rem" }}>{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={p}>
            If the operator serves a counter-notice within three months, the agreement continues until the Tribunal determines the matter. Since 7 April 2026, Code disputes are heard by the First-tier Tribunal (Property Chamber), and since November 2023 both parties are required to consider alternative dispute resolution before applying. A defective notice, or the wrong ground, can void the whole process, as the Court of Appeal made clear in <em>On Tower UK Ltd v BT plc</em> [2025] EWCA Civ 844.
          </p>
          <p style={p}>
            Where the agreement is still protected by the Landlord and Tenant Act 1954 rather than the Code, the equivalent route is to oppose renewal on the redevelopment ground in section 30(1)(f), which has its own notice rules and may carry statutory compensation. We identify which regime applies before any notice is served.
          </p>

          <h2 style={h2}>What do I need to prove for the redevelopment ground?</h2>
          <p style={p}>
            The Tribunal looks for a firm, settled, and unconditional intention to redevelop, and a reasonable prospect of carrying it out. Evidence that carries weight includes planning permission or a credible application, funding, professional appointments, board or trustee resolutions, and a programme showing why the mast must go. The test was confirmed in <em>EE Ltd v Sir James Chichester</em> [2019] UKUT 164 (LC) and applied in <em>CTIL v Firoka (Kings Cross) Ltd</em> (2025), where a hotel owner succeeded against a rooftop application on genuine redevelopment grounds.
          </p>
          <p style={p}>
            The same ground appears in Paragraph 21(5) as a defence when an operator applies for a new agreement, so landowners with building plans should raise it at the earliest opportunity.
          </p>

          <h2 style={h2}>Removal and reinstatement: who pays?</h2>
          <p style={p}>
            The operator. Under Paragraph 40, once the agreement has ended the site provider can require removal of the apparatus and restoration of the land. A well-drafted lease spells out what that means: foundations, cabinets, fencing, cables, access tracks, and any equipment installed by a sharing operator. We check your reinstatement clause early, because a weak one can leave you with the bill.
          </p>

          <h2 style={h2}>Rooftop works: lift and shift instead of termination</h2>
          <p style={p}>
            Re-roofing, cladding replacement, and Building Safety Act works rarely require the mast to go permanently. A lift and shift clause obliges the operator to relocate or remove its equipment for the duration of the works, at its own cost and on reasonable notice. If your lease has no such clause, we negotiate one as part of a renewal or rent review, or advise on the Paragraph 31 route where the works genuinely amount to redevelopment.
          </p>

          <h2 style={h2}>How our removal and redevelopment service works</h2>
          <h3 style={h3}>1. Regime and timetable</h3>
          <p style={p}>We establish whether your agreement sits under the Code or the 1954 Act, what notice periods apply, and how they fit your development programme.</p>
          <h3 style={h3}>2. Building the case</h3>
          <p style={p}>We assemble the redevelopment evidence and draft the notice so that every statutory requirement is met the first time.</p>
          <h3 style={h3}>3. Negotiation and ADR</h3>
          <p style={p}>Most matters settle. We negotiate a consensual exit or relocation with the operator, using ADR where it shortens the timetable.</p>
          <h3 style={h3}>4. Tribunal and reinstatement</h3>
          <p style={p}>Where the operator resists, we support your legal team through the Tribunal and then manage removal and reinstatement of the site.</p>

          <h2 style={h2}>Our fees</h2>
          <p style={p}>
            The initial consultation is free and without obligation. Fees for removal and redevelopment work depend on the route required and are agreed with you in writing before we start. We act exclusively for landowners.
          </p>

          <h2 style={h2}>Removal and redevelopment: frequently asked questions</h2>
          <FAQAccordion items={faqs} showJsonLd={true} />

          <h2 style={h2}>You may also need</h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", marginBottom: "1rem" }}>
            {[
              { label: "Free Lease Check", href: "/free-lease-check", desc: "Find out which regime applies" },
              { label: "Phone Mast Lease Guide", href: "/phone-mast-lease-2026", desc: "Paragraphs 21, 30, 31, and 40 explained" },
              { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals", desc: "If you decide to keep the mast" },
              { label: "New Lettings", href: "/phone-mast-services/new-lettings", desc: "Protecting plans from day one" },
              { label: "Mast Sales", href: "/phone-mast-services/mast-sales", desc: "Selling the income instead" },
              { label: "Contact Our Team", href: "/contact", desc: "Speak to a specialist today" },
            ].map((item) => (
              <a key={item.href} href={item.href} style={{ display: "block", backgroundColor: "#f9f8f5", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1rem 1.25rem", textDecoration: "none" }}>
                <p style={{ fontWeight: 700, color: "#1B4F72", margin: "0 0 0.25rem", fontSize: "1rem" }}>{item.label}</p>
                <p style={{ color: "#6b7280", margin: 0, fontSize: "0.875rem", lineHeight: 1.4 }}>{item.desc}</p>
              </a>
            ))}
          </div>

          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem", marginTop: "2rem" }}>
            This page was last updated on 3 September 2026. It is general guidance for landowners and does not constitute legal advice. Notices under the Code carry strict requirements; please contact us before serving one.
          </p>
        </div>
      </section>

      <CTASection
        headline="Planning to Redevelop a Site With a Phone Mast?"
        subheadline="The notice period alone is 18 months. The earlier we start, the more control you keep over your timetable. Free initial consultation."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check"
      />
    </>
  );
}
