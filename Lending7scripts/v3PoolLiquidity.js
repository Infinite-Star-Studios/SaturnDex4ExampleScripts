#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3PoolLiquidity — read (free, no wallet)
 * v3PoolLiquidity(pairKey: string): number
 *
 * Returns the total liquidity units for a v3 pool identified by its ordered
 * pair key. A non-zero result confirms the pool exists and has liquidity.
 *
 * Returns number: Total liquidity units in the v3 pool; 0 if pool does not
 * exist.
 *
 * Usage: node Lending7scripts/v3PoolLiquidity.js <pairKey>
 *   pairKey (string): Ordered pair key, e.g. "MKST_RA".
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3PoolLiquidity
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3PoolLiquidity.js",
  contract: "saturndexadapt",
  method: "v3PoolLiquidity",
  params: [
    { name: "pairKey", type: "string", desc: "Ordered pair key, e.g. \"MKST_RA\"." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3PoolLiquidity",
});
