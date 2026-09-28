#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanTokenDex — read (free, no wallet)
 * getLoanTokenDex(loanId: number): number
 *
 * Returns the DEX version used to price this loan token via the RA anchor
 * pool. 1 = Saturn V3 (SATRN string-keyed pools); 2 = Saturn V4 (saturnpools
 * numeric IDs).
 *
 * Returns number: 1 for V3, 2 for V4.
 *
 * Usage: node Lending4scripts/getLoanTokenDex.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanTokenDex
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanTokenDex.js",
  contract: "saturnloans",
  method: "getLoanTokenDex",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanTokenDex",
});
