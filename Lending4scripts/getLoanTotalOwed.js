#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanTotalOwed — read (free, no wallet)
 * getLoanTotalOwed(loanId: number): number
 *
 * Returns the total amount owed (principal + interest) fixed at origination in
 * scaled units.
 *
 * Returns number: Total owed in scaled units.
 *
 * Usage: node Lending4scripts/getLoanTotalOwed.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanTotalOwed
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanTotalOwed.js",
  contract: "saturnloans",
  method: "getLoanTotalOwed",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanTotalOwed",
});
