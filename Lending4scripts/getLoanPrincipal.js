#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanPrincipal — read (free, no wallet)
 * getLoanPrincipal(loanId: number): number
 *
 * Returns the original scaled principal amount at origination.
 *
 * Returns number: Original principal in scaled (8-decimal) units.
 *
 * Usage: node Lending4scripts/getLoanPrincipal.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanPrincipal
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanPrincipal.js",
  contract: "saturnloans",
  method: "getLoanPrincipal",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanPrincipal",
});
