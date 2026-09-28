#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPoolInfo — read (free, no wallet)
 * getClPoolInfo(poolId: number): string
 *
 * Returns all core pool fields packed into a single underscore-delimited
 * string:
 * "tokenA:X_tokenB:Y_resA:N_resB:N_priceMin:N_priceMax:N_fee:N_active:N".
 * Reserves are in scaled (internal) units. Use this for a single-round-trip
 * refresh of a known pool.
 *
 * Returns string: Packed field string. Parse by splitting on "_" then on ":".
 *
 * Usage: node Contract18scripts/getClPoolInfo.js <poolId>
 *   poolId (number): ID of the CL pool to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPoolInfo
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPoolInfo.js",
  contract: "saturnclpools",
  method: "getClPoolInfo",
  params: [
    { name: "poolId", type: "number", desc: "ID of the CL pool to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPoolInfo",
});
