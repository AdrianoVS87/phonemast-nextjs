import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Phone Mast Rent Reviews | Expert UK Surveyors | Phone Mast Advice",
  description: "Independent phone mast rent review specialists. We benchmark your rent against comparable UK deals and negotiate improved terms. Call 01691 791543.",
  alternates: { canonical: "https://phonemastadvice.co.uk/phone-mast-services/rent-reviews" },
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
      <JsonLd data={{ type: "Service", name: "Phone Mast Rent Reviews", description: "Independent valuation and negotiation of phone mast site rental income for UK landlords.", provider: "The Phone Mast Advice Company", url: "https://phonemastadvice.co.uk/phone-mast-services/rent-reviews", areaServed: "United Kingdom" }} />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Rent Reviews" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#ffffff", marginBottom: "1rem", lineHeight: 1.2 }}>
            Phone Mast Rent Reviews
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            Independent rent review specialists acting exclusively for UK landlords. We benchmark your rent and negotiate improved terms across all major operators.
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

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            What Is a Phone Mast Rent Review?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            A Phone Mast rent review is a formal reassessment of the rent you receive under your telecom lease. Typically triggered every 3–5 years (or as specified in your lease), the review ensures your rent reflects current market rates, accounts for technological or operator changes, and maximises income for the duration of the lease. Operators sometimes propose reduced rents or try to avoid paying increases — expert advice ensures your rent reflects your land&apos;s true value.
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
