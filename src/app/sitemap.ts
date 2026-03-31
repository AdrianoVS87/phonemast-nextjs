import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://phonemastadvice.co.uk";

const operatorSlugs = [
  "vodafone-phone-mast-lease",
  "o2-phone-mast-lease",
  "ee-phone-mast-lease",
  "three-phone-mast-lease",
  "ctil-cornerstone-phone-mast-lease",
  "on-tower-arqiva-phone-mast-lease",
  "cellnex-phone-mast-lease",
  "airwave-phone-mast-lease",
  "wig-phone-mast-lease",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/free-lease-check`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/free-rent-estimate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/handbook`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/phone-mast-rent-2026`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/phone-mast-lease-2026`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const operatorEntries: MetadataRoute.Sitemap = operatorSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const locationEntries: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
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
