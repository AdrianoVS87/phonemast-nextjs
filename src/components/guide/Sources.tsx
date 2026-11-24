import { CASES, LEGISLATION, type CaseId, type LegislationId, type LegislationRecord } from "@/content/legal";

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
  // Widened to the record type so the unverified branch stays valid when every current entry is verified.
  const law: LegislationRecord = LEGISLATION[id];
  return law.verifiedOn ? (
    <a href={law.url} rel="noopener" target="_blank">
      {law.title}
    </a>
  ) : (
    <>{law.title}</>
  );
}
