#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getPoolIdForPairAtIndex — read (free, no wallet)
 * getPoolIdForPairAtIndex(tokenA: string, tokenB: string, index: number): number
 *
 * Returns the poolId at a given index in the pair's pool list. Use together
 * with getPoolCountForPair() to iterate every pool for a pair without building
 * a canonical key yourself.
 *
 * Returns number: Pool ID at that index (0 if out of range).
 *
 * Usage: node Contract8scripts/getPoolIdForPairAtIndex.js <tokenA> <tokenB> <index>
 *   tokenA (string): First token symbol.
 *   tokenB (string): Second token symbol.
 *   index (number): Zero-based index.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getPoolIdForPairAtIndex
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getPoolIdForPairAtIndex.js",
  contract: "saturnrouter",
  method: "getPoolIdForPairAtIndex",
  params: [
    { name: "tokenA", type: "string", desc: "First token symbol." },
    { name: "tokenB", type: "string", desc: "Second token symbol." },
    { name: "index", type: "number", desc: "Zero-based index." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getPoolIdForPairAtIndex",
});
