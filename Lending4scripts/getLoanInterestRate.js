#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanInterestRate — read (free, no wallet)
 * getLoanInterestRate(loanId: number): number
 *
 * Returns the annual interest rate for this loan, expressed per 10,000 (e.g.,
 * 500 = 5%).
 *
 * Returns number: Annual rate per 10,000.
 *
 * Usage: node Lending4scripts/getLoanInterestRate.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanInterestRate
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanInterestRate.js",
  contract: "saturnloans",
  method: "getLoanInterestRate",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanInterestRate",
});
