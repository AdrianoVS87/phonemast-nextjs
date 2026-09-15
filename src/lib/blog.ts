/**
 * Blog API — backed by Sanity dataset "production" (project fn50r1sg).
 *
 * Public interface is unchanged from the previous MDX-filesystem impl:
 * getAllPostSlugs, getAllPosts, getPostBySlug, BlogPost, formatDate.
 * Routes/components consuming these helpers do not need changes.
 *
 * Caching: Next.js `fetch` revalidate keeps build/render fast. ISR ensures
 * Studio edits surface within `REVALIDATE_SECONDS`.
 */
import { createClient } from "@sanity/client";
import type { BlogPost } from "./blog-types";
import { LOCAL_POSTS, LOCAL_POST_OVERRIDES, LOCAL_POSTS_REMOVED } from "./local-posts";

const REMOVED = new Set(LOCAL_POSTS_REMOVED);

export type { BlogPost };
export { formatDate } from "./blog-types";

const REVALIDATE_SECONDS = 60;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fn50r1sg",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  // Read-only — no token needed for public dataset.
  useCdn: true,
  perspective: "published",
});

const POST_FIELDS = `
  "slug": slug.current,
  title,
  date,
  category,
  excerpt,
  author,
  "content": content,
  featuredImage,
  featuredImageAlt,
  featuredImageCredit
`;

export async function getAllPostSlugs(): Promise<string[]> {
  const slugs = await client.fetch<string[]>(
    `*[_type == "post" && defined(slug.current)].slug.current`,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } },
  );
  return Array.from(new Set([...slugs, ...LOCAL_POSTS.map((p) => p.slug)])).filter((s) => !REMOVED.has(s));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch<BlogPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(date desc) {${POST_FIELDS}}`,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } },
  );
  const overrides = new Map(LOCAL_POST_OVERRIDES.map((p) => [p.slug, p]));
  const merged = posts.filter((p) => !REMOVED.has(p.slug)).map((p) => overrides.get(p.slug) ?? p);
  const sanitySlugs = new Set(posts.map((p) => p.slug));
  const local = [...LOCAL_POSTS, ...LOCAL_POST_OVERRIDES].filter((p) => !sanitySlugs.has(p.slug));
  return [...merged, ...local].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await client.fetch<BlogPost | null>(
    `*[_type == "post" && slug.current == $slug][0]{${POST_FIELDS}}`,
    { slug },
    { next: { revalidate: REVALIDATE_SECONDS } },
  );
  if (REMOVED.has(slug)) return null;
  const override = LOCAL_POST_OVERRIDES.find((p) => p.slug === slug);
  if (override) return override;
  return post ?? LOCAL_POSTS.find((p) => p.slug === slug) ?? null;
}
