import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WordPress URL 301 redirects — preserve SEO equity
  async redirects() {
    return [
      // Homepage / root
      { source: "/home", destination: "/", permanent: true },

      { source: "/rent-reviews", destination: "/phone-mast-services/rent-reviews", permanent: true },
      { source: "/lease-renewals", destination: "/phone-mast-services/lease-renewals", permanent: true },
      { source: "/new-lettings", destination: "/phone-mast-services/new-lettings", permanent: true },
      { source: "/mast-sales", destination: "/phone-mast-services/mast-sales", permanent: true },
      { source: "/mast-removel-and-redevelopment", destination: "/phone-mast-services/removal-and-redevelopment", permanent: true },
      { source: "/mast-removal-and-redevelopment", destination: "/phone-mast-services/removal-and-redevelopment", permanent: true },
      { source: "/electricity-costs-recovery", destination: "/phone-mast-services/electricity-costs-recovery", permanent: true },
      { source: "/other-services", destination: "/phone-mast-services/other-services", permanent: true },
      { source: "/lease-retrievals", destination: "/phone-mast-services/lease-retrievals", permanent: true },

      // Operator pages — WordPress slugs to new routes
      { source: "/vodafone-phone-mast-lease", destination: "/phone-mast-services/vodafone", permanent: true },
      { source: "/o2-phone-mast-lease", destination: "/phone-mast-services/o2", permanent: true },
      { source: "/ee-phone-mast-lease", destination: "/phone-mast-services/ee", permanent: true },
      { source: "/three-phone-mast-lease", destination: "/phone-mast-services/three", permanent: true },
      { source: "/cellnex-phone-mast-lease", destination: "/phone-mast-services/cellnex", permanent: true },
      { source: "/cornerstone-phone-mast-lease", destination: "/phone-mast-services/cornerstone", permanent: true },
      { source: "/ctil-phone-mast-lease", destination: "/phone-mast-services/cornerstone", permanent: true },
      { source: "/airwave-phone-mast-lease", destination: "/phone-mast-services/airwave", permanent: true },
      { source: "/arqiva-phone-mast-lease", destination: "/phone-mast-services/on-tower", permanent: true },

      // Location pages
      { source: "/phone-mast-advice-london", destination: "/locations/london", permanent: true },
      { source: "/phone-mast-advice-bristol", destination: "/locations/bristol", permanent: true },
      { source: "/phone-mast-advice-oswestry", destination: "/locations/oswestry", permanent: true },

      // 2026 pages

      // About / team
      { source: "/about-the-phone-mast-advice-company", destination: "/about-us", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/phone-mast-experts", destination: "/team", permanent: true },

      // Blog / news
      { source: "/news", destination: "/blog", permanent: true },
      { source: "/news/:slug*", destination: "/blog/:slug*", permanent: true },
      { source: "/blog-post/:slug*", destination: "/blog/:slug*", permanent: true },

      // Contact / lead gen
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/phone-mast-landlords-handbook", destination: "/handbook", permanent: true },

      // Legal
      { source: "/cookie-policy-uk", destination: "/cookie-policy", permanent: true },


      // Services overview
      { source: "/phone-mast-services-overview", destination: "/phone-mast-services", permanent: true },
    ];
  },

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
