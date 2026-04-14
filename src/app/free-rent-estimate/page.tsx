import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Free Phone Mast Rent Estimate | Independent UK Specialists",
  description:
    "Get a free estimate of your phone mast rental value from independent UK specialists. We use our database of comparable UK deals. No obligation. Call 01691 791543.",
  alternates: { canonical: "https://phonemastadvice.co.uk/free-rent-estimate" },
  openGraph: {
    title: "Free Phone Mast Rent Estimate",
    description: "Find out what your phone mast should really be paying — free estimate from UK specialists.",
    url: "https://phonemastadvice.co.uk/free-rent-estimate",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Free Phone Mast Rent Estimate" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://phonemastadvice.co.uk" },
    { "@type": "ListItem", position: 2, name: "Free Rent Estimate", item: "https://phonemastadvice.co.uk/free-rent-estimate" },
  ],
};

export default function FreeRentEstimatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Free Rent Estimate" }]} />
      <section className="section-padding">
        <div className="container-max">
          <div style={{ display: "grid", gap: "3rem" }} className="lg:grid-cols-[1fr_1.5fr]">
            {/* Left column — info */}
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#1a1a2e",
                  marginBottom: "1.25rem",
                }}
              >
                Free Phone Mast Rent Estimate
              </h1>
              <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
                Tell us about your phone mast site and we&apos;ll provide a free, no-obligation estimate of the current market rental value. We use our extensive database of comparable UK deals to give you a realistic picture of what you should be receiving.
              </p>

              {[
                { icon: "📊", text: "Based on comparable deals across the UK" },
                { icon: "🎯", text: "Accurate estimates from 30+ years of data" },
                { icon: "💰", text: "Find out if you&apos;re being underpaid" },
                { icon: "🔒", text: "100% independent — we never act for operators" },
                { icon: "⚡", text: "Response within one working day" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                  <p
                    style={{ fontSize: "1.0625rem", color: "#374151", margin: 0, lineHeight: 1.55 }}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}

              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  backgroundColor: "rgba(164,202,98,0.1)",
                  border: "1px solid rgba(164,202,98,0.4)",
                  borderRadius: "1rem",
                }}
              >
                <p style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: "0.5rem", fontSize: "1.0625rem" }}>
                  Most landlords we contact are being underpaid.
                </p>
                <p style={{ color: "#374151", fontSize: "1rem", margin: 0, lineHeight: 1.65 }}>
                  Operators routinely offer below-market rents. Our clients typically see increases of 30–200% after a successful rent review.
                </p>
              </div>
            </div>

            {/* Right column — form */}
            <div>
              <div className="card" style={{ padding: "2rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    color: "#1a1a2e",
                    marginBottom: "1.5rem",
                  }}
                >
                  Request Your Free Rent Estimate
                </h2>
                <LeadForm formType="rent-estimate" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
