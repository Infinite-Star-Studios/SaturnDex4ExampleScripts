#!/usr/bin/env node
"use strict";

/**
 * saturnloans.installmentOverdue — read (free, no wallet)
 * installmentOverdue(loanId: number): number
 *
 * Returns 1 if the current installment is overdue (past its due timestamp plus
 * the grace period), 0 otherwise. Returns 0 immediately for any non-active
 * loan, so it is safe to call on any loan ID without checking status first.
 * Use this to power overdue-payment warnings in your UI or to decide whether
 * to flag a credit score degradation.
 *
 * Returns number: 1 if current installment is overdue, 0 if on-time or loan is
 * not active.
 *
 * Usage: node Lending4scripts/installmentOverdue.js <loanId>
 *   loanId (number): ID of the loan to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-installmentOverdue
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/installmentOverdue.js",
  contract: "saturnloans",
  method: "installmentOverdue",
  params: [
    { name: "loanId", type: "number", desc: "ID of the loan to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-installmentOverdue",
});
