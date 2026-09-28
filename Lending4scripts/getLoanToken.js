#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanToken — read (free, no wallet)
 * getLoanToken(loanId: number): string
 *
 * Returns the symbol of the token that was lent ("TAZ" for every saturnmarket
 * loan in v1.0).
 *
 * Returns string: Token symbol of the loan currency.
 *
 * Usage: node Lending4scripts/getLoanToken.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanToken
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanToken.js",
  contract: "saturnloans",
  method: "getLoanToken",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanToken",
});
