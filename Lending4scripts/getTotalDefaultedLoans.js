#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getTotalDefaultedLoans — read (free, no wallet)
 * getTotalDefaultedLoans(): number
 *
 * Returns the count of loans that ended in default or liquidation (status 3 or
 * 4). Note: triggerDefault() moves atomically to 4, so this counter reflects
 * final liquidations as well.
 *
 * Returns number: Number of defaulted/liquidated loans.
 *
 * Usage: node Lending4scripts/getTotalDefaultedLoans.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getTotalDefaultedLoans
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getTotalDefaultedLoans.js",
  contract: "saturnloans",
  method: "getTotalDefaultedLoans",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getTotalDefaultedLoans",
});
