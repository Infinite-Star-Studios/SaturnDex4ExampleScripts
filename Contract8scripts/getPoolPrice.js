#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getPoolPrice — read (free, no wallet)
 * getPoolPrice(poolId: number, tokenIn: string): number
 *
 * Returns the current spot price of tokenIn expressed in the other token of
 * the pool. The result is scaled by 1e8 so you can divide by 100_000_000 on
 * the client to get a floating-point ratio.
 *
 * Returns number: Price × 1e8 (0 if the relevant reserve is empty).
 *
 * Usage: node Contract8scripts/getPoolPrice.js <poolId> <tokenIn>
 *   poolId (number): Pool to quote.
 *   tokenIn (string): Token you want the price of.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getPoolPrice
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getPoolPrice.js",
  contract: "saturnrouter",
  method: "getPoolPrice",
  params: [
    { name: "poolId", type: "number", desc: "Pool to quote." },
    { name: "tokenIn", type: "string", desc: "Token you want the price of." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getPoolPrice",
});
