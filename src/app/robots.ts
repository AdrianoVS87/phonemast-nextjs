import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/"],
      },
    ],
    sitemap: "https://phonemastadvice.co.uk/sitemap.xml",
    host: "https://phonemastadvice.co.uk",
  };
}
