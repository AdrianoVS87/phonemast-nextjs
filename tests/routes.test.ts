import { test } from "node:test";
import assert from "node:assert/strict";
import { ALL_ROUTES, ROUTES } from "../src/seo/routes.ts";
import { BLOG_SEO, blogDescription, blogTitleTag } from "../src/seo/blog-seo.ts";
import { DESCRIPTION_MAX, TITLE_MAX, buildMetadata, lengthProblems } from "../src/seo/metadata.ts";
import { MERGED_POSTS, OPERATOR_SECTIONS, redirectTarget } from "../src/seo/redirects.ts";

const norm = (q: string) => q.trim().toLowerCase();

test("every page has a title of 60 characters or fewer and a description of 155 or fewer", () => {
  for (const r of ALL_ROUTES) assert.deepEqual(lengthProblems(r), [], r.path);
});

test("titles and descriptions are unique across pages", () => {
  const titles = ALL_ROUTES.map((r) => r.title);
  const descriptions = ALL_ROUTES.map((r) => r.description);
  assert.equal(new Set(titles).size, titles.length, "duplicate title");
  assert.equal(new Set(descriptions).size, descriptions.length, "duplicate description");
});

test("no two URLs share a primary query (pages and posts together)", () => {
  const queries = [...ALL_ROUTES.map((r) => norm(r.primaryQuery)), ...Object.values(BLOG_SEO).map((b) => norm(b.primaryQuery))];
  const seen = new Map<string, number>();
  for (const q of queries) seen.set(q, (seen.get(q) ?? 0) + 1);
  const dupes = [...seen].filter(([, n]) => n > 1).map(([q]) => q);
  assert.deepEqual(dupes, []);
});

test("only the two guides are optimised for the two head terms", () => {
  assert.equal(ROUTES.rentGuide.primaryQuery, "phone mast rent");
  assert.equal(ROUTES.leaseGuide.primaryQuery, "phone mast lease");
  for (const r of ALL_ROUTES) {
    if (r === ROUTES.rentGuide || r === ROUTES.leaseGuide) continue;
    assert.notEqual(norm(r.primaryQuery), "phone mast rent", r.path);
    assert.notEqual(norm(r.primaryQuery), "phone mast lease", r.path);
  }
  assert.doesNotMatch(ROUTES.home.title, /lease|rent/i, "homepage title should carry brand and proposition");
});

test("the guide slugs never change", () => {
  assert.equal(ROUTES.rentGuide.path, "/phone-mast-rent/");
  assert.equal(ROUTES.leaseGuide.path, "/phone-mast-lease/");
});

test("no year in a guide title", () => {
  for (const r of ALL_ROUTES.filter((x) => x.kind === "guide")) assert.doesNotMatch(r.title, /\b20\d\d\b/, r.path);
});

test("every route path is canonical: leading and trailing slash, never a redirect source", () => {
  for (const r of ALL_ROUTES) {
    assert.match(r.path, /^\/(?:[a-z0-9-]+\/)*$/, r.path);
    assert.equal(redirectTarget(r.path), null, `${r.path} is redirected`);
  }
});

test("reviewed dates are real ISO dates, never in the future", () => {
  const today = new Date().toISOString().slice(0, 10);
  for (const r of ALL_ROUTES) {
    if (!r.lastReviewed) continue;
    assert.match(r.lastReviewed, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(r.lastReviewed <= today, `${r.path} reviewed in the future`);
  }
});

test("metadata: absolute title, self-referencing canonical on www, og:url equals canonical", () => {
  const meta = buildMetadata(ROUTES.rentGuide);
  assert.deepEqual(meta.title, { absolute: ROUTES.rentGuide.title });
  assert.equal(meta.alternates?.canonical, "https://www.phonemastadvice.co.uk/phone-mast-rent/");
  assert.equal((meta.openGraph as { url?: string }).url, "https://www.phonemastadvice.co.uk/phone-mast-rent/");
  assert.deepEqual(meta.robots, { index: true, follow: true });
});

test("blog title tags and descriptions fit the limits", () => {
  for (const [slug, seo] of Object.entries(BLOG_SEO)) {
    if (seo.seoTitle) assert.ok(blogTitleTag(slug, "x".repeat(200)).length <= TITLE_MAX, slug);
    if (seo.description) assert.ok(seo.description.length <= DESCRIPTION_MAX, `${slug}: ${seo.description.length}`);
  }
  assert.equal(blogTitleTag("unknown", "Short title"), "Short title | Phone Mast Advice");
  assert.equal(blogDescription("unknown", "One. Two."), "One. Two.");
  assert.equal(blogDescription("unknown", `${"a".repeat(100)}. ${"b".repeat(100)}.`), `${"a".repeat(100)}.`);
});

test("merged and removed posts are not given a search intent", () => {
  for (const slug of Object.keys(MERGED_POSTS)) assert.equal(BLOG_SEO[slug], undefined, slug);
  for (const slug of Object.keys(OPERATOR_SECTIONS)) assert.equal(ALL_ROUTES.some((r) => r.path === `/${slug}/`), false);
});
