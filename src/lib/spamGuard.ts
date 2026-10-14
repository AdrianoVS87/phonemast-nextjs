import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Server-side spam guard for the enquiry forms (contact, lease check, rent estimate, handbook).
 *
 * Why: from late September 2026 bots posted the contact form several times a day with
 * random-letter names ("vSKsmqsBjBHkOhGJzeh"), Gmail dot-trick addresses
 * ("n.g.u.y.e.n.n.a.t@gmail.com") and digit-only messages. They leave the hidden honeypot
 * empty, so the honeypot alone no longer stops them, and every one of them also triggered an
 * acknowledgement email to a throwaway address.
 *
 * Two independent checks:
 *  1. Form token: issued by a server action when the form mounts (HMAC of the issue time).
 *     It proves the form was rendered by this site and that a few seconds passed before the
 *     submit. A missing or forged token is dropped silently (a bot calling the action directly);
 *     a token that is merely too young or too old gets a message asking to press Send again,
 *     so a person with browser autofill is never lost.
 *  2. Content heuristics: the patterns above. They refuse with a message that tells a real person
 *     how to reach us, so a false positive costs a phone call, never a lost enquiry.
 *
 * No personal data is logged: only the reason codes.
 */

const MIN_FILL_MS = 3_000;
const MAX_AGE_MS = 24 * 60 * 60 * 1000;

// FORM_TOKEN_SECRET is optional: the Resend key is already present on every deployment and is
// only used here as HMAC key material (never sent anywhere).
function secret(): string {
  return process.env.FORM_TOKEN_SECRET ?? process.env.RESEND_API_KEY ?? "form-token-dev-secret";
}

function sign(ts: string): string {
  return createHmac("sha256", secret()).update(ts).digest("hex");
}

export function issueToken(now = Date.now()): string {
  const ts = String(now);
  return `${ts}.${sign(ts)}`;
}

export type TokenVerdict = "ok" | "missing" | "invalid" | "too-fast" | "expired";

export function checkToken(token: string | undefined, now = Date.now()): TokenVerdict {
  if (!token) return "missing";
  const dot = token.indexOf(".");
  if (dot < 1) return "invalid";
  const ts = token.slice(0, dot);
  const mac = token.slice(dot + 1);
  if (!/^\d{10,16}$/.test(ts) || !/^[0-9a-f]{64}$/.test(mac)) return "invalid";
  const expected = sign(ts);
  if (!timingSafeEqual(Buffer.from(mac, "hex"), Buffer.from(expected, "hex"))) return "invalid";
  const age = now - Number(ts);
  if (age < MIN_FILL_MS) return "too-fast";
  if (age > MAX_AGE_MS) return "expired";
  return "ok";
}

// ---- content heuristics ----------------------------------------------------

const VOWEL = /[aeiouyàáâãäåæèéêëìíîïòóôõöøùúûüýÿ]/giu;

/**
 * A single "word" that is random keyboard noise: "vSKsmqsBjBHkOhGJzeh", "ndilwaCWONNNMPGERLpAML",
 * "BZTpfGuaRDXASRxjjfnTdJcx". Judged per word, so titles, initials and company suffixes in real
 * names ("Mrs Brown", "Mr J Smith", "MKM Farms Ltd") never count against them.
 */
export function isGibberishWord(word: string): boolean {
  const w = word.replace(/[^\p{L}]/gu, "");
  if (w.length < 10) return false; // "McDonald", "Schwartz", "DeAndre", "MacDonaldson" are fine
  const lower = (w.match(/\p{Ll}/gu) ?? []).length;
  const upper = w.length - lower;
  if (lower === 0 || upper === 0) {
    // one case only: only a word with (almost) no vowels is suspicious ("BCDFGHJKLM")
    return (w.match(VOWEL) ?? []).length / w.length < 0.1;
  }
  let transitions = 0;
  for (let i = 1; i < w.length; i++) {
    const a = /\p{Lu}/u.test(w[i - 1]), b = /\p{Lu}/u.test(w[i]);
    if (a !== b) transitions++;
  }
  const upperRun = Math.max(0, ...(w.match(/\p{Lu}+/gu) ?? []).map((r) => r.length));
  // mixed case inside one long word: real names switch case once or twice (Mc|Do|nald)
  return transitions >= 4 || (upperRun >= 5 && lower >= 2);
}

