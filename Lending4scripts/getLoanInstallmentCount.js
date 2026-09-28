#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanInstallmentCount — read (free, no wallet)
 * getLoanInstallmentCount(loanId: number): number
 *
 * Returns the total number of installments scheduled for this loan (typically
 * ceil(duration / 30 days)).
 *
 * Returns number: Total scheduled installment count.
 *
 * Usage: node Lending4scripts/getLoanInstallmentCount.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanInstallmentCount
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanInstallmentCount.js",
  contract: "saturnloans",
  method: "getLoanInstallmentCount",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanInstallmentCount",
});
