#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getTotalMatchedLoans — read (free, no wallet)
 * getTotalMatchedLoans(): number
 *
 * Cumulative count of loan requests that have been accepted (i.e. loans
 * opened) through the marketplace since deployment.
 *
 * Returns number: Total number of matched / accepted loans.
 *
 * Usage: node Lending6scripts/getTotalMatchedLoans.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getTotalMatchedLoans
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getTotalMatchedLoans.js",
  contract: "saturnmarket",
  method: "getTotalMatchedLoans",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getTotalMatchedLoans",
});
