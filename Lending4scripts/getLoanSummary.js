#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanSummary — read (free, no wallet)
 * getLoanSummary(loanId: number): string
 *
 * Returns a single packed string with all headline loan fields — status,
 * token, principal, total owed, total repaid, interest rate, origin, and
 * installment progress. Formatted as
 * "status:N_token:SYM_principal:N_owed:N_repaid:N_rate:N_origin:N_installments:paid/total".
 * Ideal for single-call loan cards or log entries.
 *
 * Returns string: Packed summary string.
 *
 * Usage: node Lending4scripts/getLoanSummary.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanSummary
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanSummary.js",
  contract: "saturnloans",
  method: "getLoanSummary",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanSummary",
});