/** True when any word of the text is gibberish. */
export function hasGibberish(text: string): boolean {
  return text.split(/[\s,;:/()\-'’.&]+/).some(isGibberishWord);
}

/** Random-letter "names": a gibberish word, or no letters at all ("9272704595"). */
export function looksRandom(name: string): boolean {
  if (!/\p{L}/u.test(name)) return true;
  return hasGibberish(name);
}

/** Gmail dot-trick addresses ("ng.u.y.enn.a.t.han.51.4@gmail.com"): four or more dots before the @. */
export function isDotTrickEmail(email: string): boolean {
  const local = email.split("@")[0] ?? "";
  return (local.match(/\./g) ?? []).length >= 4;
}

/** A message with no letters at all ("9272704595"). */
export function isLetterless(text: string): boolean {
  return text.trim().length > 0 && !/\p{L}/u.test(text);
}

export function linkCount(text: string): number {
  return (text.match(/https?:\/\/|www\./gi) ?? []).length;
}

export type Screen =
  | { action: "send" }
  | { action: "drop"; reason: string }
  | { action: "refuse"; reason: string; message: string };

const REFUSE_MESSAGE =
  "We could not send this message automatically. Please call us on 01691 791543 or email info@phonemastadvice.co.uk and we will come straight back to you.";

export function screenSubmission(
  f: { name: string; email: string; message?: string; token?: string; address?: string; currentRent?: string },
  now = Date.now(),
): Screen {
  const t = checkToken(f.token, now);
  // A forged token can only come from a bot: drop it silently. A missing token is usually a bot
  // too, but it is also what a real visitor sends if the token request failed on page load, so
  // they get a message instead of a silent "sent" that went nowhere.
  if (t === "invalid") return { action: "drop", reason: "token:invalid" };
  if (t === "missing") {
    return {
      action: "refuse",
      reason: "token:missing",
      message: "Please refresh the page and send your message again, or call us on 01691 791543.",
    };
  }
  if (t === "too-fast") {
    return { action: "refuse", reason: "token:too-fast", message: "That was quick! Please press Send again." };
  }
  if (t === "expired") {
    return {
      action: "refuse",
      reason: "token:expired",
      message: "This page has been open for a while. Please refresh it and send your message again.",
    };
  }

  const reasons: string[] = [];
  if (looksRandom(f.name)) reasons.push("name:random");
  if (/https?:\/\/|www\./i.test(f.name)) reasons.push("name:url");
  if (isDotTrickEmail(f.email)) reasons.push("email:dots");
  if (f.message !== undefined && isLetterless(f.message)) reasons.push("message:no-letters");
  if (f.message && hasGibberish(f.message)) reasons.push("message:gibberish");
  // 10 Oct 2026 sample: address "9642060523", current rent "BZTpfGuaRDXASRxjjfnTdJcx"
  if (f.address && isLetterless(f.address)) reasons.push("address:no-letters");
  if (f.address && hasGibberish(f.address)) reasons.push("address:gibberish");
  if (f.currentRent && hasGibberish(f.currentRent)) reasons.push("rent:gibberish");
  if (linkCount(`${f.name} ${f.message ?? ""}`) >= 3) reasons.push("message:links");

  return reasons.length
    ? { action: "refuse", reason: reasons.join(","), message: REFUSE_MESSAGE }
    : { action: "send" };
}

/** One log line per blocked submission, reason codes only. */
export function logBlocked(form: string, s: Exclude<Screen, { action: "send" }>): void {
  console.warn(`[spam-guard] ${s.action} ${form}: ${s.reason}`);
}
