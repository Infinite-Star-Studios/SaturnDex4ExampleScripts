#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLenderLoanCount — read (free, no wallet)
 * getLenderLoanCount(lender: address): number
 *
 * Returns the total number of loans associated with a lender address,
 * including both active and completed positions.
 *
 * Returns number: Total loan count for this lender.
 *
 * Usage: node Lending4scripts/getLenderLoanCount.js <lender>
 *   lender (address): Lender address to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLenderLoanCount
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLenderLoanCount.js",
  contract: "saturnloans",
  method: "getLenderLoanCount",
  params: [
    { name: "lender", type: "address", desc: "Lender address to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLenderLoanCount",
});
