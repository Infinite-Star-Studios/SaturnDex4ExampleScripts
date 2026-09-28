#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getTwapSince — read (free, no wallet)
 * getTwapSince(poolId: number): number
 *
 * Unix time the current unbroken price series started: when tracking started,
 * or the last reserve write that found a side empty (a hole). While a side is
 * empty it reports the current time. 0 while the pool is not tracked. If it is
 * later than your first reading, discard that reading: the average would span
 * a stop or a hole.
 *
 * Returns number: Unix seconds, or 0 when untracked.
 *
 * Usage: node Contract2scripts/getTwapSince.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getTwapSince
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getTwapSince.js",
  contract: "saturnpools",
  method: "getTwapSince",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getTwapSince",
});
