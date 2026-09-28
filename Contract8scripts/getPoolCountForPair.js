#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getPoolCountForPair — read (free, no wallet)
 * getPoolCountForPair(tokenA: string, tokenB: string): number
 *
 * Shortcut for getCanonicalPairKey → getPairPoolCount. Returns the number of
 * pools (active or removed) that exist for a pair.
 *
 * Returns number: Number of pools for the pair.
 *
 * Usage: node Contract8scripts/getPoolCountForPair.js <tokenA> <tokenB>
 *   tokenA (string): First token symbol.
 *   tokenB (string): Second token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getPoolCountForPair
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getPoolCountForPair.js",
  contract: "saturnrouter",
  method: "getPoolCountForPair",
  params: [
    { name: "tokenA", type: "string", desc: "First token symbol." },
    { name: "tokenB", type: "string", desc: "Second token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getPoolCountForPair",
});
