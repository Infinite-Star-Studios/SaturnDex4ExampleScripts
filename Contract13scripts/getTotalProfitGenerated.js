#!/usr/bin/env node
"use strict";

/**
 * saturnarb.getTotalProfitGenerated — read (free, no wallet)
 * getTotalProfitGenerated(): number
 *
 * Returns the total profit (finalAmount − amountIn, after both pools' swap
 * fees) of every successful executeArbitrage, summed across all tokens in raw
 * units. There is no split: all of it went to the executors.
 *
 * Returns number: Cumulative raw profit.
 *
 * Usage: node Contract13scripts/getTotalProfitGenerated.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnarb-getTotalProfitGenerated
 */

const { read } = require("../common");

read({
  file: "Contract13scripts/getTotalProfitGenerated.js",
  contract: "saturnarb",
  method: "getTotalProfitGenerated",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnarb-getTotalProfitGenerated",
});
