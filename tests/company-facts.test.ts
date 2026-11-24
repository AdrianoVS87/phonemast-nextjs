/**
 * Company facts live only in src/content/company.ts. This fails if a phone number, contact address,
 * WhatsApp link or marketing claim is typed straight into a template, component or library file.
 * Post bodies (src/lib/local-posts.ts) are editorial content mirrored from the CMS and are excluded.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { CLAIMS, COMPANY, COMPTON_STATEMENT, STATEMENTS, confirmedClaim, registrationLine } from "../src/content/company.ts";
import { CASES } from "../src/content/legal.ts";

const SCANNED = ["src/app", "src/components", "src/lib", "src/seo"];
const EXCLUDED = new Set([join("src", "lib", "local-posts.ts")]);

function sourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return sourceFiles(p);
    return /\.(tsx?|css)$/.test(e.name) && !EXCLUDED.has(p) ? [p] : [];
  });
}

/** Source without comments, so explanations of why a claim is gated do not count as the claim. */
function code(file: string): string {
  return readFileSync(file, "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:"'`])\/\/.*$/gm, "$1");
}

const FORBIDDEN: [string, RegExp][] = [
  ["UK phone number", /\b0\d{3,4}[ -]?\d{6}\b|\+44[ (]?\d/],
  ["firm email address", /info@phonemastadvice\.co\.uk/],
  ["WhatsApp number", /wa\.me\/\d+/],
  ["company number", /13115582/],
  ["years of experience claim", /\b30\+|\bover 30 years|\bsince 1999\b|\b40\+ years/i],
  ["deal count claim", /\b10,000\+?\s*(mast )?deals|\b10,000\+ (mast )?deals/i],
  ["RICS claim", /\bRICS\b/],
  ["review rating claim", /\bRated 5\/5\b|\b5\/5 on Google\b/i],
  ["fee claim", /no[- ]win,? no[- ]fee/i],
  ["office address", /\bW1W ?5PF\b|\bSY11 ?4AD\b|\bBS9 ?3BY\b|Great Portland Street|Artillery Business Park|Westbury on Trym/i],
  ["office claim", /\bour (London|Bristol|Oswestry) office\b|\bthree offices\b/i],
  ["superlative", /\bfirst firm in the UK\b|\bmost famous\b|\bmost significant (UK )?telecoms\b|\bUK'?s No\.? ?1\b/i],
];

test("no phone numbers, contact addresses or marketing claims outside the facts module", () => {
  const problems: string[] = [];
  for (const dir of SCANNED) {
    for (const file of sourceFiles(dir)) {
      const text = code(file);
      for (const [label, pattern] of FORBIDDEN) {
        const m = pattern.exec(text);
        if (m) problems.push(`${file}: ${label} "${m[0]}"`);
      }
    }
  }
  assert.deepEqual(problems, []);
});

test("unconfirmed claims render nothing", () => {
  for (const id of Object.keys(CLAIMS) as (keyof typeof CLAIMS)[]) {
    assert.equal(confirmedClaim(id), CLAIMS[id].confirmed ? CLAIMS[id].text : null, id);
  }
});

test("facts are well formed", () => {
  assert.match(COMPANY.phone.href, /^tel:\+44\d{10}$/);
  assert.equal(COMPANY.phone.href.replace("tel:+44", "0"), COMPANY.phone.display.replace(/\s/g, ""));
  assert.match(COMPANY.email, /^[^@\s]+@phonemastadvice\.co\.uk$/);
  assert.match(COMPANY.registrationNumber, /^\d{8}$/);
  assert.ok(STATEMENTS.serviceArea.includes(COMPANY.areaServed.join(" and ")), "service-area sentence and structured data disagree");
});

test("Matt's Compton Beauchamp wording uses the verified case record", () => {
  const c = CASES.comptonBeauchamp;
  assert.equal(COMPTON_STATEMENT.citation, c.citation);
  assert.ok(c.url && c.verifiedOn, "the case link must be verified");
  assert.equal(
    STATEMENTS.comptonBeauchamp,
    "We instigated and oversaw Cornerstone v Compton Beauchamp Estates [2022] UKSC 18, in which the Supreme Court confirmed that operators with leases protected by the Landlord and Tenant Act 1954 must renew under that Act.",
  );
});

test("the disclosure line names the registered office and never calls it an office", () => {
  const line = registrationLine();
  assert.match(line, /^Registered in England and Wales, company number 13115582\. Registered office: /);
  assert.ok(line.includes(COMPANY.registeredOffice.postalCode));
  assert.doesNotMatch(line.replace(/Registered office|The Bristol Office/g, ""), /\boffice\b/i);
});
