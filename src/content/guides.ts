/**
 * LOCKED CONTENT. The H1 and opening answer of the two money guides are frozen: they change only
 * with the owner's sign-off, by a person, in a commit that also updates tests/guide-freeze.test.ts.
 * No automated job or agent may rewrite them (see AGENTS.md and CLAUDE.md).
 *
 * The figures inside the answers come from RENT_FIGURES, so both guides always quote the same numbers.
 */
import { rentFigure as figure } from "./legal.ts";

export const RENT_GUIDE = {
  h1: "Phone mast rent: what operators pay landowners, and why",
  answer:
    `Published Tribunal decisions value a standard rural phone mast at ${figure("vacheFarm")} a year and city rooftop sites at ` +
    `${figure("marksSpencer")} to ${figure("londonQuadrant")} a year. What your site should pay depends on its type and on the ` +
    "agreement you hold, and fees, compensation and electricity are paid on top of the rent. An operator's offer is an opening position, not the answer.",
} as const;

export const LEASE_GUIDE = {
  h1: "Phone mast leases explained for landowners",
  answer:
    "A phone mast lease gives an operator exclusive possession of part of your land or building for a period, in return for rent. " +
    "It is a commercial lease with one big difference: the operator also holds rights under the Electronic Communications Code " +
    "that override many of its clauses, so it does not simply end when its term runs out.",
} as const;
