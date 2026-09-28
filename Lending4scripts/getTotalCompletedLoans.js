#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getTotalCompletedLoans — read (free, no wallet)
 * getTotalCompletedLoans(): number
 *
 * Returns the count of loans that have been fully repaid (status = 2).
 *
 * Returns number: Number of fully-repaid loans.
 *
 * Usage: node Lending4scripts/getTotalCompletedLoans.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getTotalCompletedLoans
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getTotalCompletedLoans.js",
  contract: "saturnloans",
  method: "getTotalCompletedLoans",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getTotalCompletedLoans",
});
