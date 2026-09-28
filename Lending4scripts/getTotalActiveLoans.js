#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getTotalActiveLoans — read (free, no wallet)
 * getTotalActiveLoans(): number
 *
 * Returns the count of currently active (status = 1) loans across the entire
 * protocol.
 *
 * Returns number: Number of active loans.
 *
 * Usage: node Lending4scripts/getTotalActiveLoans.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getTotalActiveLoans
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getTotalActiveLoans.js",
  contract: "saturnloans",
  method: "getTotalActiveLoans",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getTotalActiveLoans",
});
