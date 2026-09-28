#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getClPairPoolCount — read (free, no wallet)
 * getClPairPoolCount(pairKey: string): number
 *
 * Returns the number of CL pools that exist for a given canonical pair key (as
 * produced by saturnpools.getCanonicalPairKey). Use this to paginate pair
 * pools before fetching them with getClPairPoolAtIndex.
 *
 * Returns number: Number of CL pools for the pair.
 *
 * Usage: node Contract18scripts/getClPairPoolCount.js <pairKey>
 *   pairKey (string): Canonical pair key, e.g. the value returned by
 *   saturnpools.getCanonicalPairKey("SOUL", "KCAL").
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getClPairPoolCount
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getClPairPoolCount.js",
  contract: "saturnclpools",
  method: "getClPairPoolCount",
  params: [
    { name: "pairKey", type: "string", desc: "Canonical pair key, e.g. the value returned by saturnpools.getCanonicalPairKey(\"SOUL\", \"KCAL\")." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getClPairPoolCount",
});
