#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanTotalRepaid — read (free, no wallet)
 * getLoanTotalRepaid(loanId: number): number
 *
 * Returns the cumulative amount already repaid in scaled units.
 *
 * Returns number: Total repaid so far in scaled units.
 *
 * Usage: node Lending4scripts/getLoanTotalRepaid.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanTotalRepaid
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanTotalRepaid.js",
  contract: "saturnloans",
  method: "getLoanTotalRepaid",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanTotalRepaid",
});
