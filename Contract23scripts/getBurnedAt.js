#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getBurnedAt — read (free, no wallet)
 * getBurnedAt(poolId: number): number
 *
 * Unix time the pool's liquidity was burned.
 *
 * Returns number: Unix seconds, 0 when not burned.
 *
 * Usage: node Contract23scripts/getBurnedAt.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getBurnedAt
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getBurnedAt.js",
  contract: "saturnlplock",
  method: "getBurnedAt",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getBurnedAt",
});
