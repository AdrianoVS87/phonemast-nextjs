import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Phone Mast Advice Blog | News & Expert Guidance for UK Landlords",
  description:
    "Expert articles on phone mast leases, rent reviews, the Electronic Communications Code, and landlord rights. Updated regularly by specialist UK telecom surveyors.",
  alternates: { canonical: "https://phonemastadvice.co.uk/blog" },
};

export default async function BlogIndexPage() {
  // Future: fetch from Sanity. Currently showing static placeholder.
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="section-padding">
        <div className="container-max">
          <div style={{ maxWidth: "720px", marginBottom: "3rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1a1a2e",
                marginBottom: "1rem",
              }}
            >
              Phone Mast Advice Blog
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7 }}>
              Expert guidance on phone mast leases, the Electronic Communications
              Code, rent reviews, and landlord rights — written by our specialist
              UK telecom surveying team.
            </p>
          </div>

          {/* Placeholder for Sanity posts */}
          <div
            style={{
              backgroundColor: "#f9f8f5",
              border: "1px solid #e5e7eb",
              borderRadius: "1rem",
              padding: "3rem",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "1.125rem", color: "#6b7280", marginBottom: "1.5rem" }}>
              Blog posts are being migrated to our new platform. Please check back soon, or{" "}
              <Link href="/contact" style={{ color: "#1B4F72", fontWeight: 600 }}>
                contact us
              </Link>{" "}
              with any questions.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
