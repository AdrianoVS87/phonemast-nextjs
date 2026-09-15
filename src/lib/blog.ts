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
import { LOCAL_POSTS } from "./local-posts";

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
  return Array.from(new Set([...slugs, ...LOCAL_POSTS.map((p) => p.slug)]));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch<BlogPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(date desc) {${POST_FIELDS}}`,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } },
  );
  const sanitySlugs = new Set(posts.map((p) => p.slug));
  const local = LOCAL_POSTS.filter((p) => !sanitySlugs.has(p.slug));
  return [...posts, ...local].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await client.fetch<BlogPost | null>(
    `*[_type == "post" && slug.current == $slug][0]{${POST_FIELDS}}`,
    { slug },
    { next: { revalidate: REVALIDATE_SECONDS } },
  );
  return post ?? LOCAL_POSTS.find((p) => p.slug === slug) ?? null;
}
