#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getTwapCumulativeB — read (free, no wallet)
 * getTwapCumulativeB(poolId: number): number
 *
 * The same accumulator for the price of token B in token A (reserveA × 10^18 /
 * reserveB, times seconds).
 *
 * Returns number: Price of B in A × 10^18 × seconds, cumulative.
 *
 * Usage: node Contract2scripts/getTwapCumulativeB.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getTwapCumulativeB
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getTwapCumulativeB.js",
  contract: "saturnpools",
  method: "getTwapCumulativeB",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getTwapCumulativeB",
});
