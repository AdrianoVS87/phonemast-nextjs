// Behavioural check for src/lib/spamGuard.ts. Run: node --experimental-strip-types scripts/spam-guard.check.mjs
import { checkToken, isDotTrickEmail, isLocationReference, issueToken, screenSubmission, withoutMapLinks } from "../src/lib/spamGuard.ts";

let failures = 0;
const expect = (label, got, want) => {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}${ok ? "" : ` → got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`}`);
};

const t0 = 1_791_359_000_000;
const token = issueToken(t0);
const later = t0 + 20_000;

// token mechanics
expect("fresh token after 20 s", checkToken(token, later), "ok");
expect("token 1 s old", checkToken(token, t0 + 1000), "too-fast");
expect("token 25 h old", checkToken(token, t0 + 25 * 3600 * 1000), "expired");
expect("missing token", checkToken(undefined, later), "missing");
expect("forged token", checkToken(`${t0}.${"0".repeat(64)}`, later), "invalid");
expect("garbage token", checkToken("hello", later), "invalid");

// the exact spam seen on 6 Oct 2026 (name/email/message shape, not the person)
const spam = { name: "vSKsmqsBjBHkOhGJzeh", email: "ng.u.y.enn.a.t.han.51.4@gmail.com", message: "9272704595", token };
expect("6 Oct spam sample", screenSubmission(spam, later), {
  action: "refuse",
  reason: "name:random,email:dots,message:no-letters",
  message: "We could not send this message automatically. Please call us on 01691 791543 or email info@phonemastadvice.co.uk and we will come straight back to you.",
});
expect("spam without token is refused with a message (never sent)", screenSubmission({ ...spam, token: undefined }, later).reason, "token:missing");
expect("link spam", screenSubmission({ name: "Best SEO", email: "a@b.co", message: "see http://x.com http://y.com http://z.com", token }, later).reason, "message:links");

// the Free Rent Estimate spam that slipped through on 10 Oct 2026
const spam2 = { name: "ndilwaCWONNNMPGERLpAML", email: "farmerbunch@verizon.net", message: "OMFNtXRlJsXlhxGIZFqDz", address: "9642060523", currentRent: "BZTpfGuaRDXASRxjjfnTdJcx", token };
expect("10 Oct rent-estimate spam", screenSubmission(spam2, later).reason, "name:random,message:gibberish,address:no-letters,rent:gibberish");

// variants of those bots stay refused, however a single field is dressed up
const refusedBy = (fields) => screenSubmission({ name: "Jane Doe", email: "jane@doe.co.uk", token, ...fields }, later).reason;
const stillRefused = [
  ["bot digits as address", { address: "9642060523" }, "address:no-letters"],
  ["bot digits as message", { message: "9272704595" }, "message:no-letters"],
  ["bot letters as message", { message: "OMFNtXRlJsXlhxGIZFqDz" }, "message:gibberish"],
  ["bot letters as rent", { currentRent: "BZTpfGuaRDXASRxjjfnTdJcx" }, "rent:gibberish"],
  ["bot name", { name: "ndilwaCWONNNMPGERLpAML" }, "name:random"],
  ["dot-trick email, 8 dots", { email: "ng.u.y.enn.a.t.han.51.4@gmail.com" }, "email:dots"],
  ["dot-trick email, 6 dots", { email: "a.b.c.d.e.f.g@gmail.com" }, "email:dots"],
  ["phone number as address", { address: "01691 791543" }, "address:no-letters"],
  ["two digit strings as address", { address: "964206 052312" }, "address:no-letters"],
  ["10 digits split as address", { address: "96420 60523" }, "address:no-letters"],
  ["decimals outside the UK", { address: "12.3456, 98.7654" }, "address:no-letters"],
  ["lat/long swapped", { address: "-3.0543, 52.8557" }, "address:no-letters"],
  ["gibberish link", { message: "see https://evil.com/OMFNtXRlJsXlhxGIZFqDz" }, "message:gibberish"],
  ["look-alike host", { message: "https://maps.app.goo.gl.evil.com/OMFNtXRlJsXlhxGIZFqDz" }, "message:gibberish"],
  ["map host inside a path", { message: "https://evil.com/maps.app.goo.gl/OMFNtXRlJsXlhxGIZFqDz" }, "message:gibberish"],
  ["gibberish beside a map link", { message: "https://maps.app.goo.gl/XyZaBcDeFgHiJkLmN OMFNtXRlJsXlhxGIZFqDz" }, "message:gibberish"],
  ["three other links beside a map link", { message: "http://x.com http://y.com http://z.com https://maps.app.goo.gl/abc" }, "message:links"],
];
for (const [label, fields, reason] of stillRefused) expect(`refused: ${label}`, refusedBy(fields), reason);

// real people must pass
const people = [
  ["John Smith", "john.smith@gmail.com", "Hi, we have a Vodafone mast on our farm and the lease ends in 2027. Can you help?"],
  ["Siân O'Brien-McDonald", "sian.obrien@outlook.com", "Rent review notice received from Cornerstone."],
  ["Krzysztof Szczygieł", "k.szczygiel@firma.pl", "Phone mast lease renewal, EE and H3G."],
  ["Schwartz Bryn", "bryn@example.co.uk", "Looking for a rent estimate."],
  ["Ng Wei", "ng.wei@example.com", "Mast sale enquiry — what is the process? Our site: www.ourclub.org"],
  ["DeAndre Johnson", "deandre.j@yahoo.co.uk", "Call me on 07700 900123 please."],
  ["Mr J P Jones", "jpjones@btinternet.com", "£4,800 pa at the moment; operator says £1,200. 2 masts."],
  ["Charleen Van Blerk", "charleen@phonemastadvice.co.uk", "TEST - Adriano (website delivery check)"],
  // refused by the first version (audit 2026-10-11): titles, initials, company suffixes
  ["Mrs Brown", "brown@example.co.uk", "Rent review letter received."],
  ["Mr Wright", "wright@example.co.uk", "Lease renewal."],
  ["Mr J Smith", "jsmith@example.co.uk", "Can you call me?"],
  ["Dr J Smith", "drsmith@example.co.uk", "Mast on our roof."],
  ["Mr & Mrs Smith", "smiths@example.co.uk", "Two masts on our farm."],
  ["Cllr Smith", "cllr@example.gov.uk", "Council site enquiry."],
  ["MKM Farms Ltd", "office@mkmfarms.co.uk", "EE mast, lease ends 2027."],
  ["JRS Lands Ltd", "info@jrslands.co.uk", "CTIL wants to renew."],
  ["Alexander MacDonaldson", "alex@example.co.uk", "Rent estimate please."],
  ["Llewellyn Rhys-Pritchard", "llew@example.co.uk", "Arqiva site."],
];
// rent-estimate form with real address and rent
expect("person: rent estimate with address", screenSubmission({ name: "Jane Doe", email: "jane@doe.co.uk", message: "Vodafone site", address: "Hosier Field, Astley Bridge Farm, Bolton BL1 7HT", currentRent: "£4,800 per annum", token }, later), { action: "send" });
for (const [name, email, message] of people) {
  expect(`person: ${name}`, screenSubmission({ name, email, message, token }, later), { action: "send" });
}
// sites given the way rural owners give them (audit 1.4), through the real function
const site = (fields) => screenSubmission({ name: "Jane Doe", email: "jane@doe.co.uk", token, ...fields }, later);
const sites = [
  ["Maps short link in message", { message: "https://maps.app.goo.gl/XyZaBcDeFgHiJkLmN" }],
  ["Maps short link with text", { message: "The mast is here: https://maps.app.goo.gl/XyZaBcDeFgHiJkLmN?g_st=ic thanks" }],
  ["Maps short link in address", { address: "https://maps.app.goo.gl/XyZaBcDeFgHiJkLmN" }],
  ["Maps link without https", { address: "maps.app.goo.gl/XyZaBcDeFgHiJkLmN" }],
  ["older goo.gl Maps link", { message: "https://goo.gl/maps/XyZaBcDeFgHiJkLmN" }],
  ["long Google Maps link", { message: "https://www.google.com/maps/place/52.8557,-3.0543/@52.8557,-3.0543,17z/data=!3m1!4b1" }],
  ["Google Maps co.uk link", { message: "https://www.google.co.uk/maps/@52.8557,-3.0543,17z?entry=XyZaBcDeFgHiJkLmN" }],
  ["three map links", { message: "https://maps.app.goo.gl/aB1 https://maps.app.goo.gl/cD2 https://maps.app.goo.gl/eF3" }],
  ["lat/long", { address: "52.8557, -3.0543" }],
  ["lat/long, slash", { address: "52.8557/-3.0543" }],
  ["lat/long, no comma", { address: "52.8557 -3.0543" }],
  ["lat/long, east of Greenwich", { address: "52.6309, 1.2974" }],
  ["lat/long with letters", { address: "52.8557 N, 3.0543 W" }],
  ["lat/long as message", { message: "52.8557, -3.0543" }],
  ["grid reference, numbers", { address: "332145 / 330215" }],
  ["grid reference, comma", { address: "332145, 330215" }],
  ["grid reference, space", { address: "332145 330215" }],
  ["grid reference as message", { message: "332145 / 330215" }],
  ["grid reference, letters", { address: "SJ 321 451" }],
  ["grid reference, letters, no spaces", { address: "SJ3214533021" }],
  ["four-dot email", { email: "a.b.c.d.e@example.com" }],
  ["five-dot email", { email: "mr.j.p.a.jones.farm@btinternet.com" }],
];
for (const [label, fields] of sites) expect(`site: ${label}`, site(fields), { action: "send" });
expect("helper: map link removed", withoutMapLinks("see https://maps.app.goo.gl/XyZ please").trim().replace(/\s+/g, " "), "see please");
expect("helper: other link kept", withoutMapLinks("https://evil.com/XyZ"), "https://evil.com/XyZ");
expect("helper: bot digits are no location", isLocationReference("9642060523"), false);
expect("helper: four dots are fine", isDotTrickEmail("a.b.c.d.e@example.com"), false);

// handbook form has no message field
expect("handbook (no message)", screenSubmission({ name: "Mary Evans", email: "mary@evans.net", token }, later), { action: "send" });

console.log(failures ? `\n${failures} check(s) FAILED` : "\nall checks passed");
process.exit(failures ? 1 : 0);
