import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { getAllPostSlugs, getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { remark } from "remark";
import remarkHtml from "remark-html";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt.slice(0, 158),
    alternates: { canonical: `https://phonemastadvice.co.uk/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt.slice(0, 158),
      url: `https://phonemastadvice.co.uk/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: post.title }],
    },
  };
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml, { sanitize: false }).process(markdown);
  return result.toString();
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Get related posts (same category, excluding current)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const contentHtml = await markdownToHtml(post.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Specialist Telecom Surveyor",
      url: "https://phonemastadvice.co.uk/team",
    },
    publisher: {
      "@type": "Organization",
      name: "The Phone Mast Advice Company Ltd",
      url: "https://phonemastadvice.co.uk",
    },
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://phonemastadvice.co.uk/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://phonemastadvice.co.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://phonemastadvice.co.uk/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://phonemastadvice.co.uk/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article style={{ padding: "4rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* Category */}
          <div style={{ marginBottom: "1.25rem" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-block",
                backgroundColor: "#eff6ff",
                color: "#1d4ed8",
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "0.25rem 0.75rem",
                borderRadius: "50px",
                textDecoration: "none",
              }}
            >
              {post.category}
            </Link>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#1a1a2e",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "center",
              paddingBottom: "2rem",
              borderBottom: "1px solid #e5e7eb",
              marginBottom: "2.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#1B4F72",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                M
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#1a1a2e", margin: 0 }}>
                  {post.author}
                </p>
                <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: 0 }}>
                  Specialist Telecom Surveyor
                </p>
              </div>
            </div>
            <time
              dateTime={post.date}
              style={{ color: "#6b7280", fontSize: "0.9375rem" }}
            >
              {formatDate(post.date)}
            </time>
          </div>

          {/* Content */}
          <div
            className="blog-content"
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#374151",
            }}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Author Bio */}
          <div
            style={{
              marginTop: "4rem",
              padding: "2rem",
              backgroundColor: "#f9f8f5",
              borderRadius: "1rem",
              border: "1px solid #e5e7eb",
              display: "flex",
              gap: "1.5rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                backgroundColor: "#1B4F72",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "1.375rem",
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              MR
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#1a1a2e",
                  margin: "0 0 0.375rem",
                }}
              >
                Matt Restall
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6b7280", margin: "0 0 0.75rem" }}>
                Founder &amp; Specialist Telecom Surveyor, The Phone Mast Advice Company Ltd
              </p>
              <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                Matt Restall has over 25 years&apos; experience advising UK landlords on phone mast leases and rent reviews. He instigated and advised on the landmark{" "}
                <em>Compton Beauchamp Estates v CTIL</em> case and has completed over 1,000 deals on behalf of landowners across England and Wales. Matt represents landlords — never operators.
              </p>
            </div>
          </div>

          {/* Back to blog */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e5e7eb" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#1B4F72",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              <span aria-hidden="true">←</span> Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Services */}
      <section style={{ backgroundColor: "#f9f8f5", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            You May Also Need
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            }}
          >
            {[
              { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals", desc: "Expert lease renewal negotiation" },
              { label: "Rent Reviews", href: "/phone-mast-services/rent-reviews", desc: "Are you being underpaid?" },
              { label: "Free Lease Check", href: "/free-lease-check", desc: "Check your lease for free" },
              { label: "Free Rent Estimate", href: "/free-rent-estimate", desc: "Find out your true market rent" },
              { label: "New Lettings", href: "/phone-mast-services/new-lettings", desc: "Start on the right terms" },
              { label: "Mast Sales", href: "/phone-mast-services/mast-sales", desc: "Capitalise on your lease income" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <p style={{ fontWeight: 700, color: "#1B4F72", margin: "0 0 0.25rem", fontSize: "1rem" }}>
                  {item.label}
                </p>
                <p style={{ color: "#6b7280", margin: 0, fontSize: "0.9rem", lineHeight: 1.4 }}>
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section style={{ padding: "3rem 1.5rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                color: "#1a1a2e",
                marginBottom: "1.25rem",
              }}
            >
              Related Articles
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                    backgroundColor: "#f9f8f5",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    padding: "1rem 1.25rem",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#1B4F72", fontSize: "1.0625rem" }}>
                    {rp.title}
                  </span>
                  <span style={{ color: "#6b7280", fontSize: "0.9375rem" }}>
                    {rp.excerpt.slice(0, 120)}...
                  </span>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <Link
                href="/blog"
                style={{ color: "#1B4F72", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}
              >
                View all articles →
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
