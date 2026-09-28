#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanCreatedAt — read (free, no wallet)
 * getLoanCreatedAt(loanId: number): number
 *
 * Returns the Unix timestamp of loan origination.
 *
 * Returns number: Origination timestamp in seconds.
 *
 * Usage: node Lending4scripts/getLoanCreatedAt.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanCreatedAt
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanCreatedAt.js",
  contract: "saturnloans",
  method: "getLoanCreatedAt",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanCreatedAt",
});
