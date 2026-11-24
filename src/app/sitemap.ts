import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { ALL_ROUTES } from "@/seo/routes";
import { absoluteUrl } from "@/seo/site";

/**
 * Only canonical, indexable pages. `lastmod` is the date a person last changed the page's substance
 * (`lastReviewed` in src/seo/routes.ts, `updated`/`date` on posts); pages without one omit it rather
 * than claim a date that is not true. Nothing here is set at build time.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = ALL_ROUTES.filter((r) => !r.noIndex).map((r) => ({
    url: absoluteUrl(r.path),
    ...(r.lastReviewed ? { lastModified: new Date(`${r.lastReviewed}T12:00:00Z`) } : {}),
  }));

  const posts: MetadataRoute.Sitemap = (await getAllPosts()).map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}/`),
    lastModified: new Date(post.updated ?? post.date),
  }));

  return [...pages, ...posts];
}
