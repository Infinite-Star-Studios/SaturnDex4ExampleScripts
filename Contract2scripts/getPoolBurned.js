#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolBurned — read (free, no wallet)
 * getPoolBurned(poolId: number): number
 *
 * 1 when the pool's liquidity was burned through saturnlplock.burnPool:
 * removePool refuses it forever ("Pool liquidity is burned - it can never be
 * withdrawn"), the provider can only lower its fee, and the SATURN certificate
 * becomes the pool's fee key (saturnfees pays the provider fees to its holder,
 * and it cannot be destroyed). Swaps continue. 0 otherwise. A burn cannot be
 * undone.
 *
 * Returns number: 1 = burned, 0 = not burned.
 *
 * Usage: node Contract2scripts/getPoolBurned.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolBurned
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolBurned.js",
  contract: "saturnpools",
  method: "getPoolBurned",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolBurned",
});
