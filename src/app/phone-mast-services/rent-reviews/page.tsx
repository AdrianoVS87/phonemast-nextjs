import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

const rentReviewFaqs = [
  {
    question: "How often is phone mast rent reviewed?",
    answer:
      "It depends on your lease, but most agreements review the rent every three to five years, and the Upper Tribunal now treats a five-yearly review linked to RPI or CPI as the standard for new Code agreements. If your lease contains a review clause that has never been operated, the review may still be capable of being triggered.",
  },
  {
    question: "Can the operator reduce my phone mast rent at a rent review?",
    answer:
      "Under an index-linked clause, no: the review is arithmetic and follows the index. Under an open market clause the answer depends on the agreement. A Code agreement is valued on the no-network assumption, which is usually lower than legacy rents, whereas a lease protected by the Landlord and Tenant Act 1954 keeps its contractual review basis until renewal. Since 7 April 2026 those 1954 Act leases are valued on the no-network basis when they renew, so the renewal, rather than the review, is where the reduction usually bites.",
  },
  {
    question: "What is the benchmark phone mast rent in 2026?",
    answer:
      "For a standard rural greenfield mast under the Code, the Upper Tribunal's 2024 Vache Farm decision set consideration at £1,750 per annum, with rooftop and urban sites generally assessed at higher levels. Legacy leases still on their original review basis can be considerably higher, which is why the wording of your review clause matters so much.",
  },
  {
    question: "My rent has not been reviewed for years. Can I claim backdated rent?",
    answer:
      "Often, yes. Whether a missed review can be operated late, and whether the uplift is backdated, depends on the wording of the clause, in particular whether time is stated to be of the essence. We read the clause, calculate what should have been paid, and pursue the arrears where the agreement supports it.",
  },
  {
    question: "Do I need a surveyor for a phone mast rent review?",
    answer:
      "For an index-linked review the arithmetic is simple, but operators and their agents frequently miscalculate, delay, or dispute the figure. For an open market review you need valuation evidence the operator cannot dismiss. In both cases independent, landlord-side advice usually pays for itself, and our initial review is free.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Phone Mast Rent Review Advice | Phone Mast Advice" },
  description: "Phone mast rent review advice for UK landlords: how rent is assessed, whether it can go down, missed and backdated reviews, the 2026 benchmarks, and how we negotiate with operators.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-services/rent-reviews" },
};

const operators = [
  { name: "Vodafone", href: "/vodafone-phone-mast-lease" },
  { name: "O2 (Telefónica UK)", href: "/o2-phone-mast-lease" },
  { name: "EE (BT Group)", href: "/ee-phone-mast-lease" },
  { name: "Three (Hutchison 3G)", href: "/three-phone-mast-lease" },
  { name: "CTIL / Cornerstone", href: "/ctil-cornerstone-phone-mast-lease" },
  { name: "Cellnex", href: "/cellnex-phone-mast-lease" },
  { name: "On Tower (formerly Arqiva)", href: "/on-tower-arqiva-phone-mast-lease" },
  { name: "Airwave Solutions", href: "/airwave-phone-mast-lease" },
  { name: "Wireless Infrastructure Group (WIG)", href: "/wireless-infrastructure-group-phone-mast-lease" },
];

const relatedPosts = [
  { title: "Why Phone Mast Rents Are Being Reduced & What It Means for Landlords", href: "/blog/reduce-phone-mast-rents" },
  { title: "What Is a Phone Mast Lease? A Landlord's Guide", href: "/blog/what-is-a-phone-mast-lease" },
  { title: "5 Key Things to Know Before Leasing Land for a Phone Mast", href: "/blog/five-things-you-should-know-about-leasing-your-land-to-a-mobile-phone-mast-operator" },
  { title: "Mistakes to Avoid as a Phone Mast Landlord", href: "/blog/mistakes-to-avoid-as-a-phone-mast-landlord" },
  { title: "Changes to the Electronic Communications Code 2022", href: "/blog/communications-code-2022" },
  { title: "How the 5G Rollout Will Impact Existing Phone Mast Leases", href: "/blog/how-the-5g-rollout-will-impact-existing-phone-mast-leases-what-landlords-should-prepare-for" },
];

