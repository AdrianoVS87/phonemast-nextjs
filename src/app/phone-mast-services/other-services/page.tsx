import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Wayleaves, Lift & Shift, Breaches & Site Audits",
  description:
    "Specialist phone mast services for UK landlords beyond renewals and rent reviews: wayleaves, lift and shift, site sharing and assignment, breaches, site audits, and Tribunal or ADR support.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-services/other-services" },
  openGraph: {
    title: "Other Phone Mast Services: Wayleaves, Lift & Shift, Breaches, Site Audits",
    description:
      "The specialist telecoms services landlords ask us for beyond the headline renewal and rent review work, explained one by one.",
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
const p: React.CSSProperties = { fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" };
const link: React.CSSProperties = { color: "#1B4F72", fontWeight: 700, textDecoration: "underline" };

const services = [
  {
    title: "Telecoms wayleaves",
    body:
      "A wayleave is the agreement that lets an operator run cables, ducts, or small equipment across your land to reach a mast or a neighbouring site. Wayleaves are often signed for a nominal sum decades ago and never revisited. We review what has actually been installed, whether the payment reflects the rights granted, and whether the wayleave should be renegotiated or brought into the main agreement at renewal.",
  },
  {
    title: "Lift and shift for rooftop sites",
    body:
      "Re-roofing, cladding, waterproofing, and Building Safety Act works all need the equipment moved. A lift and shift clause obliges the operator to relocate or remove apparatus temporarily, at its own cost and on reasonable notice. We negotiate the clause where it is missing, and manage the notice and programme where it exists so that building works are not held up by the mast.",
  },
  {
    title: "Site sharing and assignment reviews",
    body:
      "Under Paragraph 16 of the Electronic Communications Code, terms preventing assignment to another operator are void, and Paragraph 17 allows upgrading and sharing within limits without consent. That does not mean every change is lawful or unpaid. We check what has been added to your site, whether the conditions in the Code were met, and whether your agreement entitles you to a further payment or to notice of the change.",
  },
  {
    title: "Breaches and enforcement",
    body:
      "Late rent, unauthorised equipment, access outside the agreed hours, damage to fences and tracks, and failure to maintain the compound are all breaches we see regularly. Substantial breach and persistent late payment are also statutory grounds for terminating a Code agreement under Paragraph 31. We document the breach, put the operator on notice, and pursue the remedy that fits your objective.",
  },
  {
    title: "Site audits and portfolio reviews",
    body:
      "For estates, councils, housing associations, sports clubs, and churches with more than one site, we audit every agreement against current law: rent and review dates, electricity, sharing, expiry, and exposure to the 7 April 2026 changes. The result is a single schedule showing where money is being lost and which sites to act on first.",
  },
  {
    title: "Interim rent and holding over",
    body:
      "Where a lease has expired and the operator remains in occupation, the rent does not stop and neither do your rights. We advise on the rent payable during the holding-over period, including the split at 7 April 2026 between the old and new valuation rules for leases protected by the 1954 Act.",
  },
  {
    title: "Tribunal and ADR support",
    body:
      "Since 7 April 2026, Code disputes are heard by the First-tier Tribunal (Property Chamber), and parties must consider alternative dispute resolution first. We prepare the valuation evidence and support your solicitor through negotiation, ADR, and any Tribunal hearing.",
  },
];

const faqs = [
  {
    question: "What is a telecoms wayleave and should I be paid for it?",
    answer:
      "A wayleave grants an operator the right to run cables or place equipment across your land, usually to serve a mast on or near your property. It is a right of value in its own right. Many were granted for a token sum years ago; if the cables now serve upgraded or shared equipment, or cross land you intend to develop, the wayleave should be reviewed and, where appropriate, renegotiated.",
  },
  {
    question: "Can the operator add another network to my mast without paying me?",
    answer:
      "Often, yes. Paragraph 17 of the Code allows sharing and upgrading without consent where there is no more than a minimal adverse impact on appearance and no additional burden on you, and the PSTI Act extended similar rights to older agreements. Whether a further payment is due depends on your agreement and on whether those statutory conditions were actually met, which is what we check.",
  },
  {
    question: "The operator has broken the terms of my lease. What can I do?",
    answer:
      "Record the breach with dates and photographs, then serve written notice through your adviser. Depending on the breach, remedies range from payment of arrears and reinstatement of damage to termination under Paragraph 31 for substantial breach or persistent late payment. The right response depends on whether you want the mast to stay or go.",
  },
  {
    question: "What does a site audit involve?",
    answer:
      "We collect every agreement, deed of variation, wayleave, and rent record for each site, inspect the installed equipment against what the paperwork permits, and produce a schedule of rent, review dates, expiry dates, electricity arrangements, sharing, and legal status. It gives a portfolio owner a single view of where income is being lost and which sites need action first.",
  },
  {
    question: "Do you attend the Tribunal on my behalf?",
    answer:
      "We prepare the valuation and site evidence and work alongside your solicitor and counsel throughout negotiation, ADR, and any hearing before the First-tier Tribunal (Property Chamber). Most matters settle before a hearing once the evidence is properly assembled.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          type: "Service",
          name: "Specialist Phone Mast Services",
          description:
            "Telecoms wayleaves, lift and shift, site sharing and assignment reviews, breach enforcement, site audits, interim rent, and Tribunal or ADR support for UK landlords with phone mast agreements.",
          provider: "The Phone Mast Advice Company",
          url: "https://www.phonemastadvice.co.uk/phone-mast-services/other-services",
          areaServed: "United Kingdom",
        }}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Other Services" }]} />

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
            Other Phone Mast Services: Wayleaves, Lift &amp; Shift, Breaches, Site Audits
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            Renewals and rent reviews are the headline work, but a mast site raises a dozen other questions over its life. These are the specialist services landlords ask us for, and what each one involves.
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
              For the two core services, see <a href="/phone-mast-services/lease-renewals" style={link}>lease renewals</a> and{" "}
              <a href="/phone-mast-services/rent-reviews" style={link}>rent reviews</a>. For the legal background, read our{" "}
              <a href="/phone-mast-lease-2026" style={link}>phone mast lease</a> and <a href="/phone-mast-rent-2026" style={link}>phone mast rent</a> guides. Reviewed by the <a href="/team" style={link}>Phone Mast Advice team</a>.
            </p>
          </div>

          {services.map((s, i) => (
            <div key={i}>
              <h2 style={{ ...h2, marginTop: i === 0 ? 0 : "2.25rem" }}>{s.title}</h2>
              <p style={p}>{s.body}</p>
            </div>
          ))}

          <h2 style={h2}>How we work</h2>
          <p style={p}>
            Every matter starts with a free review of your agreement and a plain explanation of your position. Where the work is a discrete task, such as a wayleave review or a lift and shift notice, we agree a fixed fee in advance. Where it forms part of a renewal, rent review, or recovery, our fees are structured on an incentivised basis and explained in full before we start. We act exclusively for landlords and never for operators.
          </p>

          <h2 style={h2}>Frequently asked questions</h2>
          <FAQAccordion items={faqs} showJsonLd={true} />

          <h2 style={h2}>You may also need</h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", marginBottom: "1rem" }}>
            {[
              { label: "Free Lease Check", href: "/free-lease-check", desc: "We review your agreement for free" },
              { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals", desc: "Renewal advice under the Code" },
              { label: "Rent Reviews", href: "/phone-mast-services/rent-reviews", desc: "Is your rent right?" },
              { label: "Removal & Redevelopment", href: "/phone-mast-services/removal-and-redevelopment", desc: "Ending an agreement" },
              { label: "Electricity Costs Recovery", href: "/phone-mast-services/electricity-costs-recovery", desc: "Claim back power costs" },
              { label: "Contact Our Team", href: "/contact", desc: "Speak to a specialist today" },
            ].map((item) => (
              <a key={item.href} href={item.href} style={{ display: "block", backgroundColor: "#f9f8f5", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1rem 1.25rem", textDecoration: "none" }}>
                <p style={{ fontWeight: 700, color: "#1B4F72", margin: "0 0 0.25rem", fontSize: "1rem" }}>{item.label}</p>
                <p style={{ color: "#6b7280", margin: 0, fontSize: "0.875rem", lineHeight: 1.4 }}>{item.desc}</p>
              </a>
            ))}
          </div>

          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem", marginTop: "2rem" }}>
            This page was last updated on 3 September 2026. It is general guidance for landlords and does not constitute legal advice. Please contact us for advice on your circumstances.
          </p>
        </div>
      </section>

      <CTASection
        headline="A Phone Mast Question That Does Not Fit the Usual Boxes?"
        subheadline="Wayleaves, sharing, breaches, roof works, audits. If it involves an operator on your land, we deal with it. Free initial consultation."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check"
      />
    </>
  );
}
