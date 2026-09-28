#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanOrigin — read (free, no wallet)
 * getLoanOrigin(loanId: number): number
 *
 * Returns 1 if the loan was originated by saturnauto (algorithmic), 2 if
 * originated by saturnmarket (P2P).
 *
 * Returns number: 1 = auto, 2 = P2P market.
 *
 * Usage: node Lending4scripts/getLoanOrigin.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanOrigin
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanOrigin.js",
  contract: "saturnloans",
  method: "getLoanOrigin",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanOrigin",
});
