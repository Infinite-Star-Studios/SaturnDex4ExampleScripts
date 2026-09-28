#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolPairKey — read (free, no wallet)
 * getPoolPairKey(poolId: number): string
 *
 * Returns the canonical pair key for a specific pool. Equivalent to calling
 * getCanonicalPairKey() with that pool's two token symbols.
 *
 * Returns string: Canonical pair key for the pool's token pair.
 *
 * Usage: node Contract2scripts/getPoolPairKey.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolPairKey
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolPairKey.js",
  contract: "saturnpools",
  method: "getPoolPairKey",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolPairKey",
});
