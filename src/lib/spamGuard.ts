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

/** Random-letter "names" such as "vSKsmqsBjBHkOhGJzeh": almost no vowels, or many lower→UPPER switches inside a word. */
export function looksRandom(name: string): boolean {
  const letters = (name.match(/\p{L}/gu) ?? []).length;
  if (letters === 0) return true; // "9272704595"
  if (letters < 8) return false; // too short to judge ("Ng", "Wyn")
  const vowels = (name.match(VOWEL) ?? []).length;
  if (vowels / letters < 0.15) return true; // sample: 2 / 19
  let switches = 0;
  for (const word of name.split(/[\s\-'’.]+/)) {
    for (let i = 1; i < word.length; i++) {
      if (/\p{Ll}/u.test(word[i - 1]) && /\p{Lu}/u.test(word[i])) switches++;
    }
  }
  return switches >= 3; // McDonald = 1, DeAndre = 1, sample = 5
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
  f: { name: string; email: string; message?: string; token?: string },
  now = Date.now(),
): Screen {
  const t = checkToken(f.token, now);
  if (t === "missing" || t === "invalid") return { action: "drop", reason: `token:${t}` };
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
  if (linkCount(`${f.name} ${f.message ?? ""}`) >= 3) reasons.push("message:links");

  return reasons.length
    ? { action: "refuse", reason: reasons.join(","), message: REFUSE_MESSAGE }
    : { action: "send" };
}

/** One log line per blocked submission, reason codes only. */
export function logBlocked(form: string, s: Exclude<Screen, { action: "send" }>): void {
  console.warn(`[spam-guard] ${s.action} ${form}: ${s.reason}`);
}
