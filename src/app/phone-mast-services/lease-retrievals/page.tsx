import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Lost Phone Mast Lease? Lease Retrievals",
  description:
    "Cannot find your phone mast lease? We locate and retrieve lost or missing telecoms agreements from the Land Registry, operators, and deeds, so you can renew, review, or sell with confidence.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-services/lease-retrievals" },
  openGraph: {
    title: "Lost or Missing Phone Mast Lease: Lease Retrieval Service",
    description:
      "How to find a missing phone mast lease, why the document matters before any renewal or sale, and how we retrieve it for landlords.",
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
    question: "I have lost my phone mast lease. Where can I get a copy?",
    answer:
      "Start with HM Land Registry: leases granted for more than seven years must be registered, and an official copy of a registered lease can be obtained for a small fee. Other sources are the operator or its managing agent, the solicitor who acted on the original grant or on your purchase of the land, your lender, and the previous owner's deeds pack. We check each in turn until the document is found.",
  },
  {
    question: "Why does it matter if I cannot find the lease?",
    answer:
      "Because the lease decides everything else: what rent you are owed, when it is reviewed, when the term ends, whether the agreement is protected by the Landlord and Tenant Act 1954 or sits under the Electronic Communications Code, and what rights the operator has over your land. Without it, you cannot safely negotiate a renewal, run a rent review, respond to an operator's notice, or sell.",
  },
  {
    question: "The operator says the lease has expired. Does that mean it no longer applies?",
    answer:
      "No. Under Paragraph 30 of the Electronic Communications Code a Code agreement continues after its contractual term until it is formally terminated, and leases protected by the 1954 Act continue on a similar basis. The expired document still governs the relationship, which is another reason to have a copy in hand.",
  },
  {
    question: "What if the lease was never registered or no copy exists anywhere?",
    answer:
      "It happens, particularly with older agreements of seven years or less. In that case we reconstruct the position from the evidence that does exist, such as rent payment history, correspondence, earlier heads of terms, and the operator's own records, and advise on how the statutory framework applies to the site in the absence of a document.",
  },
  {
    question: "How long does a lease retrieval take?",
    answer:
      "Land Registry copies are usually available within days. Retrieving documents from operators, agents, or solicitors' archives can take several weeks. We run the searches in parallel and keep you informed at each stage.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          type: "Service",
          name: "Phone Mast Lease Retrievals",
          description:
            "Locating and retrieving lost or missing phone mast leases and telecoms agreements for UK landlords from HM Land Registry, operators, agents, and solicitors' archives.",
          provider: "The Phone Mast Advice Company",
          url: "https://www.phonemastadvice.co.uk/phone-mast-services/lease-retrievals",
          areaServed: "United Kingdom",
        }}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Lease Retrievals" }]} />

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
            Lost or Missing Phone Mast Lease? Lease Retrieval Service
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            Many mast agreements were signed decades ago and the paperwork has moved with solicitors, lenders, and previous owners. We track the document down, confirm what it actually says, and tell you where you stand before you deal with the operator.
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
              This is our lease retrieval service page. Once the document is found, our{" "}
              <a href="/phone-mast-lease-2026" style={link}>phone mast lease</a> guide explains the clauses to look for. Reviewed by the <a href="/team" style={link}>Phone Mast Advice team</a>.
            </p>
          </div>

          <h2 style={{ ...h2, marginTop: 0 }}>Why the lease document matters</h2>
          <p style={p}>
            Every question a mast landlord asks comes back to the lease: how much rent is due and when it is reviewed, when the term ends, whether the agreement is protected by the Landlord and Tenant Act 1954 or governed by the Electronic Communications Code, what the operator may install, share, or upgrade, and who pays for electricity and access. An operator&rsquo;s agent will have a copy. If you do not, you are negotiating blind.
          </p>

          <h2 style={h2}>Where a missing phone mast lease can be found</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
            {[
              "HM Land Registry: leases granted for more than seven years must be registered, and official copies are available for a small fee",
              "The operator or its managing agent, who will hold a copy of any agreement they rely on",
              "The solicitor who acted on the original grant, or on your purchase of the land",
              "Your lender, who may hold the deeds, and the previous owner's conveyancing pack",
              "Your own records: rent demands, correspondence, and earlier heads of terms often reveal the key dates and parties",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.15rem" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 style={h2}>What we check once the lease is found</h2>
          <p style={p}>
            Retrieval is the first half of the job. We then read the document against current law and tell you, in plain terms: the rent and review pattern, the term and any breaks, whether the agreement has been assigned to a different operator, whether the rights have been extended by statute, and what the 7 April 2026 changes mean for your next renewal. Where the document cannot be found at all, we reconstruct the position from payment history, correspondence, and the operator&rsquo;s records.
          </p>

          <h2 style={h2}>How our lease retrieval service works</h2>
          <h3 style={h3}>1. Fact-find</h3>
          <p style={p}>We gather what you know: the operator, the site, when the mast arrived, who acted for you, and any paperwork or payments you can show us.</p>
          <h3 style={h3}>2. Parallel searches</h3>
          <p style={p}>We run Land Registry, operator, agent, and solicitor searches at the same time rather than one after another.</p>
          <h3 style={h3}>3. Document review</h3>
          <p style={p}>We confirm the document is the operative agreement, check for later deeds of variation or assignment, and summarise your position.</p>
          <h3 style={h3}>4. Next steps</h3>
          <p style={p}>With the lease in hand, we advise on the renewal, rent review, recovery, or sale that prompted the search in the first place.</p>

          <h2 style={h2}>Our fees</h2>
          <p style={p}>
            The initial consultation is free and without obligation. Lease retrieval is offered at a modest fixed fee, agreed in advance, and is often absorbed into the wider renewal or rent review work that follows. We act exclusively for landlords.
          </p>

          <h2 style={h2}>Lease retrievals: frequently asked questions</h2>
          <FAQAccordion items={faqs} showJsonLd={true} />

          <h2 style={h2}>You may also need</h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", marginBottom: "1rem" }}>
            {[
              { label: "Free Lease Check", href: "/free-lease-check", desc: "Send us what you have" },
              { label: "Phone Mast Lease Guide", href: "/phone-mast-lease-2026", desc: "What the clauses mean" },
              { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals", desc: "Usually the reason for the search" },
              { label: "Rent Reviews", href: "/phone-mast-services/rent-reviews", desc: "Check the rent is right" },
              { label: "Mast Sales", href: "/phone-mast-services/mast-sales", desc: "Buyers will need the document" },
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
        headline="Cannot Find Your Phone Mast Lease?"
        subheadline="Do not respond to an operator until you know what the agreement says. We will find it and explain it. Free initial consultation."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check"
      />
    </>
  );
}
