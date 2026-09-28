#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getTotalOrdersPlaced — read (free, no wallet)
 * getTotalOrdersPlaced(): number
 *
 * Returns the cumulative number of orders ever placed.
 *
 * Returns number: Cumulative placed count.
 *
 * Usage: node Contract14scripts/getTotalOrdersPlaced.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getTotalOrdersPlaced
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getTotalOrdersPlaced.js",
  contract: "saturnlimit",
  method: "getTotalOrdersPlaced",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getTotalOrdersPlaced",
});
