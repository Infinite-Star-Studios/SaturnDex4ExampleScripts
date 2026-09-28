#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolProvider — read (free, no wallet)
 * getClPoolProvider(poolId: number): address
 *
 * Returns the address of the wallet that created and owns the specified CL
 * pool.
 *
 * Returns address: Pool provider address.
 *
 * Usage: node Contract18scripts/getClPoolProvider.js <poolId>
 *   poolId (number): CL pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolProvider
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolProvider.js",
  contract: "saturnclpools",
  method: "getClPoolProvider",
  params: [
    { name: "poolId", type: "number", desc: "CL pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolProvider",
});
