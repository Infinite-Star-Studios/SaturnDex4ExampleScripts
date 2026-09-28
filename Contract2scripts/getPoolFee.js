#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolFee — read (free, no wallet)
 * getPoolFee(poolId: number): number
 *
 * Returns the pool's per-swap fee rate in basis points out of 10,000. 300 =
 * 3%. Range: 30–3000 (0.3%–30%).
 *
 * Returns number: Fee in basis points per 10k.
 *
 * Usage: node Contract2scripts/getPoolFee.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolFee
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolFee.js",
  contract: "saturnpools",
  method: "getPoolFee",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolFee",
});
