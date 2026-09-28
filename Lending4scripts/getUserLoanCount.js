#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getUserLoanCount — read (free, no wallet)
 * getUserLoanCount(user: address): number
 *
 * Returns the total number of loans ever opened by this borrower (including
 * closed and defaulted). Use as the upper bound when iterating
 * getUserLoanAtIndex().
 *
 * Returns number: Total loan count for this borrower.
 *
 * Usage: node Lending4scripts/getUserLoanCount.js <user>
 *   user (address): Borrower address to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getUserLoanCount
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getUserLoanCount.js",
  contract: "saturnloans",
  method: "getUserLoanCount",
  params: [
    { name: "user", type: "address", desc: "Borrower address to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getUserLoanCount",
});
