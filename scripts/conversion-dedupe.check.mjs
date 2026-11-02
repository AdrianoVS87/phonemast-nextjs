// Run with: node --experimental-strip-types scripts/conversion-dedupe.check.mjs
import assert from "node:assert/strict";
import { claimFormConversion, claimOnce } from "../src/lib/conversionDedupe.ts";

function session() {
  const items = new Map();
  return { getItem: (k) => items.get(k) ?? null, setItem: (k, v) => void items.set(k, v) };
}

// A confirmed send fires once per form kind per session
let store = session();
assert.equal(claimFormConversion({ kind: "rent-estimate", id: "a", hasMast: "yes" }, store), true);
assert.equal(claimFormConversion({ kind: "rent-estimate", id: "b", hasMast: "yes" }, store), false);
assert.equal(claimFormConversion({ kind: "contact", id: "c", hasMast: "yes" }, store), true);

// A silent spam drop has no id, and does not use up the session's claim
store = session();
assert.equal(claimFormConversion({ kind: "contact", hasMast: "yes" }, store), false);
assert.equal(claimFormConversion({ kind: "contact", id: "", hasMast: "yes" }, store), false);
assert.equal(claimFormConversion({ kind: "contact", id: "a", hasMast: "yes" }, store), true);

// The mast answer never blocks a conversion: genuine prospects without a mast can be billable
store = session();
assert.equal(claimFormConversion({ kind: "handbook", id: "a", hasMast: "no" }, store), true);
store = session();
assert.equal(claimFormConversion({ kind: "handbook", id: "a", hasMast: "" }, store), true);

// Blocked storage never stops a conversion; Ads dedupes on transaction_id
const blocked = {
  getItem() {
    throw new Error("denied");
  },
  setItem() {
    throw new Error("denied");
  },
};
assert.equal(claimOnce("k", blocked), true);
assert.equal(claimOnce("k", null), true);

console.log("conversion-dedupe checks passed");
