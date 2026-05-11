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
    sitemap: "https://www.phonemastadvice.co.uk/sitemap.xml",
    host: "https://www.phonemastadvice.co.uk",
  };
}
