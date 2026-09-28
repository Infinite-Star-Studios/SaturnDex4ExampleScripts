#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanBorrower — read (free, no wallet)
 * getLoanBorrower(loanId: number): address
 *
 * Returns the borrower address for the given loan ID.
 *
 * Returns address: Borrower's wallet address.
 *
 * Usage: node Lending4scripts/getLoanBorrower.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanBorrower
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanBorrower.js",
  contract: "saturnloans",
  method: "getLoanBorrower",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanBorrower",
});
