import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Sell Your Phone Mast Lease | Mast Sales",
  description:
    "Thinking of selling your phone mast lease? Independent advice for UK landlords on what a mast lease sale is worth, how buyers value it, and how to sell safely.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-services/mast-sales" },
  openGraph: {
    title: "Sell Your Phone Mast Lease: Mast Sales Advice for UK Landlords",
    description:
      "What a phone mast lease sale is worth, who buys them, the risks in the paperwork, and how we get landowners the best price and terms.",
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
    question: "How much can I sell my phone mast lease for?",
    answer:
      "A mast lease sale is priced as a lump sum that reflects the rent a buyer expects to collect over the years ahead, so the figure is usually expressed as a multiple of the annual rent. The multiple depends on the rent level, how the rent is reviewed, the unexpired term, whether the agreement is protected by the Landlord and Tenant Act 1954 or the Electronic Communications Code, the operator and site type, and the risk that rent falls at the next renewal. An independent valuation tests the offer against realistic future income rather than historic rent.",
  },
  {
    question: "Who buys phone mast leases?",
    answer:
      "Mainly specialist infrastructure investors and funds that aggregate telecoms ground leases, and occasionally tower companies or operators themselves. Buyers typically take a long lease of the mast site, or an assignment of the right to receive the rent, in return for a one-off payment.",
  },
  {
    question: "Will selling my mast lease stop me redeveloping my land?",
    answer:
      "It can. Buyers usually want a long term, sometimes several decades, and may resist break rights. Before you sign, the agreement should protect any redevelopment plans with a clear break or relocation (lift and shift) provision and should not grant the buyer wider rights over your retained land than the operator already has.",
  },
  {
    question: "Do the April 2026 changes affect what my lease is worth?",
    answer:
      "Yes. Since 7 April 2026, qualifying telecoms leases that renew under the Landlord and Tenant Act 1954 are valued on the Code's no-network basis, so historic rent levels are no longer a safe guide to future income. Buyers price this in. That makes it more important, not less, to have the offer checked before you accept.",
  },
  {
    question: "I have received an unsolicited offer for my mast lease. Should I accept it?",
    answer:
      "Treat it as an opening position. Unsolicited offers are often genuine but rarely the best available price or terms. Independent advice and a competitive process between more than one buyer usually improve both.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          type: "Service",
          name: "Phone Mast Lease Sales Advice",
          description:
            "Independent advice for UK landowners selling a phone mast lease or the right to receive mast rent: valuation, marketing to specialist buyers, and negotiation of price and terms.",
          provider: "The Phone Mast Advice Company",
          url: "https://www.phonemastadvice.co.uk/phone-mast-services/mast-sales",
          areaServed: "United Kingdom",
        }}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Mast Sales" }]} />

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
            Sell Your Phone Mast Lease: Mast Sales Advice for UK Landlords
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            A phone mast lease sale turns years of future rent into a lump sum today. We act only for landowners, so our job is to find out what your lease is really worth, bring in competing buyers, and make sure the paperwork does not cost you your land.
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
              This is our mast sales service page. For the valuation background that drives every sale price, read our{" "}
              <a href="/phone-mast-rent-2026" style={link}>phone mast rent</a> guide; for the terms buyers will ask you to sign, see our{" "}
              <a href="/phone-mast-lease-2026" style={link}>phone mast lease</a> guide. Reviewed by the <a href="/team" style={link}>Phone Mast Advice team</a>.
            </p>
          </div>

          <h2 style={{ ...h2, marginTop: 0 }}>What is a phone mast lease sale?</h2>
          <p style={p}>
            A phone mast lease sale, sometimes called a mast sale or a telecoms lease buy-out, is where the landowner sells the right to receive the rent from a mast site in exchange for a one-off capital payment. The buyer is usually a specialist infrastructure investor or fund that owns hundreds of similar sites. In most deals the buyer takes a long lease of the mast site from you, or an assignment of the benefit of the existing agreement, and then collects the rent from the operator for the rest of the term.
          </p>
          <p style={p}>
            You keep the freehold of your land. What changes is who receives the mast income, for how long, and what rights the buyer holds over the site in the meantime. Those three points decide whether a sale is a good deal.
          </p>

          <h2 style={h2}>How much is a phone mast lease worth to sell?</h2>
          <p style={p}>
            A buyer is paying today for income it expects to collect over many years, so offers are normally expressed as a multiple of the current annual rent. The multiple moves with the factors below, which is why two sites paying the same rent can attract very different offers:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
            {[
              "The rent itself, and how it is reviewed: fixed, index-linked (RPI or CPI), or open market",
              "The unexpired term of the operator's agreement and the likelihood it is renewed",
              "Whether the agreement is protected by the Landlord and Tenant Act 1954 or sits under the Electronic Communications Code, and what that means for rent at the next renewal",
              "The operator, whether the site is shared by more than one network, and the type of site: rooftop, greenfield, or an unusual structure",
              "Any redevelopment potential in the land, which a buyer will want to restrict and you will want to protect",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.15rem" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={p}>
            Since 7 April 2026, leases that renew under the 1954 Act are valued on the Code&rsquo;s no-network basis, so the rent you receive today is not a reliable guide to the rent a buyer can expect after the next renewal. A proper valuation models the realistic future income under the current rules and then tests the offer against it.
          </p>

          <h2 style={h2}>Should I sell my phone mast lease or keep the rent?</h2>
          <p style={p}>There is no single right answer. Selling tends to make sense when:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem" }}>
            {[
              "You would rather have capital now than income over 10 to 20 years",
              "Your rent is exposed to a Code-based reduction at renewal and you want certainty",
              "The sale fits wider estate, succession, or tax planning (take tax advice on the capital versus income treatment)",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.15rem" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={p}>Keeping the rent tends to make sense when the income is secure and index-linked, when you may redevelop the land within the buyer&rsquo;s proposed term, or when the offer simply undervalues the site. We will tell you plainly which side of that line your site falls on.</p>

          <h2 style={h2}>Risks to watch in a mast sale agreement</h2>
          <p style={p}>The price is only half of the deal. The document a buyer sends is drafted in the buyer&rsquo;s favour, and these are the clauses that most often cost landowners money later:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
            {[
              "Term: buyers commonly seek a lease of several decades; the longer the term, the longer your land is tied up",
              "Redevelopment: without a break clause or a lift and shift right, a sale can block building plans for the life of the buyer's lease",
              "Extra rights: the buyer should not acquire wider access, sharing, or upgrade rights over your retained land than the operator already holds",
              "Renewal risk: be clear who carries the risk if the operator renews at a lower Code rent or leaves the site altogether",
              "Costs: check who pays legal fees, any VAT or stamp duty land tax position, and what happens if the deal does not complete",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, color: "#e53e3e", fontWeight: 700, marginTop: "0.05rem" }}>✗</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 style={h2}>How our mast sale service works</h2>
          <h3 style={h3}>1. Free valuation review</h3>
          <p style={p}>We review your agreement and any offer you have received, and give you a realistic view of what the lease is worth under the current rules before you commit to anything.</p>
          <h3 style={h3}>2. Competitive marketing</h3>
          <p style={p}>One offer is a starting point, not a market. We approach the specialist buyers active in the UK so that your site is priced by competition rather than by whoever wrote to you first.</p>
          <h3 style={h3}>3. Negotiating price and terms together</h3>
          <p style={p}>We negotiate the lump sum and, just as importantly, the term, break rights, redevelopment protection, and the limits on what the buyer can do with the site.</p>
          <h3 style={h3}>4. Completion with your solicitor</h3>
          <p style={p}>We work alongside your solicitor through to exchange and completion so that the commercial deal we agreed is the deal that appears in the final document.</p>

          <h2 style={h2}>Our fees</h2>
          <p style={p}>
            The initial consultation and valuation review are free and without obligation. Our fees for a sale are structured on an incentivised basis, which we explain in full once we have reviewed your site and the offers available. We act exclusively for landowners and never for operators or buyers.
          </p>

          <h2 style={h2}>Mast sales: frequently asked questions</h2>
          <FAQAccordion items={faqs} showJsonLd={true} />

          <h2 style={h2}>You may also need</h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", marginBottom: "1rem" }}>
            {[
              { label: "Free Lease Check", href: "/free-lease-check", desc: "We review your agreement for free" },
              { label: "Phone Mast Rent Guide", href: "/phone-mast-rent-2026", desc: "How mast rent is valued in 2026" },
              { label: "Phone Mast Lease Guide", href: "/phone-mast-lease-2026", desc: "Key clauses and operator rights" },
              { label: "Rent Reviews", href: "/phone-mast-services/rent-reviews", desc: "Increase the income before you sell" },
              { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals", desc: "Renewal advice under the Code" },
              { label: "Contact Our Team", href: "/contact", desc: "Speak to a specialist today" },
            ].map((item) => (
              <a key={item.href} href={item.href} style={{ display: "block", backgroundColor: "#f9f8f5", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1rem 1.25rem", textDecoration: "none" }}>
                <p style={{ fontWeight: 700, color: "#1B4F72", margin: "0 0 0.25rem", fontSize: "1rem" }}>{item.label}</p>
                <p style={{ color: "#6b7280", margin: 0, fontSize: "0.875rem", lineHeight: 1.4 }}>{item.desc}</p>
              </a>
            ))}
          </div>

          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem", marginTop: "2rem" }}>
            This page was last updated on 3 September 2026. It is general guidance for landowners and does not constitute legal, tax, or valuation advice for a specific site. Please contact us for advice on your circumstances.
          </p>
        </div>
      </section>

      <CTASection
        headline="Thinking of Selling Your Phone Mast Lease?"
        subheadline="Get an independent view of what it is really worth before you accept an offer. Free initial consultation, landowners only."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check"
      />
    </>
  );
}
