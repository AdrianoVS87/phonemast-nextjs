import type { Metadata } from "next";
import HandbookForm from "@/components/HandbookForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Free Phone Mast Handbook | Essential Guide for UK Landlords",
  description:
    "Download your free Phone Mast Handbook — the essential guide for UK landlords. Covers leases, rent reviews, the Electronic Communications Code, and your rights. Free PDF.",
  alternates: { canonical: "https://phonemastadvice.co.uk/handbook" },
  openGraph: {
    title: "Free Phone Mast Handbook for UK Landlords",
    description: "Download your free essential guide to phone mast leases, rent reviews, and landlord rights.",
    url: "https://phonemastadvice.co.uk/handbook",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Free Phone Mast Handbook" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://phonemastadvice.co.uk" },
    { "@type": "ListItem", position: 2, name: "Handbook", item: "https://phonemastadvice.co.uk/handbook" },
  ],
};

const handbookTopics = [
  {
    icon: "📋",
    title: "Understanding Your Lease",
    description: "What your phone mast lease means, common terms and clauses, and what to watch out for.",
  },
  {
    icon: "💰",
    title: "Phone Mast Rents Explained",
    description: "How rents are calculated, what market rate looks like, and how to find out if you're being underpaid.",
  },
  {
    icon: "⚖️",
    title: "The Electronic Communications Code",
    description: "What the 2017 Code means for landlords, how it changed things, and what protection you have.",
  },
  {
    icon: "🔄",
    title: "Rent Reviews & Renewals",
    description: "When and how operators can review rents, what 'no-network use' valuation means, and how to respond.",
  },
  {
    icon: "🚫",
    title: "Removal & Redevelopment",
    description: "Whether you can remove a mast, what rights operators have, and how to approach redevelopment.",
  },
  {
    icon: "🏆",
    title: "Case Studies & Examples",
    description: "Real examples of successful rent reviews and negotiations, including the landmark Vache Farm case.",
  },
];

export default function HandbookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Handbook" }]} />

      {/* Hero section */}
      <section
        style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}
      >
        <div className="container-max" style={{ maxWidth: "900px", textAlign: "center" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📖</div>
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Download Your Free Phone Mast Handbook
          </h1>
          <p
            style={{
              fontSize: "1.1875rem",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Everything UK landlords need to know about phone mast leases, rents, and their rights — written by our specialist surveying team with 30+ years of experience.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div style={{ display: "grid", gap: "4rem" }} className="lg:grid-cols-[1fr_420px]">
            {/* Left — what's inside */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#1a1a2e",
                  marginBottom: "0.75rem",
                }}
              >
                What&apos;s Inside the Handbook
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                Our free handbook covers everything you need to know as a UK phone mast landlord — from understanding your lease to knowing your rights under the Electronic Communications Code.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                  gap: "1.25rem",
                }}
              >
                {handbookTopics.map((topic) => (
                  <div
                    key={topic.title}
                    style={{
                      padding: "1.5rem",
                      backgroundColor: "#f9f8f5",
                      borderRadius: "0.875rem",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{topic.icon}</div>
                    <h3
                      style={{
                        fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        color: "#1a1a2e",
                        marginBottom: "0.5rem",
                        lineHeight: 1.35,
                      }}
                    >
                      {topic.title}
                    </h3>
                    <p style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.5rem",
                  backgroundColor: "rgba(164,202,98,0.1)",
                  border: "1px solid rgba(164,202,98,0.4)",
                  borderRadius: "1rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>⭐</span>
                <div>
                  <p style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: "0.375rem", fontSize: "1.0625rem" }}>
                    Written by specialist telecom surveyors
                  </p>
                  <p style={{ color: "#374151", fontSize: "1rem", margin: 0, lineHeight: 1.65 }}>
                    This handbook is based on over 30 years of experience and 10,000+ deals completed on behalf of UK landlords. It&apos;s the same knowledge we share with our paying clients — free, because we believe in informed landlords.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <div
                className="card"
                style={{
                  padding: "2rem",
                  position: "sticky",
                  top: "5rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    color: "#1a1a2e",
                    marginBottom: "0.5rem",
                  }}
                >
                  Get Your Free Copy
                </h2>
                <p style={{ color: "#6b7280", fontSize: "0.9375rem", marginBottom: "1.5rem", lineHeight: 1.55 }}>
                  Fill in your details and we&apos;ll send your handbook within one working day.
                </p>
                <HandbookForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
