#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanDuration — read (free, no wallet)
 * getLoanDuration(loanId: number): number
 *
 * Returns the total loan term in seconds (e.g., 2,592,000 = 30 days).
 *
 * Returns number: Loan duration in seconds.
 *
 * Usage: node Lending4scripts/getLoanDuration.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanDuration
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanDuration.js",
  contract: "saturnloans",
  method: "getLoanDuration",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanDuration",
});
