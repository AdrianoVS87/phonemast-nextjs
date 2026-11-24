import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkHtml from "remark-html";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/seo/StructuredData";
import { COMPANY, STATEMENTS } from "@/content/company";
import { getAllPostSlugs, getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { blogDescription, blogTitleTag } from "@/seo/blog-seo";
import { buildMetadata } from "@/seo/metadata";
import { FOUNDER_ID, article } from "@/seo/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: blogTitleTag(post.slug, post.title),
    description: blogDescription(post.slug, post.excerpt),
    path: `/blog/${post.slug}/`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    image: post.featuredImage ? { url: post.featuredImage, width: 1200, height: 630, alt: post.featuredImageAlt || post.title } : undefined,
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** First mention of each topic links to its page, so the guides and services gain varied, descriptive anchors. */
const TOPIC_LINKS: readonly [RegExp, string][] = [
  [/\bphone mast rents?\b/i, "/phone-mast-rent/"],
  [/\bphone mast leases?\b/i, "/phone-mast-lease/"],
  [/\brent reviews?\b/i, "/phone-mast-services/rent-reviews/"],
  [/\blease renewals?\b/i, "/phone-mast-services/lease-renewals/"],
  [/\bnew lettings?\b/i, "/phone-mast-services/new-lettings/"],
  [/\bmast sales?\b/i, "/phone-mast-services/mast-sales/"],
  [/\bremoval and redevelopment\b/i, "/phone-mast-services/removal-and-redevelopment/"],
  [/\belectricity costs? recovery\b/i, "/phone-mast-services/electricity-costs-recovery/"],
  [/\blease retrievals?\b/i, "/phone-mast-services/lease-retrievals/"],
  [/\bupgrade requests?\b/i, "/phone-mast-services/other-services/"],
];

/** Link the first occurrence of `pattern` that sits in plain text, outside headings and existing links. */
function linkFirst(html: string, pattern: RegExp, href: string): string {
  if (html.includes(`href="${href}"`)) return html;
  const parts = html.split(/(<a\b[^>]*>[\s\S]*?<\/a>|<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>|<[^>]+>)/);
  let done = false;
  return parts
    .map((part) => {
      if (done || part.startsWith("<")) return part;
      return part.replace(pattern, (match) => {
        done = true;
        return `<a href="${href}">${match}</a>`;
      });
    })
    .join("");
}

async function renderContent(markdown: string): Promise<string> {
  let html = (await remark().use(remarkHtml, { sanitize: false }).process(markdown)).toString();
  // IDs on headings for in-page links
  html = html.replace(/<(h[2-4])>(.*?)<\/\1>/gi, (_m, tag: string, content: string) => `<${tag} id="${slugify(content)}">${content}</${tag}>`);
  // A list item that names a heading becomes a link to it (tables of contents)
  html = html.replace(/<li>([^<]+)<\/li>/g, (match, text: string) => {
    const id = slugify(text.trim().replace(/:$/, ""));
    return html.includes(`id="${id}"`) ? `<li><a href="#${id}">${text}</a></li>` : match;
  });
  // Internal links written without a trailing slash would cost a redirect
  html = html.replace(/href="(\/[a-z0-9\-/]*[a-z0-9-])"/g, 'href="$1/"');
  for (const [pattern, href] of TOPIC_LINKS) html = linkFirst(html, pattern, href);
  return html;
}

const RELATED_LINKS = [
  { label: "Phone mast leases explained", href: "/phone-mast-lease/", desc: "What the lease gives the operator and what you control" },
  { label: "Phone mast rent", href: "/phone-mast-rent/", desc: "Tribunal figures and what you can claim" },
  { label: "Lease renewals", href: "/phone-mast-services/lease-renewals/", desc: "When the operator wants new terms" },
  { label: "Rent reviews", href: "/phone-mast-services/rent-reviews/", desc: "Checking and negotiating your review" },
  { label: "Phone mast operators", href: "/phone-mast-operators/", desc: "Which company holds your lease" },
  { label: "Mast sales", href: "/phone-mast-services/mast-sales/", desc: "Selling the income from a site" },
];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = (await getAllPosts()).filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const contentHtml = await renderContent(post.content);
  const byFounder = post.author === COMPANY.founder.name;
  const path = `/blog/${post.slug}/`;

  return (
    <>
      <StructuredData
        nodes={[
          article({
            path,
            headline: post.title,
            description: blogDescription(post.slug, post.excerpt),
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            authorId: byFounder ? FOUNDER_ID : undefined,
            authorName: byFounder ? undefined : post.author,
            image: post.featuredImage,
          }),
        ]}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog/" }, { label: post.title }]} />

      <article className="post">
        <header className="post-header">
          <Link href="/blog/" className="post-category">
            {post.category}
          </Link>
          <h1>{post.title}</h1>
          <p className="post-meta">
            By{" "}
            {byFounder ? <Link href={COMPANY.founder.profilePath}>{post.author}</Link> : post.author}
            {" · "}
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.updated ? (
              <>
                {" · Updated "}
                <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            ) : null}
          </p>
        </header>

        {slug === "1954-act" ? (
          <aside className="post-aside" aria-label="Guide to Section 26 notices">
            <p className="post-aside-title">Received a Section 26 notice for a phone mast?</p>
            <p>
              Our <Link href="/section-26-notice/">Section 26 notice guide</Link> explains the deadlines, your options and what changed for
              telecoms leases in 2026, step by step.
            </p>
          </aside>
        ) : null}
        {slug === "how-to-find-the-closest-phone-mast-to-you" ? (
          <aside className="post-aside" aria-label="Advice for landowners with a phone mast">
            <p className="post-aside-title">Is the mast on your land or building?</p>
            <p>
              If an operator pays you rent for a phone mast, the terms of that agreement matter far more than its coverage. Since 7 April
              2026, many older agreements renew on lower Code valuations. See <Link href="/phone-mast-rent/">how mast rent is worked out</Link>.
            </p>
          </aside>
        ) : null}

        <div className="blog-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <aside className="author-box" aria-label="About the author">
          {byFounder ? (
            <>
              <p className="author-name">
                <Link href={COMPANY.founder.profilePath}>{COMPANY.founder.name}</Link>
              </p>
              <p className="author-role">
                {COMPANY.founder.jobTitle}, {COMPANY.legalName}
              </p>
              <p>
                {STATEMENTS.comptonBeauchamp} {STATEMENTS.independence}
              </p>
            </>
          ) : (
            <p className="author-name">{post.author}</p>
          )}
        </aside>
      </article>

      <section className="post-related" aria-labelledby="related-heading">
        <div className="post-related-inner">
          <h2 id="related-heading">Related guides and services</h2>
          <ul className="related-links">
            {RELATED_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <strong>{item.label}</strong>
                  <span>{item.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
          {relatedPosts.length > 0 ? (
            <>
              <h2>More on this topic</h2>
              <ul className="related-links related-posts">
                {relatedPosts.map((rp) => (
                  <li key={rp.slug}>
                    <Link href={`/blog/${rp.slug}/`}>
                      <strong>{rp.title}</strong>
                      <span>
                        {COMPANY.founder.name === rp.author ? `${rp.author} · ` : ""}
                        {formatDate(rp.date)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <p>
            <Link href="/blog/">All articles</Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
