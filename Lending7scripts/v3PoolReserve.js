#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3PoolReserve — read (free, no wallet)
 * v3PoolReserve(pairKey: string, tokenSymbol: string): number
 *
 * Returns the reserve of a specific token inside a v3 pool. Both pairKey and
 * tokenSymbol must be consistent — tokenSymbol must be one of the two tokens
 * in the pair.
 *
 * Returns number: Token reserve in the v3 pool (scaled).
 *
 * Usage: node Lending7scripts/v3PoolReserve.js <pairKey> <tokenSymbol>
 *   pairKey (string): Ordered pair key, e.g. "MKST_RA".
 *   tokenSymbol (string): The token whose reserve to read; must be in the
 *   pair.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3PoolReserve
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3PoolReserve.js",
  contract: "saturndexadapt",
  method: "v3PoolReserve",
  params: [
    { name: "pairKey", type: "string", desc: "Ordered pair key, e.g. \"MKST_RA\"." },
    { name: "tokenSymbol", type: "string", desc: "The token whose reserve to read; must be in the pair." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3PoolReserve",
});
