import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce trailing slashes for consistency - fixes "Google chose different canonical" issue
  trailingSlash: true,
  
  // Note: skipTrailingSlashRedirect removed because we now enforce trailing slash consistently

  // All WordPress → Next.js redirects are handled in src/middleware.ts.

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phonemastadvice.co.uk",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
