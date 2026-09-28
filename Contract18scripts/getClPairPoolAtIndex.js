#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPairPoolAtIndex — read (free, no wallet)
 * getClPairPoolAtIndex(lookupKey: string): number
 *
 * Returns the poolId stored at a specific index under a pair key. The
 * lookupKey format is "<pairKey>_<index>", e.g. "KCAL_SOUL_0"
 * (saturnpools.getCanonicalPairKey("SOUL", "KCAL") returns "KCAL_SOUL").
 * Iterate from 0 to getClPairPoolCount(pairKey)-1 to enumerate all pools for a
 * pair.
 *
 * Returns number: Pool ID at that index.
 *
 * Usage: node Contract18scripts/getClPairPoolAtIndex.js <lookupKey>
 *   lookupKey (string): Compound key formed as pairKey + "_" + index (e.g.
 *   "KCAL_SOUL_0").
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPairPoolAtIndex
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPairPoolAtIndex.js",
  contract: "saturnclpools",
  method: "getClPairPoolAtIndex",
  params: [
    { name: "lookupKey", type: "string", desc: "Compound key formed as pairKey + \"_\" + index (e.g. \"KCAL_SOUL_0\")." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPairPoolAtIndex",
});
