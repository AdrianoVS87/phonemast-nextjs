#!/usr/bin/env node
/**
 * Seed initial client testimonials into Sanity.
 *
 * Idempotent: deterministic _id = `testimonial-<slug>` + createOrReplace,
 * so re-running this script does not duplicate records.
 *
 * Source: the 4 testimonials previously hardcoded in src/app/page.tsx plus
 * 6 testimonials recovered from the legacy WordPress site (archive.org
 * snapshot 13 Aug 2022 of /testimonials/).
 *
 * Note on dates: where the testimonial's true date is unknown, the
 * datePublished is set to the snapshot date the testimonial was recovered
 * from. Charleen can correct this in /studio later.
 *
 * Usage:
 *   SANITY_API_TOKEN=skXXX node scripts/seed-testimonials.mjs
 *   SANITY_API_TOKEN=skXXX node scripts/seed-testimonials.mjs --dry-run
 */
import { createClient } from "@sanity/client";

const DRY_RUN = process.argv.includes("--dry-run");
const TOKEN = process.env.SANITY_API_TOKEN;
if (!TOKEN) {
  console.error("ERROR: SANITY_API_TOKEN env var required.");
  process.exit(1);
}

const client = createClient({
  projectId: "fn50r1sg",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Order controls homepage display sequence. Lower = first.
// Strongest/most recent client wins the top slots.
const testimonials = [
  // ───────────────── Currently on production (from hardcoded array) ─────────
  {
    name: "Mr. Robert Kell",
    role: "Rent Review Client",
    location: null,
    quote:
      "I recently worked with The Phone Mast Advice Company who assisted with my rent review, and I could not be more pleased with the outcome. The process was handled swiftly and efficiently from start to finish. Their professionalism and expertise gave me complete confidence, and the fact that they operate on a no-win, no-fee basis made the experience even more reassuring. I would highly recommend their services to anyone seeking expert advice and results you can trust.",
    rating: 5,
    datePublished: "2026-05-12",
    featured: true,
    order: 1,
  },
  {
    name: "Richard Salmon",
    role: "Director",
    location: "Compton Beauchamp Estates, Oxfordshire",
    quote:
      "Matt Restall has been managing the Compton Beauchamp Estates phone mast site portfolio since 2012. Matt was involved in instigating and advising on the famous court case Compton Beauchamp Estates v CTIL. We value the advice we have received from him over the last 12 years, and we would be happy to recommend his services to any landlords who have got Phone Mast sites.",
    rating: 5,
    datePublished: "2024-01-15",
    featured: true,
    order: 2,
  },
  {
    name: "John & Patricia Hargreaves",
    role: null,
    location: "Yorkshire",
    quote:
      "Matt secured a rent review settlement that was nearly four times what the operator initially offered. We had no idea how much we were being underpaid. The whole process was handled professionally and the advice was always clear.",
    rating: 5,
    datePublished: "2024-06-01",
    featured: true,
    order: 3,
  },
  {
    name: "David & Susan Alderton",
    role: null,
    location: "Shropshire",
    quote:
      "When Cornerstone came to us about renewing our lease at a drastically reduced rent, we turned to Phone Mast Advice. They fought our corner and secured terms we were genuinely happy with. Highly professional service.",
    rating: 5,
    datePublished: "2024-09-01",
    featured: true,
    order: 4,
  },

  // ───────────────── Recovered from legacy WordPress site ────────────────────
  // Source: https://web.archive.org/web/20220813210118/https://www.phonemastadvice.co.uk/testimonials/
  {
    name: "Matthew McCarrick",
    role: null,
    location: "McCarrick Construction",
    quote:
      "I wanted some advice regarding rent reviews on some phone mast sites. I googled and found The Phone Mast Advice Company. I was impressed from the outset with their knowledge of this field and their professionalism. They advised on a number of options for rent review but also the ability to sell the sites on a long lease. The Phone Mast Advice Company negotiated us a good sale price and contractual terms with AP Wireless and oversaw the whole process using a specialist solicitor. I was pleased with the service provided, would happily recommend.",
    rating: 5,
    datePublished: "2022-08-13",
    featured: true,
    order: 5,
  },
  {
    name: "Linda and Anthony Winter",
    role: null,
    location: null,
    quote:
      "We contacted The Phone Mast Advice Company as we had been approached by On Tower for a mast sale. The Phone Mast Advice Company successfully increased our offer and improved our contractual terms for a long lease. They also helped to oversee the completion of the mast sale. We were very happy with the advice we received on our mast sale.",
    rating: 5,
    datePublished: "2022-08-13",
    featured: true,
    order: 6,
  },
  {
    name: "Paul Harper",
    role: null,
    location: "N.S Engineering",
    quote:
      "I have an annual rental increase of over 20%, better rent review terms and site sharing benefits. All this was carried out with little effort and paid for by the telecom company thanks to your company.",
    rating: 5,
    datePublished: "2022-08-13",
    featured: true,
    order: 7,
  },
  {
    name: "Carole Adcock",
    role: null,
    location: "Atec Security",
    quote:
      "The Phone Mast Advice Company managed to recover all rent arrears and instigated the removal of an adjacent mast, which had been left redundant and was unsightly.",
    rating: 5,
    datePublished: "2022-08-13",
    featured: true,
    order: 8,
  },
  {
    name: "William Newell",
    role: null,
    location: null,
    quote:
      "Many thanks for all your attention and efforts regarding the sale of the Mast Plot. We are very grateful to you for keeping us up to date as you did.",
    rating: 5,
    datePublished: "2022-08-13",
    featured: true,
    order: 9,
  },
  {
    name: "Ruth Astbury",
    role: null,
    location: null,
    quote:
      "Thank you for all your assistance — you have been very helpful and have given us an excellent service.",
    rating: 5,
    datePublished: "2022-08-13",
    featured: true,
    order: 10,
  },
];

async function run() {
  console.log(
    `${DRY_RUN ? "[DRY-RUN] " : ""}Seeding ${testimonials.length} testimonials…\n`,
  );

  for (const t of testimonials) {
    const _id = `testimonial-${slugify(t.name)}`;
    const doc = {
      _id,
      _type: "testimonial",
      name: t.name,
      ...(t.role ? { role: t.role } : {}),
      ...(t.location ? { location: t.location } : {}),
      quote: t.quote,
      rating: t.rating,
      datePublished: t.datePublished,
      featured: t.featured,
      ...(t.order != null ? { order: t.order } : {}),
    };

    if (DRY_RUN) {
      console.log(`  [DRY] ${_id}  →  ${t.name}`);
      continue;
    }

    await client.createOrReplace(doc);
    console.log(`  ✓ ${_id}  →  ${t.name}`);
  }

  console.log(`\nDone. ${testimonials.length} testimonials in Sanity.`);
}

run().catch((err) => {
  console.error("FAILED:", err);
  process.exit(1);
});
