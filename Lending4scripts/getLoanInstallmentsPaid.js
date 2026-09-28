#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanInstallmentsPaid — read (free, no wallet)
 * getLoanInstallmentsPaid(loanId: number): number
 *
 * Returns how many full installments have been satisfied so far. Derived from
 * totalRepaid divided by installmentAmount — not a separate counter — so it
 * reflects partial overpayments accurately.
 *
 * Returns number: Number of installments fully paid to date.
 *
 * Usage: node Lending4scripts/getLoanInstallmentsPaid.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanInstallmentsPaid
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanInstallmentsPaid.js",
  contract: "saturnloans",
  method: "getLoanInstallmentsPaid",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanInstallmentsPaid",
});
