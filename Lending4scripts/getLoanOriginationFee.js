#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanOriginationFee — read (free, no wallet)
 * getLoanOriginationFee(loanId: number): number
 *
 * Returns the one-time origination fee charged at loan creation in scaled
 * units.
 *
 * Returns number: Origination fee in scaled units (typically 1% of principal).
 *
 * Usage: node Lending4scripts/getLoanOriginationFee.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanOriginationFee
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanOriginationFee.js",
  contract: "saturnloans",
  method: "getLoanOriginationFee",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanOriginationFee",
});
