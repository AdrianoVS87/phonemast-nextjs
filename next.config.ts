import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable automatic trailing-slash normalization so middleware.ts can
  // redirect WP URLs (e.g. /rent-reviews/) directly to the final destination
  // in a single 308 hop instead of the default /foo/ → /foo → /new-path chain.
  skipTrailingSlashRedirect: true,

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
