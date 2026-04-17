import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Phone Mast Lease Renewals & Code Lease Renewal",
  description: "Expert phone mast lease renewal and Code lease renewal advice for UK landlords. Independent specialists acting only for landowners. Free consultation.",
  alternates: { canonical: "https://phonemastadvice.co.uk/phone-mast-services/lease-renewals" },
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
  { title: "Forced Phone Mast Lease Renewals: What Landlords Must Know", href: "/blog/forced-lease-renewals" },
  { title: "Why Phone Mast Rents Are Being Reduced & What It Means for Landlords", href: "/blog/reduce-phone-mast-rents" },
  { title: "Changes to the Electronic Communications Code 2022", href: "/blog/communications-code-2022" },
  { title: "What to Do When an Operator Serves a Section 26 Notice", href: "/blog/section-26-notices" },
  { title: "Telecom Code Rights vs Property Rights", href: "/blog/telecom-code-rights-vs-property-rights-what-every-phone-mast-landlord-should-know" },
  { title: "Legal Safeguards for Phone Mast Landlords", href: "/blog/legal-safeguards" },
];

export default function Page() {
  return (
    <>
      <JsonLd data={{ type: "Service", name: "Phone Mast Lease Renewals", description: "Expert negotiation of phone mast lease renewals under the Electronic Communications Code.", provider: "The Phone Mast Advice Company", url: "https://phonemastadvice.co.uk/phone-mast-services/lease-renewals", areaServed: "United Kingdom" }} />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Lease Renewals" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#ffffff", marginBottom: "1rem", lineHeight: 1.2 }}>
            Phone Mast Lease Renewals
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            Independent specialists helping UK landlords navigate lease renewals with every major mobile phone operator. We act only for landowners — never for operators.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/free-lease-check" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
              Free Lease Check
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
            Maximise the Value of Your Phone Mast Lease. Have your Phone Mast lease renewed for the best possible terms.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            If your current lease has expired or your operator has approached you with Heads of Terms, we can help you negotiate rent, protect your rights, and secure fair lease terms – even under the Electronic Communications Code.
          </p>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            What Is a Phone Mast Lease Renewal?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            A lease renewal happens when your existing Phone Mast agreement comes to an end and the telecom operator wants to put a new lease in place. Under the UK&apos;s Electronic Communications Code (ECC), operators can serve Heads of Terms for a new agreement, but these terms often offer lower rent than market value, use operator-friendly clauses, and reduce landlord protections. Professional advice ensures you don&apos;t accept terms that leave money or rights on the table.
          </p>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            How Our Lease Renewal Service Works
          </h2>

          <h3 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1B4F72", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
            1. Initial Lease Review
          </h3>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            We assess your current contract, any Heads of Terms offered, and key rights and obligations. This ensures we start negotiations from a strong, informed position.
          </p>

          <h3 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1B4F72", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
            2. Market &amp; Legal Advice
          </h3>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            You receive clear guidance on rent benchmarks, explanation of legal frameworks like the ECC, and strategy on what terms to accept, challenge, or change.
          </p>

          <h3 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1B4F72", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
            3. Negotiation with the Operator
          </h3>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            We handle all communications with operator agents, rent proposals, and clause revisions. Our goal: terms that protect your interests, not just conclude a deal.
          </p>

          <h3 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1B4F72", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
            4. Completion with Your Solicitor
          </h3>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            We work alongside your solicitor to finalise the lease, from drafting to signature, making sure your interests are protected through to the end.
          </p>

          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2rem" }}>
            Why Renew a Lease with Expert Support?
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
            {[
              "Continued rental income",
              "Protection of land value",
              "Structured terms that reflect modern telecom use",
              "Greater control over access and maintenance",
              "Improved legal clarity around operator rights and responsibilities",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.15rem" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Operator-specific pages */}
      <section style={{ backgroundColor: "#f9f8f5", padding: "3rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", color: "#1a1a2e", marginBottom: "0.75rem" }}>
            Operator-Specific Lease Renewal Advice
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Each mobile phone operator uses different agents, tactics, and lease structures. Select your operator for tailored advice:
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

      {/* Related Articles */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
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
