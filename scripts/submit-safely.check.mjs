// Run with: node --experimental-strip-types scripts/submit-safely.check.mjs
import assert from "node:assert/strict";
import { SEND_FAILED_MESSAGE, submitSafely, withOfficePhone } from "../src/lib/submitSafely.ts";

const silence = console.error;
console.error = () => {};

// A confirmed send passes through untouched
assert.deepEqual(await submitSafely(async () => ({ success: true, id: "abc" })), { success: true, id: "abc" });

// A thrown action (network failure) becomes a failure naming the phone number
const thrown = await submitSafely(async () => {
  throw new TypeError("Failed to fetch");
});
assert.deepEqual(thrown, { success: false, error: SEND_FAILED_MESSAGE });
assert.ok(SEND_FAILED_MESSAGE.includes("01691 791543"));

// A request that never answers still ends
const stalled = await submitSafely(() => new Promise(() => {}), 10);
assert.equal(stalled.success, false);
assert.equal(stalled.error, SEND_FAILED_MESSAGE);

// Server refusals keep their own wording and gain the number if it is missing
const refused = await submitSafely(async () => ({ success: false, error: "Please enter a valid email address." }));
assert.equal(refused.error, "Please enter a valid email address. You can also call us on 01691 791543.");
assert.equal(withOfficePhone("Call us on 01691 791543."), "Call us on 01691 791543.");
assert.equal(withOfficePhone(undefined), SEND_FAILED_MESSAGE);

console.error = silence;
console.log("submit-safely checks passed");
