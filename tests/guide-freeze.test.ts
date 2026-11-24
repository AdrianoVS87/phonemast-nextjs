/**
 * Snapshot of the two money guides' locked fields. If this fails, something changed the title, H1,
 * slug or opening answer of a guide. Only change the expected values below with the owner's
 * written sign-off, recorded in docs/seo/content-changes-for-review.md.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { ROUTES } from "../src/seo/routes.ts";
import { LEASE_GUIDE, RENT_GUIDE } from "../src/content/guides.ts";

test("rent guide: slug, title, H1 and opening answer are locked", () => {
  assert.equal(ROUTES.rentGuide.path, "/phone-mast-rent/");
  assert.equal(ROUTES.rentGuide.title, "Phone Mast Rent: Tribunal Figures and What to Claim");
  assert.equal(RENT_GUIDE.h1, "Phone mast rent: what operators pay landowners, and why");
  assert.equal(
    RENT_GUIDE.answer,
    "Published Tribunal decisions value a standard rural phone mast at £1,750 a year and city rooftop sites at £3,850 to £5,000 a year. " +
      "What your site should pay depends on its type and on the agreement you hold, and fees, compensation and electricity are paid on top of the rent. " +
      "An operator's offer is an opening position, not the answer.",
  );
});

test("lease guide: slug, title, H1 and opening answer are locked", () => {
  assert.equal(ROUTES.leaseGuide.path, "/phone-mast-lease/");
  assert.equal(ROUTES.leaseGuide.title, "Phone Mast Lease: Plain-English Guide for Landowners");
  assert.equal(LEASE_GUIDE.h1, "Phone mast leases explained for landowners");
  assert.equal(
    LEASE_GUIDE.answer,
    "A phone mast lease gives an operator exclusive possession of part of your land or building for a period, in return for rent. " +
      "It is a commercial lease with one big difference: the operator also holds rights under the Electronic Communications Code " +
      "that override many of its clauses, so it does not simply end when its term runs out.",
  );
});

test("the guides' titles do not echo the competitor's", () => {
  const competitor = /what every uk landlord needs to know/i;
  assert.doesNotMatch(ROUTES.leaseGuide.title, competitor);
  assert.doesNotMatch(LEASE_GUIDE.h1, competitor);
});
