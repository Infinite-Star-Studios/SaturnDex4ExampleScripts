#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanRemaining — read (free, no wallet)
 * getLoanRemaining(loanId: number): number
 *
 * Convenience view — returns totalOwed minus totalRepaid, floored at 0. Use
 * this for the "amount still owed" figure rather than computing it
 * client-side.
 *
 * Returns number: Remaining balance in scaled units; 0 if fully repaid.
 *
 * Usage: node Lending4scripts/getLoanRemaining.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanRemaining
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanRemaining.js",
  contract: "saturnloans",
  method: "getLoanRemaining",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanRemaining",
});
