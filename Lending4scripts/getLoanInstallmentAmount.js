#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanInstallmentAmount — read (free, no wallet)
 * getLoanInstallmentAmount(loanId: number): number
 *
 * Returns the equal per-installment amount in scaled units. Multiply by
 * installmentCount to verify it equals totalOwed (modulo rounding).
 *
 * Returns number: Per-installment amount in scaled units.
 *
 * Usage: node Lending4scripts/getLoanInstallmentAmount.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanInstallmentAmount
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanInstallmentAmount.js",
  contract: "saturnloans",
  method: "getLoanInstallmentAmount",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanInstallmentAmount",
});
