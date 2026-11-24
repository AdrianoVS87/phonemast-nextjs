import { test } from "node:test";
import assert from "node:assert/strict";
import {
  LEGACY_DOMAIN,
  MERGED_POSTS,
  OPERATORS_HUB,
  OPERATOR_SECTIONS,
  REDIRECTS,
  isGone,
  legacyDomainTarget,
  redirectTarget,
  resolveRequest,
} from "../src/seo/redirects.ts";
import { SITE_HOST } from "../src/seo/site.ts";

const keyOf = (target: string) => target.split("#")[0].replace(/^\/+|\/+$/g, "");

test("every rule lands on a page that is not itself redirected (single hop)", () => {
  for (const source of Object.keys(REDIRECTS)) {
    const target = redirectTarget(`/${source}/`);
    assert.ok(target, `${source} has no target`);
    assert.equal(REDIRECTS[keyOf(target)], undefined, `${source} → ${target} is a chain`);
    assert.equal(isGone(target.split("#")[0]), false, `${source} → ${target} is gone`);
  }
});

test("every target ends with a slash or is a file", () => {
  for (const source of Object.keys(REDIRECTS)) {
    const path = (redirectTarget(`/${source}`) ?? "").split("#")[0];
    assert.match(path, /\/$|\.[a-z]+$/, `${source} → ${path}`);
  }
});

test("only home-equivalent sources go to the homepage", () => {
  const homeSources = Object.keys(REDIRECTS).filter((s) => redirectTarget(`/${s}`) === "/");
  assert.deepEqual(homeSources.sort(), ["home", "index.php"]);
});

test("with and without trailing slash give the same single redirect", () => {
  assert.equal(redirectTarget("/contact-us"), "/contact/");
  assert.equal(redirectTarget("/contact-us/"), "/contact/");
  assert.equal(redirectTarget("/what-is-a-phone-mast-lease/"), "/phone-mast-lease/");
  assert.equal(redirectTarget("/about-the-phone-mast-advice-company/"), "/about-us/");
});

test("operator pages and their aliases go straight to their hub section", () => {
  for (const [slug, section] of Object.entries(OPERATOR_SECTIONS)) {
    assert.equal(redirectTarget(`/${slug}/`), `${OPERATORS_HUB}#${section}`);
    assert.equal(redirectTarget(`/phone-mast-services/${slug}/`), `${OPERATORS_HUB}#${section}`);
  }
  assert.equal(redirectTarget("/arqiva-phone-mast-lease/"), `${OPERATORS_HUB}#on-tower`);
  assert.equal(redirectTarget("/ctil-phone-mast-lease/"), `${OPERATORS_HUB}#ctil-cornerstone`);
});

test("merged posts redirect from both their blog URL and their old root URL", () => {
  for (const [slug, target] of Object.entries(MERGED_POSTS)) {
    assert.equal(redirectTarget(`/blog/${slug}/`), target);
    assert.equal(redirectTarget(`/${slug}/`), target);
  }
});

test("the two guide slugs are never redirected", () => {
  assert.equal(redirectTarget("/phone-mast-rent/"), null);
  assert.equal(redirectTarget("/phone-mast-lease/"), null);
  assert.deepEqual(resolveRequest(SITE_HOST, "/phone-mast-rent/"), { kind: "pass" });
});

test("real service pages pass; old WordPress children redirect", () => {
  assert.equal(redirectTarget("/phone-mast-services/rent-reviews/"), null);
  assert.equal(redirectTarget("/phone-mast-services/our-services/"), "/phone-mast-services/");
});

test("WordPress archives go to the blog, location aliases to the location", () => {
  assert.equal(redirectTarget("/category/telecoms/"), "/blog/");
  assert.equal(redirectTarget("/2019/05/some-post/"), "/blog/");
  assert.equal(redirectTarget("/locations/phone-mast-advice-bristol/"), "/locations/bristol/");
});

test("spam and WordPress internals answer 410", () => {
  assert.equal(isGone("/free-game-casino-bonuses/"), true);
  assert.equal(isGone("/wp-content/uploads/2020/01/a.jpg"), true);
  assert.equal(isGone("/wp-admin/"), true);
  assert.equal(isGone("/blog/"), false);
  assert.deepEqual(resolveRequest(SITE_HOST, "/xmlrpc.php"), { kind: "gone" });
});

test("bare domain goes to www in one hop, mapping the path at the same time", () => {
  assert.deepEqual(resolveRequest("phonemastadvice.co.uk", "/"), { kind: "redirect", status: 308, location: `https://${SITE_HOST}/` });
  assert.deepEqual(resolveRequest("phonemastadvice.co.uk", "/contact-us"), { kind: "redirect", status: 308, location: `https://${SITE_HOST}/contact/` });
  assert.deepEqual(resolveRequest("phonemastadvice.co.uk", "/phone-mast-rent"), { kind: "redirect", status: 308, location: `https://${SITE_HOST}/phone-mast-rent/` });
});

test("legacy domain: mapped paths go to their equivalent, unmapped to the homepage, spam is dropped", () => {
  assert.equal(legacyDomainTarget("/contact/"), "/contact/");
  assert.equal(legacyDomainTarget("/contactus.php"), "/contact/");
  assert.equal(legacyDomainTarget("/tag/vodafone/"), "/blog/");
  assert.equal(legacyDomainTarget("/careers.php"), "/");
  assert.equal(legacyDomainTarget("/ihao/vj-tujyx/index.html"), null);
  for (const target of Object.values(LEGACY_DOMAIN.map)) {
    assert.equal(redirectTarget(target), null, `legacy target ${target} is itself redirected`);
  }
});
