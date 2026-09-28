#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanNextInstallmentDue — read (free, no wallet)
 * getLoanNextInstallmentDue(loanId: number): number
 *
 * Returns the Unix timestamp when the next installment payment is due. Updated
 * by makePayment() after each payment. installmentOverdue() returns 1 once the
 * current time is past this timestamp plus the grace period. A late
 * installment payment only costs credit score; the lender can default the loan
 * only after getLoanDueDate() plus the grace period. For a loan shorter than
 * 30 days this timestamp falls after the due date.
 *
 * Returns number: Next installment due timestamp in seconds.
 *
 * Usage: node Lending4scripts/getLoanNextInstallmentDue.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanNextInstallmentDue
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanNextInstallmentDue.js",
  contract: "saturnloans",
  method: "getLoanNextInstallmentDue",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanNextInstallmentDue",
});
