import { CASES, LEGISLATION, type CaseId, type LegislationId } from "@/content/legal";

/** A case named the same way everywhere: short name in italics, then the citation, linked when verified. */
export function CaseRef({ id, full = false }: { id: CaseId; full?: boolean }) {
  const c = CASES[id];
  const name = full ? c.parties : c.shortName;
  const citation = "url" in c ? (
    <a href={c.url} rel="noopener" target="_blank">
      {c.citation}
    </a>
  ) : (
    c.citation
  );
  return (
    <>
      <em>{name}</em> {citation}
    </>
  );
}

/** An Act or provision. Linked only once a person has opened the legislation.gov.uk link (see legal.ts). */
export function LawRef({ id }: { id: LegislationId }) {
  const law = LEGISLATION[id];
  return "verifiedOn" in law ? (
    <a href={law.url} rel="noopener" target="_blank">
      {law.title}
    </a>
  ) : (
    <>{law.title}</>
  );
}