export default function RentReviewsPage() {
  return (
    <>
      <JsonLd data={{ type: "Service", name: "Phone Mast Rent Reviews", description: "Independent valuation and negotiation of phone mast site rental income for UK landlords.", provider: "The Phone Mast Advice Company", url: "https://www.phonemastadvice.co.uk/phone-mast-services/rent-reviews", areaServed: "United Kingdom" }} />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Rent Reviews" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#ffffff", marginBottom: "1rem", lineHeight: 1.2 }}>
            Phone Mast Rent Reviews
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            Independent rent review specialists acting exclusively for UK landlords. This page is about our rent review service; for the main background guide, see our <a href="/phone-mast-rent-2026" style={{ color: "#ffffff", textDecoration: "underline", fontWeight: 700 }}>phone mast rent advice page</a>.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/free-rent-estimate" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
              Free Rent Estimate
            </Link>
            <a href="tel:01691791543" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2rem", color: "#ffffff", border: "2px solid rgba(255,255,255,0.6)", borderRadius: "10px", fontWeight: 600, fontSize: "1.0625rem", textDecoration: "none", minHeight: "44px" }}>
              📞 01691 791543
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Ensure your Phone Mast rent reflects the current market and the value of your land. If your telecom lease includes a rent review clause, you could be entitled to significantly more rent, sometimes including backdated payments. We help UK landowners secure fair rent, enforce missed reviews, and protect your rights under the Electronic Communications Code (ECC).
          </p>

          <div style={{ backgroundColor: "#f9f8f5", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.95rem", color: "#1B4F72", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 0.5rem" }}>
              Service page, backed by the main valuation guide
            </p>
            <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              This page is for landlords who want practical negotiation support now. For the broader valuation and legal background, use our <a href="/phone-mast-rent-2026" style={{ color: "#1B4F72", fontWeight: 700, textDecoration: "underline" }}>main phone mast rent advice guide</a>. Reviewed by the <a href="/team" style={{ color: "#1B4F72", fontWeight: 700, textDecoration: "underline" }}>Phone Mast Advice team</a>.
            </p>
          </div>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            What Is a Phone Mast Rent Review?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            A Phone Mast rent review is a formal reassessment of the rent you receive under your telecom lease. Typically triggered every 3–5 years (or as specified in your lease), the review ensures your rent reflects current market rates, accounts for technological or operator changes, and maximises income for the duration of the lease. Operators sometimes propose reduced rents or try to avoid paying increases — expert advice ensures your rent reflects your land&apos;s true value. If you first need the broader legal and valuation background, read our <a href="/phone-mast-rent-2026" style={{ color: "#1B4F72", fontWeight: 700, textDecoration: "underline" }}>phone mast rent advice guide</a>.
          </p>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            How Is Phone Mast Rent Assessed at a Rent Review?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The answer is in the wording of your review clause. An index-linked review (RPI or CPI) is arithmetic and should be applied without argument. An open market review depends on which regime governs the agreement: a Code agreement is valued on the no-network assumption in Paragraph 24, where the Upper Tribunal&rsquo;s 2024 <em>Vache Farm</em> decision set the benchmark for a standard rural greenfield mast at £1,750 per annum, with rooftop and urban sites assessed at higher levels. A lease still protected by the Landlord and Tenant Act 1954 keeps its contractual review basis until it renews.
          </p>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            Can My Phone Mast Rent Go Down at a Review?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Not under an index-linked clause, and not under most legacy open market clauses while the lease runs. The reduction operators talk about usually arrives at <em>renewal</em>, not at review: since 7 April 2026, qualifying 1954 Act leases are valued on the no-network basis when they renew, and Code agreements have been valued that way since December 2017. Knowing which event you are facing, a review or a renewal, changes the advice completely. See our <a href="/phone-mast-services/lease-renewals" style={{ color: "#1B4F72", fontWeight: 700, textDecoration: "underline" }}>lease renewal service</a> for the renewal side.
          </p>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            Missed and Backdated Rent Reviews
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            A surprising number of mast leases contain review clauses that have never been operated, sometimes for a decade or more. Whether the review can still be triggered, and whether the uplift is backdated, turns on the wording of the clause, in particular whether time is of the essence. We read the clause, calculate what should have been paid, and pursue the arrears where the agreement supports it.
          </p>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            Why You Need Expert Rent Review Advice
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Without specialist support, landlords risk accepting below-market rent offers, losing out on backdated increases, missing opportunities under the Electronic Communications Code, and accepting unfavourable lease adjustments. We guide you to enforce fair rent increases, avoid legal pitfalls, and protect long-term revenue from your telecom lease.
          </p>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            How Our Rent Review Service Works
          </h2>

          <h3 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1B4F72", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
            1. Lease Assessment
          </h3>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            We review your current lease to determine rent review clauses, expired or upcoming review dates, and opportunities for backdated rent increases.
          </p>

          <h3 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1B4F72", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
            2. Market Benchmarking
          </h3>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            We compare your site with similar telecom agreements across the UK to establish fair market rent. This ensures you get accurate, defensible rent proposals.
          </p>

          <h3 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1B4F72", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
            3. Negotiation with Operators
          </h3>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            We handle communication and negotiation with the operator, including rent proposals, rent review disputes, and formal valuation processes.
          </p>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            Why Choose The Phone Mast Advice Company Ltd?
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
            {[
              "Specialists in UK landlord representation",
              "Proven experience with major telecom operators",
              "Fair, transparent fees and expert guidance",
              "Support for single sites and large portfolios",
              "Maximises income while protecting your rights and property value",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.15rem" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            Phone Mast Rent Reviews: Frequently Asked Questions
          </h2>
          <FAQAccordion items={rentReviewFaqs} showJsonLd={true} />
        </div>
      </section>

      {/* Operator pages */}
      <section style={{ backgroundColor: "#f9f8f5", padding: "3rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "0.75rem" }}>
            Operator-Specific Rent Review Advice
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Each operator uses different valuation approaches and agents. Select your operator for tailored rent review advice:
          </p>
          <div style={{ display: "grid", gap: "0.875rem", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
            {operators.map((op) => (
              <Link
                key={op.href}
                href={op.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  padding: "0.875rem 1.125rem",
                  textDecoration: "none",
                  fontWeight: 600,
                  color: "#1B4F72",
                  fontSize: "1rem",
                  minHeight: "44px",
                }}
              >
                <span aria-hidden="true" style={{ color: "#a4ca62", fontSize: "1.125rem" }}>→</span>
                {op.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* You May Also Need */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1.25rem" }}>
            You May Also Need
          </h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", marginBottom: "2.5rem" }}>
            {[
              { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals", desc: "Navigate ECC lease renewals confidently" },
              { label: "Free Rent Estimate", href: "/free-rent-estimate", desc: "Find out your true market rent" },
              { label: "Free Lease Check", href: "/free-lease-check", desc: "Review your lease for free" },
              { label: "Mast Sales", href: "/phone-mast-services/mast-sales", desc: "Capitalise on your lease income" },
              { label: "Contact Our Team", href: "/contact", desc: "Speak to a specialist today" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  backgroundColor: "#f9f8f5",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                }}
              >
                <p style={{ fontWeight: 700, color: "#1B4F72", margin: "0 0 0.25rem", fontSize: "1rem" }}>{item.label}</p>
                <p style={{ color: "#6b7280", margin: 0, fontSize: "0.875rem", lineHeight: 1.4 }}>{item.desc}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1.25rem" }}>
            Related Articles
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#1B4F72", fontWeight: 600, fontSize: "1rem", textDecoration: "none", lineHeight: 1.5 }}
              >
                <span aria-hidden="true" style={{ color: "#a4ca62", fontWeight: 700, flexShrink: 0, marginTop: "0.125rem" }}>→</span>
                {post.title}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/blog" style={{ color: "#1B4F72", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
