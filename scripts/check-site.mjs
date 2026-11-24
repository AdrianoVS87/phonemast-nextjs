#!/usr/bin/env node
/**
 * Integration checks against a running build (pnpm build && pnpm start -p 3100):
 *   node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/check-site.mjs [baseUrl]
 *
 * For every URL in the sitemap: 200, exactly one H1, no skipped heading levels, title <= 60 and
 * description <= 155 characters and both unique, a self-referencing www canonical with og:url equal
 * to it, indexable, valid JSON-LD with at most one BreadcrumbList, and internal links that never
 * point at a redirect or a missing page. Every redirect rule must answer one 308 to its target.
 * Exits 1 on any failure.
 */
import { REDIRECTS, redirectTarget } from "../src/seo/redirects.ts";
import { DESCRIPTION_MAX, TITLE_MAX } from "../src/seo/metadata.ts";
import { SITE_URL } from "../src/seo/site.ts";

const BASE = (process.argv[2] ?? "http://localhost:3100").replace(/\/$/, "");
const failures = [];
const fail = (where, what) => failures.push(`${where}: ${what}`);
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const text = (html) => decode(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
const local = (url) => url.replace(SITE_URL, BASE);

async function get(url, redirect = "manual") {
  const res = await fetch(url, { redirect });
  return { status: res.status, location: res.headers.get("location"), body: redirect === "manual" && res.status >= 300 && res.status < 400 ? "" : await res.text() };
}

const sitemap = (await get(`${BASE}/sitemap.xml`)).body;
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) fail("sitemap", "no URLs");

const titles = new Map();
const descriptions = new Map();
const internalLinks = new Set();

for (const url of urls) {
  const path = url.replace(SITE_URL, "");
  if (!path.endsWith("/")) fail(path, "sitemap URL without trailing slash");
  const { status, body: html } = await get(local(url));
  if (status !== 200) {
    fail(path, `status ${status}`);
    continue;
  }
  const head = html.slice(0, html.indexOf("</head>"));
  const title = decode(head.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const description = decode(head.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const canonical = head.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const ogUrl = head.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
  const robots = head.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? "";

  if (!title || [...title].length > TITLE_MAX) fail(path, `title ${[...title].length} chars: ${title}`);
  if (!description || [...description].length > DESCRIPTION_MAX) fail(path, `description ${[...description].length} chars`);
  if (titles.has(title)) fail(path, `duplicate title with ${titles.get(title)}`);
  if (descriptions.has(description)) fail(path, `duplicate description with ${descriptions.get(description)}`);
  titles.set(title, path);
  descriptions.set(description, path);
  if (canonical !== url) fail(path, `canonical ${canonical}`);
  if (ogUrl !== url) fail(path, `og:url ${ogUrl}`);
  if (/noindex/.test(robots)) fail(path, `in sitemap but ${robots}`);

  const main = html.slice(html.indexOf("<body"));
  const h1s = [...main.matchAll(/<h1[\s>]/g)].length;
  if (h1s !== 1) fail(path, `${h1s} H1 elements`);
  let previous = 0;
  for (const m of main.matchAll(/<h([1-6])[\s>]/g)) {
    const level = Number(m[1]);
    if (previous && level > previous + 1) fail(path, `heading jumps from h${previous} to h${level}`);
    previous = level;
  }

  let breadcrumbLists = 0;
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      const nodes = data["@graph"] ?? [data];
      breadcrumbLists += nodes.filter((n) => n["@type"] === "BreadcrumbList").length;
    } catch {
      fail(path, "JSON-LD does not parse");
    }
  }
  if (breadcrumbLists > 1) fail(path, `${breadcrumbLists} BreadcrumbList nodes`);
  if (path !== "/" && breadcrumbLists === 0) fail(path, "no BreadcrumbList");

  for (const m of main.matchAll(/<a\b[^>]*href="([^"#?]*)(?:[#?][^"]*)?"/g)) {
    const href = m[1];
    if (href.startsWith("/") && !href.startsWith("/_next") && !/\.[a-z0-9]+$/i.test(href)) {
      if (!href.endsWith("/")) fail(path, `link without trailing slash: ${href}`);
      internalLinks.add(href);
    }
  }
}

for (const href of internalLinks) {
  if (redirectTarget(href)) {
    fail("links", `${href} is a redirect source`);
    continue;
  }
  const { status } = await get(`${BASE}${href}`);
  if (status !== 200) fail("links", `${href} answers ${status}`);
}

for (const source of Object.keys(REDIRECTS)) {
  const expected = redirectTarget(`/${source}/`);
  for (const variant of [`/${source}/`, `/${source}`]) {
    if (/\.[a-z]+$/.test(source) && variant.endsWith("/")) continue;
    const { status, location } = await get(`${BASE}${variant}`);
    const got = location?.replace(BASE, "").replace(SITE_URL, "");
    if (status !== 308 || got !== expected) fail("redirects", `${variant} → ${status} ${got} (expected 308 ${expected})`);
  }
}

console.log(`checked ${urls.length} pages, ${internalLinks.size} internal links, ${Object.keys(REDIRECTS).length} redirect rules`);
if (failures.length) {
  console.log(failures.map((f) => `FAIL ${f}`).join("\n"));
  process.exit(1);
}
console.log("all checks passed");
