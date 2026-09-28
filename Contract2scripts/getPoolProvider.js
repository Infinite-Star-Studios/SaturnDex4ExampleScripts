#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolProvider — read (free, no wallet)
 * getPoolProvider(poolId: number): address
 *
 * Returns the address of the wallet that created (and currently owns) the
 * given pool.
 *
 * Returns address: The pool provider's wallet address.
 *
 * Usage: node Contract2scripts/getPoolProvider.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolProvider
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolProvider.js",
  contract: "saturnpools",
  method: "getPoolProvider",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolProvider",
});
