/**
 * The qualifying answer: does this person already have a mast on land or property they own?
 * Pure helpers shared by the server actions, so the answer reads the same in the email and lead log.
 * A missing answer stays "unknown" (for example a tab left open across a deploy) and is never refused.
 */
export type HasMast = "yes" | "no" | "unknown";

export function normaliseHasMast(value: string | undefined): HasMast {
  return value === "yes" || value === "no" ? value : "unknown";
}

export function mastSubjectPrefix(value: string | undefined): string {
  const answer = normaliseHasMast(value);
  if (answer === "yes") return "[Has mast] ";
  return answer === "no" ? "[No mast] " : "";
}

/** Lead log detail column: "hasMast: yes; <detail>". Column order stays fixed. */
export function mastDetail(value: string | undefined, detail: string | undefined): string {
  return [`hasMast: ${normaliseHasMast(value)}`, detail].filter(Boolean).join("; ");
}

export function mastEmailRow(value: string | undefined): string {
  const labels: Record<HasMast, string> = { yes: "Yes", no: "No", unknown: "Not answered" };
  return `<tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; font-size: 14px;">Existing mast</td>
                <td style="padding: 8px 0; color: #1a1a2e; font-weight: bold;">${labels[normaliseHasMast(value)]}</td>
              </tr>`;
}
