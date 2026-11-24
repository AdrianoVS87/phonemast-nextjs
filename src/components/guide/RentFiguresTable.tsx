import { CASES, RENT_FIGURES, formatPounds } from "@/content/legal";
import { CaseRef } from "./Sources";

/** The published figures from src/content/legal.ts, the same table on both guides. */
export default function RentFiguresTable({ caption }: { caption: string }) {
  return (
    <div className="table-scroll">
      <table className="figures-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Site type</th>
            <th scope="col">A year</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
          {RENT_FIGURES.map((f) => (
            <tr key={f.caseId}>
              <td>{f.siteType}</td>
              <td className="amount">{formatPounds(f.annual)}</td>
              <td>
                <CaseRef id={f.caseId} />, {CASES[f.caseId].court}, {CASES[f.caseId].year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
