#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getBurnedBy — read (free, no wallet)
 * getBurnedBy(poolId: number): address
 *
 * The wallet that burned the pool's liquidity.
 *
 * Returns address: Address that called burnPool.
 *
 * Usage: node Contract23scripts/getBurnedBy.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getBurnedBy
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getBurnedBy.js",
  contract: "saturnlplock",
  method: "getBurnedBy",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getBurnedBy",
});
