#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getActiveOrderCount — read (free, no wallet)
 * getActiveOrderCount(): number
 *
 * Number of orders currently in the active list — the upper bound of the scan
 * an executor bot has to do.
 *
 * Returns number: Count of active orders.
 *
 * Usage: node Contract14scripts/getActiveOrderCount.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getActiveOrderCount
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getActiveOrderCount.js",
  contract: "saturnlimit",
  method: "getActiveOrderCount",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getActiveOrderCount",
});
