#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPairPoolAtIndex — read (free, no wallet)
 * getPairPoolAtIndex(lookupKey: string): number
 *
 * Returns the poolId stored at a given index within a pair's pool list. The
 * lookupKey is the canonical pair key concatenated with "_INDEX".
 *
 * Returns number: Pool ID at that index (0 if none).
 *
 * Usage: node Contract2scripts/getPairPoolAtIndex.js <lookupKey>
 *   lookupKey (string): Format: "<pairKey>_<index>" — e.g. "KCAL_SOUL_0".
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPairPoolAtIndex
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPairPoolAtIndex.js",
  contract: "saturnpools",
  method: "getPairPoolAtIndex",
  params: [
    { name: "lookupKey", type: "string", desc: "Format: \"<pairKey>_<index>\" — e.g. \"KCAL_SOUL_0\"." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPairPoolAtIndex",
});
