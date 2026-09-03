import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Phone Mast Electricity Costs Recovery",
  description:
    "Is a mobile operator using your electricity supply? Independent advice for UK landlords on recovering phone mast electricity costs, backdated charges, and fixing the arrangement for good.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-services/electricity-costs-recovery" },
  openGraph: {
    title: "Phone Mast Electricity Costs Recovery for UK Landlords",
    description:
      "How to recover the electricity a phone mast draws from your supply, including backdated costs, and how to put the operator on a proper footing going forward.",
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
    question: "Can I charge the mobile operator for the electricity a phone mast uses?",
    answer:
      "Yes. Where the operator draws power from your supply, the cost of that electricity is recoverable from the operator in full. It sits alongside the rent rather than within it, and most agreements either provide for a sub-meter or oblige the operator to reimburse a fair apportionment of your bills.",
  },
  {
    question: "How far back can I claim unpaid phone mast electricity costs?",
    answer:
      "It depends on the wording of your agreement, but claims for sums due under a contract can typically be pursued for up to six years. Many landlords discover that a mast has been running on their supply, unmetered and unpaid, for far longer than that, so the first step is to establish what the agreement says and what the meter records show.",
  },
  {
    question: "How is the operator's share of my electricity bill worked out?",
    answer:
      "Ideally from a dedicated sub-meter on the operator's equipment. Where there is no sub-meter, consumption is estimated from the rated load of the apparatus, the hours it runs, and your tariff, then apportioned against your actual bills. We prepare the calculation in a form the operator's agents accept.",
  },
  {
    question: "Should the operator have its own electricity supply?",
    answer:
      "For a permanent fix, yes. A separate metered supply in the operator's name removes the landlord from the arrangement entirely. Where that is impractical, a sub-meter with an agreed reconciliation each year, or a fixed index-linked charge, is the next best solution and can be built into a renewal or rent review.",
  },
  {
    question: "Does recovering electricity costs affect my rent?",
    answer:
      "No. Electricity is an additional recoverable cost under the Electronic Communications Code, separate from the consideration (rent) assessed under Paragraph 24. Operators sometimes try to bundle the two together at renewal; we keep them apart so the rent is not reduced to offset the power costs.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          type: "Service",
          name: "Phone Mast Electricity Costs Recovery",
          description:
            "Recovery of electricity costs from mobile operators whose phone mast equipment draws power from a landlord's supply, including backdated claims and putting a proper metering arrangement in place.",
          provider: "The Phone Mast Advice Company",
          url: "https://www.phonemastadvice.co.uk/phone-mast-services/electricity-costs-recovery",
          areaServed: "United Kingdom",
        }}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Electricity Costs Recovery" }]} />

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
            Phone Mast Electricity Costs Recovery for UK Landlords
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            A mast runs 24 hours a day, and if it runs on your supply you are paying for it. We establish what the operator owes, recover backdated costs where the agreement allows, and put the arrangement on a proper metered footing so it never happens again.
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
              This is our electricity costs recovery service page. Electricity is one of several sums you can recover on top of the rent; our{" "}
              <a href="/phone-mast-rent-2026" style={link}>phone mast rent</a> guide lists the others. Reviewed by the <a href="/team" style={link}>Phone Mast Advice team</a>.
            </p>
          </div>

          <h2 style={{ ...h2, marginTop: 0 }}>Why phone mast electricity costs are so often unpaid</h2>
          <p style={p}>
            When a mast was first installed, the simplest way to power it was often to connect to the building&rsquo;s or farm&rsquo;s existing supply, sometimes with a sub-meter and sometimes without one. Years later the equipment has been upgraded several times, consumption has risen with 4G and 5G, the original arrangement has been forgotten, and the landlord&rsquo;s bill quietly includes the cost of running a telecoms site. It is one of the most common and most overlooked losses we find when reviewing a lease.
          </p>

          <h2 style={h2}>What can I recover?</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
            {[
              "The operator's share of electricity consumed through your supply, in full",
              "Backdated costs for past consumption, subject to the terms of your agreement and the usual limitation period for contractual claims",
              "A proper mechanism going forward: a separate supply, a sub-meter with annual reconciliation, or a fixed index-linked charge",
              "Related costs where the agreement provides for them, such as standing charges apportioned to the operator's use",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.15rem" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={p}>
            Electricity is recoverable in addition to the consideration assessed under Paragraph 24 of the Electronic Communications Code. It is not part of the rent, and it should not be traded away against it at renewal.
          </p>

          <h2 style={h2}>How is the operator&rsquo;s share calculated?</h2>
          <p style={p}>
            Where a sub-meter exists, the readings settle the matter. Where it does not, we estimate consumption from the rated load of the cabinets and radio equipment, the hours of operation, and your tariff over the period, and apportion that against your actual bills. The calculation is presented in a form the operator&rsquo;s agents recognise, with the supporting evidence they will ask for.
          </p>

          <h2 style={h2}>How our electricity costs recovery service works</h2>
          <h3 style={h3}>1. Lease and supply review</h3>
          <p style={p}>We check what your agreement says about power, whether a sub-meter exists, and how the equipment is connected.</p>
          <h3 style={h3}>2. Quantifying the claim</h3>
          <p style={p}>We calculate the operator&rsquo;s consumption and cost for the recoverable period, using meter data where available and a defensible estimate where not.</p>
          <h3 style={h3}>3. Recovery from the operator</h3>
          <p style={p}>We submit the claim to the operator or its agents and negotiate payment of the backdated sum.</p>
          <h3 style={h3}>4. A permanent fix</h3>
          <p style={p}>We agree a separate supply, a sub-meter, or a fixed indexed charge so the cost is dealt with automatically in future, and we write it into the lease at the next renewal or rent review.</p>

          <h2 style={h2}>Our fees</h2>
          <p style={p}>
            The initial consultation and lease review are free and without obligation. Fees for recovery work are structured on an incentivised basis linked to the sums recovered, agreed with you in writing before we start. We act exclusively for landlords.
          </p>

          <h2 style={h2}>Electricity costs: frequently asked questions</h2>
          <FAQAccordion items={faqs} showJsonLd={true} />

          <h2 style={h2}>You may also need</h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", marginBottom: "1rem" }}>
            {[
              { label: "Free Lease Check", href: "/free-lease-check", desc: "We check what your agreement says about power" },
              { label: "Phone Mast Rent Guide", href: "/phone-mast-rent-2026", desc: "Everything recoverable on top of rent" },
              { label: "Rent Reviews", href: "/phone-mast-services/rent-reviews", desc: "Fix the rent at the same time" },
              { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals", desc: "Write the fix into the new lease" },
              { label: "Other Services", href: "/phone-mast-services/other-services", desc: "Wayleaves, breaches, site audits" },
              { label: "Contact Our Team", href: "/contact", desc: "Speak to a specialist today" },
            ].map((item) => (
              <a key={item.href} href={item.href} style={{ display: "block", backgroundColor: "#f9f8f5", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1rem 1.25rem", textDecoration: "none" }}>
                <p style={{ fontWeight: 700, color: "#1B4F72", margin: "0 0 0.25rem", fontSize: "1rem" }}>{item.label}</p>
                <p style={{ color: "#6b7280", margin: 0, fontSize: "0.875rem", lineHeight: 1.4 }}>{item.desc}</p>
              </a>
            ))}
          </div>

          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem", marginTop: "2rem" }}>
            This page was last updated on 3 September 2026. It is general guidance for landlords and does not constitute legal or tax advice. Please contact us for advice on your circumstances.
          </p>
        </div>
      </section>

      <CTASection
        headline="Is a Phone Mast Running on Your Electricity?"
        subheadline="Most landlords we review are owed money. Find out what your agreement says and what you can claim back. Free initial consultation."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check"
      />
    </>
  );
}
