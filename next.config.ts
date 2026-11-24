import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One URL per page: every path ends with a slash. src/proxy.ts adds the slash itself, in the same
  // hop as any legacy redirect (src/seo/redirects.ts), so Next.js must not add a redirect of its own.
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // The CSS is small (Tailwind plus globals.css): inline it so no stylesheet blocks the first paint.
  experimental: { inlineCss: true },

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
