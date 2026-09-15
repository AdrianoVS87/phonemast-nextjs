import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { PAGE_DATES } from "@/lib/page-dates";

const BASE_URL = "https://www.phonemastadvice.co.uk";

const operatorSlugs = [
  "vodafone-phone-mast-lease",
  "o2-phone-mast-lease",
  "ee-phone-mast-lease",
  "three-phone-mast-lease",
  "ctil-cornerstone-phone-mast-lease",
  "on-tower-arqiva-phone-mast-lease",
  "cellnex-phone-mast-lease",
  "airwave-phone-mast-lease",
  "wireless-infrastructure-group-phone-mast-lease",
];

const locationSlugs = [
  "london",
  "bristol",
  "oswestry",
];

const servicePages = [
  "/phone-mast-services",
  "/phone-mast-services/rent-reviews",
  "/phone-mast-services/lease-renewals",
  "/phone-mast-services/new-lettings",
  "/phone-mast-services/mast-sales",
  "/phone-mast-services/removal-and-redevelopment",
  "/phone-mast-services/electricity-costs-recovery",
  "/phone-mast-services/other-services",
  "/phone-mast-services/lease-retrievals",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  // Helper to add trailing slash (matching trailingSlash: true in next.config)
  const withSlash = (url: string) => url.endsWith("/") ? url : `${url}/`;
  // Real last-change dates (see scripts/generate-page-dates.mjs); Google ignores lastmod that is always "now".
  const dated = (key: string) => new Date(PAGE_DATES[key] ?? PAGE_DATES["/"]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: withSlash(BASE_URL), lastModified: dated("/"), changeFrequency: "weekly", priority: 1.0 },
    { url: withSlash(`${BASE_URL}/about-us`), lastModified: dated("/about-us"), changeFrequency: "monthly", priority: 0.8 },
    { url: withSlash(`${BASE_URL}/team`), lastModified: dated("/team"), changeFrequency: "monthly", priority: 0.7 },
    { url: withSlash(`${BASE_URL}/contact`), lastModified: dated("/contact"), changeFrequency: "monthly", priority: 0.9 },
    { url: withSlash(`${BASE_URL}/faq`), lastModified: dated("/faq"), changeFrequency: "monthly", priority: 0.8 },
    { url: withSlash(`${BASE_URL}/handbook`), lastModified: dated("/handbook"), changeFrequency: "monthly", priority: 0.8 },
    { url: withSlash(`${BASE_URL}/blog`), lastModified: dated("/blog"), changeFrequency: "weekly", priority: 0.8 },
    { url: withSlash(`${BASE_URL}/phone-mast-rent-2026`), lastModified: dated("/phone-mast-rent-2026"), changeFrequency: "weekly", priority: 0.95 },
    { url: withSlash(`${BASE_URL}/phone-mast-lease-2026`), lastModified: dated("/phone-mast-lease-2026"), changeFrequency: "weekly", priority: 0.95 },
    { url: withSlash(`${BASE_URL}/phone-mast-solicitors`), lastModified: dated("/phone-mast-solicitors"), changeFrequency: "monthly", priority: 0.85 },
    { url: withSlash(`${BASE_URL}/electronic-communications-code`), lastModified: dated("/electronic-communications-code"), changeFrequency: "monthly", priority: 0.9 },
    { url: withSlash(`${BASE_URL}/section-26-notice`), lastModified: dated("/section-26-notice"), changeFrequency: "monthly", priority: 0.9 },
    // /free-lease-check and /free-rent-estimate are intentionally noindex (form pages), so they stay out of the sitemap.
  ];

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((path) => ({
    url: withSlash(`${BASE_URL}${path}`),
    lastModified: dated(path),
    changeFrequency: path.includes("lease-renewals") || path.includes("rent-reviews") ? "weekly" : "monthly",
    priority:
      path.includes("lease-renewals") || path.includes("rent-reviews")
        ? 0.9
        : path.includes("new-lettings") || path.includes("mast-sales")
          ? 0.8
          : 0.7,
  }));

  const operatorEntries: MetadataRoute.Sitemap = operatorSlugs.map((slug) => ({
    url: withSlash(`${BASE_URL}/${slug}`),
    lastModified: dated("operator"),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const locationEntries: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: withSlash(`${BASE_URL}/locations/${slug}`),
    lastModified: dated("location"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: withSlash(`${BASE_URL}/blog/${post.slug}`),
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...serviceEntries,
    ...operatorEntries,
    ...locationEntries,
    ...blogEntries,
  ];
}
