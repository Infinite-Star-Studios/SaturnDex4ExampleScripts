#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getTotalOrdersExecuted — read (free, no wallet)
 * getTotalOrdersExecuted(): number
 *
 * Returns the cumulative number of orders that have been successfully
 * executed.
 *
 * Returns number: Cumulative executed count.
 *
 * Usage: node Contract14scripts/getTotalOrdersExecuted.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getTotalOrdersExecuted
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getTotalOrdersExecuted.js",
  contract: "saturnlimit",
  method: "getTotalOrdersExecuted",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getTotalOrdersExecuted",
});
