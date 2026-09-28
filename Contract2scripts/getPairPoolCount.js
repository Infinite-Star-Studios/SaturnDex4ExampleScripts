#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPairPoolCount — read (free, no wallet)
 * getPairPoolCount(pairKey: string): number
 *
 * Returns how many pools exist for a given canonical pair key. Use it to
 * iterate pools for a pair with getPairPoolAtIndex().
 *
 * Returns number: Number of pools for the pair.
 *
 * Usage: node Contract2scripts/getPairPoolCount.js <pairKey>
 *   pairKey (string): Canonical pair key from getCanonicalPairKey().
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPairPoolCount
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPairPoolCount.js",
  contract: "saturnpools",
  method: "getPairPoolCount",
  params: [
    { name: "pairKey", type: "string", desc: "Canonical pair key from getCanonicalPairKey()." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPairPoolCount",
});
