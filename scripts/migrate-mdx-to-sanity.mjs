#!/usr/bin/env node
/**
 * Migrate all MDX blog posts from src/content/blog/ → Sanity dataset.
 *
 * Idempotent: uses deterministic _id = `post-<slug>` and createOrReplace,
 * so running twice produces the same dataset state. Re-run after edits.
 *
 * Usage:
 *   SANITY_API_TOKEN=skXXX node scripts/migrate-mdx-to-sanity.mjs
 *   SANITY_API_TOKEN=skXXX node scripts/migrate-mdx-to-sanity.mjs --dry-run
 */
import { createClient } from "@sanity/client";
import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..");
const BLOG_DIR = join(REPO_ROOT, "src/content/blog");

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

/** Normalise frontmatter date → ISO 8601 with TZ (Sanity datetime requires it). */
function normaliseDate(raw) {
  if (!raw) return null;
  const str = String(raw);
  if (str.endsWith("Z") || /[+-]\d{2}:?\d{2}$/.test(str)) return str;
  // Frontmatter dates like "2026-05-07T22:10:00" are local — assume UTC for stability.
  return str + "Z";
}

/** Read one MDX file → Sanity post document. */
function mdxToDocument(filename) {
  const raw = readFileSync(join(BLOG_DIR, filename), "utf-8");
  const { data: fm, content } = matter(raw);
  const slug = fm.slug || filename.replace(/\.mdx?$/, "");
  const date = normaliseDate(fm.date);
  if (!date) throw new Error(`Missing/invalid date in ${filename}`);

  const doc = {
    _id: `post-${slug}`,
    _type: "post",
    title: fm.title || slug,
    slug: { _type: "slug", current: slug },
    date,
    category: fm.category || "Uncategorised",
    author: fm.author || "Matt Restall",
    excerpt:
      fm.excerpt ||
      content.replace(/[#>*_`-]/g, "").slice(0, 200).replace(/\s+/g, " ").trim() + "...",
    content,
  };
  if (fm.featuredImage) doc.featuredImage = fm.featuredImage;
  if (fm.featuredImageAlt) doc.featuredImageAlt = fm.featuredImageAlt;
  if (fm.featuredImageCredit) doc.featuredImageCredit = fm.featuredImageCredit;

  return doc;
}

async function main() {
  const files = readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  console.log(`Found ${files.length} MDX files in ${BLOG_DIR}\n`);

  const docs = files.map(mdxToDocument);

  if (DRY_RUN) {
    console.log("DRY RUN — would upsert these documents:");
    docs.forEach((d) =>
      console.log(`  ${d._id.padEnd(60)} [${d.category}] ${d.date}  ${d.title.slice(0, 60)}`),
    );
    return;
  }

  // Sanity caps transactions at ~50 mutations; batch in chunks of 25 to be safe.
  const CHUNK = 25;
  let total = 0;
  for (let i = 0; i < docs.length; i += CHUNK) {
    const batch = docs.slice(i, i + CHUNK);
    let tx = client.transaction();
    batch.forEach((doc) => {
      tx = tx.createOrReplace(doc);
    });
    const res = await tx.commit();
    total += res.results.length;
    console.log(
      `Batch ${Math.floor(i / CHUNK) + 1}: upserted ${res.results.length} docs (total ${total}/${docs.length})`,
    );
  }

  console.log(`\nMigration complete: ${total} posts in Sanity dataset "production".`);
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
