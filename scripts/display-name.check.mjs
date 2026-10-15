// node --experimental-strip-types scripts/display-name.check.mjs
// The greeting in the enquiry acknowledgement / handbook email (Raquel 2026-10-14: "Hi john").
import { displayName } from "../src/lib/leadMail.ts";

const cases = [
  ["john", "John"], ["john joynson", "John Joynson"], ["  john  ", "John"], ["JOHN SMITH", "John Smith"],
  ["mary-jane o'brien", "Mary-Jane O'Brien"], ["siobhan mcginnis", "Siobhan McGinnis"], ["MacLeod", "MacLeod"],
  ["Mrs Brown", "Mrs Brown"], ["d'arcy", "D'arcy"], ["st paul's", "St Paul's"], ["John", "John"], ["", ""],
];
let failed = 0;
for (const [input, want] of cases) {
  const got = displayName(input);
  const ok = got === want;
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"} ${JSON.stringify(input)} -> ${JSON.stringify(got)}${ok ? "" : ` (want ${JSON.stringify(want)})`}`);
}
console.log(failed ? `\n${failed} failed` : "\nall checks passed");
process.exit(failed ? 1 : 0);
