import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Free Phone Mast Lease Check | Independent UK Specialists",
  description:
    "Get a free review of your phone mast lease from independent UK specialists. We check your terms, identify issues, and advise on your options — no obligation. Call 01691 791543.",
  alternates: { canonical: "https://phonemastadvice.co.uk/free-lease-check" },
  openGraph: {
    title: "Free Phone Mast Lease Check",
    description: "Independent phone mast lease review — completely free, no obligation.",
    url: "https://phonemastadvice.co.uk/free-lease-check",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Free Phone Mast Lease Check" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://phonemastadvice.co.uk" },
    { "@type": "ListItem", position: 2, name: "Free Lease Check", item: "https://phonemastadvice.co.uk/free-lease-check" },
  ],
};

export default function FreeLeaseCheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Free Lease Check" }]} />
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
                Free Phone Mast Lease Check
              </h1>
              <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
                Send us your lease details and our specialist surveyors will review your agreement, identify any issues, and advise you on your options — completely free of charge.
              </p>

              {[
                { icon: "🔍", text: "Full review of your current lease terms" },
                { icon: "⚖️", text: "Identify if your rent is below market rate" },
                { icon: "📋", text: "Spot any problematic clauses or obligations" },
                { icon: "💡", text: "Advise on your options going forward" },
                { icon: "🤝", text: "No obligation — we only act if you choose us" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ fontSize: "1.0625rem", color: "#374151", margin: 0, lineHeight: 1.55 }}>{item.text}</p>
                </div>
              ))}

              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  backgroundColor: "rgba(27,79,114,0.05)",
                  border: "1px solid rgba(27,79,114,0.15)",
                  borderRadius: "1rem",
                }}
              >
                <p style={{ fontWeight: 700, color: "#1B4F72", marginBottom: "0.375rem", fontSize: "1rem" }}>
                  📞 Prefer to speak to someone?
                </p>
                <p style={{ color: "#374151", fontSize: "1rem", margin: 0 }}>
                  Call{" "}
                  <a href="tel:01691791543" style={{ color: "#1B4F72", fontWeight: 600 }}>
                    01691 791543
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://wa.me/447843352654"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1B4F72", fontWeight: 600 }}
                  >
                    WhatsApp us
                  </a>
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
                  Request Your Free Lease Check
                </h2>
                <LeadForm formType="lease-check" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
