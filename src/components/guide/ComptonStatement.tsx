import { COMPTON_STATEMENT } from "@/content/company";
import { CASES } from "@/content/legal";

/** Matt's statement about the Compton Beauchamp case, with the citation linked to the judgment. */
export default function ComptonStatement() {
  const c = CASES.comptonBeauchamp;
  return (
    <>
      {COMPTON_STATEMENT.lead} <em>{COMPTON_STATEMENT.caseName}</em>{" "}
      <a href={c.url} rel="noopener" target="_blank">
        {COMPTON_STATEMENT.citation}
      </a>
      , {COMPTON_STATEMENT.holding}
    </>
  );
}
