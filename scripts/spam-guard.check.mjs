// Behavioural check for src/lib/spamGuard.ts. Run: node scripts/spam-guard.check.mjs
import { checkToken, issueToken, screenSubmission } from "../src/lib/spamGuard.ts";

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
expect("spam without token is dropped silently", screenSubmission({ ...spam, token: undefined }, later).action, "drop");
expect("link spam", screenSubmission({ name: "Best SEO", email: "a@b.co", message: "see http://x.com http://y.com http://z.com", token }, later).reason, "message:links");

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
];
for (const [name, email, message] of people) {
  expect(`person: ${name}`, screenSubmission({ name, email, message, token }, later), { action: "send" });
}
// handbook form has no message field
expect("handbook (no message)", screenSubmission({ name: "Mary Evans", email: "mary@evans.net", token }, later), { action: "send" });

console.log(failures ? `\n${failures} check(s) FAILED` : "\nall checks passed");
process.exit(failures ? 1 : 0);
