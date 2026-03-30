import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries

export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  seoDescription,
  featuredImage,
  "category": category->{ name, slug }
}`;

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  body,
  publishedAt,
  seoTitle,
  seoDescription,
  featuredImage,
  "category": category->{ name, slug }
}`;

export const blogSlugsQuery = `*[_type == "post"] { "slug": slug.current }`;

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  featuredImage?: any;
  body?: unknown[];
  category?: { name: string; slug: { current: string } };
};
