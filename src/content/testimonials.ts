/**
 * Client testimonials, in the clients' own words. Kept out of the facts scan
 * (tests/company-facts.test.ts) because a quote is not the firm's claim; docs/seo/needs-owner-confirmation.md
 * lists where a quote now disagrees with the approved fee sentence.
 */
import type { Testimonial } from "../lib/sanity.ts";

/**
 * Fallback shown only if Sanity returns zero featured testimonials —
 * keeps the homepage from going empty between schema deploy and seed
 * script run, and gives us a safety net if Sanity is briefly unavailable
 * at build time. Once Charleen / Raquel manage testimonials via /studio
 * this fallback path should never fire in production.
 */
export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    _id: "fallback-robert-kell",
    name: "Mr. Robert Kell",
    role: "Rent Review Client",
    quote:
      "I recently worked with The Phone Mast Advice Company who assisted with my rent review, and I could not be more pleased with the outcome. The process was handled swiftly and efficiently from start to finish. Their professionalism and expertise gave me complete confidence, and the fact that they operate on a no-win, no-fee basis made the experience even more reassuring. I would highly recommend their services to anyone seeking expert advice and results you can trust.",
    rating: 5,
    datePublished: "2026-05-12",
  },
  {
    _id: "fallback-richard-salmon",
    name: "Richard Salmon",
    role: "Director",
    location: "Compton Beauchamp Estates, Oxfordshire",
    quote:
      "Matt Restall has been managing the Compton Beauchamp Estates phone mast site portfolio since 2012. Matt was involved in instigating and advising on the famous court case Compton Beauchamp Estates v CTIL. We value the advice we have received from him over the last 12 years, and we would be happy to recommend his services to any landlords who have got Phone Mast sites.",
    rating: 5,
    datePublished: "2024-01-15",
  },
  {
    _id: "fallback-hargreaves",
    name: "John & Patricia Hargreaves",
    location: "Yorkshire",
    quote:
      "Matt secured a rent review settlement that was nearly four times what the operator initially offered. We had no idea how much we were being underpaid. The whole process was handled professionally and the advice was always clear.",
    rating: 5,
    datePublished: "2024-06-01",
  },
  {
    _id: "fallback-alderton",
    name: "David & Susan Alderton",
    location: "Shropshire",
    quote:
      "When Cornerstone came to us about renewing our lease at a drastically reduced rent, we turned to Phone Mast Advice. They fought our corner and secured terms we were genuinely happy with. Highly professional service.",
    rating: 5,
    datePublished: "2024-09-01",
  },
];
