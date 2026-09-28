#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getTwapLastUpdate — read (free, no wallet)
 * getTwapLastUpdate(poolId: number): number
 *
 * Unix time the pool's accumulators were last written (its last reserve write
 * while tracked, or when tracking started).
 *
 * Returns number: Unix seconds.
 *
 * Usage: node Contract2scripts/getTwapLastUpdate.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getTwapLastUpdate
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getTwapLastUpdate.js",
  contract: "saturnpools",
  method: "getTwapLastUpdate",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getTwapLastUpdate",
});
