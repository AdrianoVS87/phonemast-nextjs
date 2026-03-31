import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Phone Mast Advice Blog | Expert Guidance for UK Landlords",
  description:
    "Expert articles on phone mast leases, rent reviews, the Electronic Communications Code, and landlord rights. Written by specialist UK telecom surveyors.",
  alternates: { canonical: "https://phonemastadvice.co.uk/blog" },
  openGraph: {
    title: "Phone Mast Advice Blog",
    description: "Expert guidance on phone mast leases and landlord rights from UK specialists.",
    url: "https://phonemastadvice.co.uk/blog",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Phone Mast Advice Blog" }],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://phonemastadvice.co.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://phonemastadvice.co.uk/blog" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
              Expert guidance on phone mast leases, the Electronic Communications Code, rent reviews, and landlord rights — written by our specialist UK telecom surveying team.
            </p>
          </div>

          {posts.length === 0 ? (
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
                Blog posts are being migrated. Please{" "}
                <Link href="/contact" style={{ color: "#1B4F72", fontWeight: 600 }}>
                  contact us
                </Link>{" "}
                with any questions.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Expert Advice
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
                gap: "2rem",
              }}
            >
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}
