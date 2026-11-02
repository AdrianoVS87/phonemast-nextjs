// Run with: node --experimental-strip-types scripts/has-mast.check.mjs
import assert from "node:assert/strict";
import { mastDetail, mastEmailRow, mastSubjectPrefix, normaliseHasMast } from "../src/lib/hasMast.ts";

assert.equal(normaliseHasMast("yes"), "yes");
assert.equal(normaliseHasMast("no"), "no");
assert.equal(normaliseHasMast(undefined), "unknown");
assert.equal(normaliseHasMast("<script>"), "unknown");
assert.equal(mastSubjectPrefix("yes"), "[Has mast] ");
assert.equal(mastSubjectPrefix("no"), "[No mast] ");
assert.equal(mastSubjectPrefix(undefined), "");
assert.equal(mastDetail("yes", "abc"), "hasMast: yes; abc");
assert.equal(mastDetail(undefined, undefined), "hasMast: unknown");
assert.ok(mastEmailRow("yes").includes(">Yes<"));
assert.ok(!mastEmailRow("<script>").includes("<script>"));
console.log("has-mast checks passed");
