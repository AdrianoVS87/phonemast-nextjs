// Run with: node --experimental-strip-types scripts/contact-clicks.check.mjs
import assert from "node:assert/strict";
import { CONTACT_EVENTS, classifyContactLink, parseConsent } from "../src/lib/contactClicks.ts";

assert.equal(classifyContactLink("tel:01691791543"), "phone");
assert.equal(classifyContactLink(" TEL:+441691791543 "), "phone");
assert.equal(classifyContactLink("https://wa.me/447843352654"), "whatsapp");
assert.equal(classifyContactLink("https://wa.me/447843352654?text=Hello"), "whatsapp");
assert.equal(classifyContactLink("https://WWW.WA.ME/447843352654"), "whatsapp");
assert.equal(classifyContactLink("/free-rent-estimate/"), null);
assert.equal(classifyContactLink("https://example.com/wa.me/123"), null);
assert.equal(classifyContactLink("https://wa.me.example.com/123"), null);
assert.equal(classifyContactLink("mailto:info@phonemastadvice.co.uk"), null);
assert.equal(classifyContactLink(""), null);
assert.equal(classifyContactLink(null), null);

assert.equal(CONTACT_EVENTS.phone, "phone_click");
assert.equal(CONTACT_EVENTS.whatsapp, "whatsapp_click");

const denied = { analytics: false, advertising: false };
assert.deepEqual(parseConsent(null), denied);
assert.deepEqual(parseConsent("not json"), denied);
assert.deepEqual(parseConsent("{}"), denied);
assert.deepEqual(parseConsent(JSON.stringify({ status: "rejected", prefs: denied })), denied);
assert.deepEqual(
  parseConsent(JSON.stringify({ status: "custom", prefs: { analytics: true, advertising: false } })),
  { analytics: true, advertising: false },
);
assert.deepEqual(parseConsent(JSON.stringify({ status: "accepted" })), { analytics: true, advertising: true });

console.log("contact-clicks checks passed");
