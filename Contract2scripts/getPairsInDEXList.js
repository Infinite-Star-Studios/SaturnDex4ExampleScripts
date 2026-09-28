#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPairsInDEXList — read (free, no wallet)
 * getPairsInDEXList(): string*
 *
 * Generator yielding every canonical pair key currently indexed.
 *
 * Returns string*: Iterable of canonical pair keys.
 *
 * Usage: node Contract2scripts/getPairsInDEXList.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPairsInDEXList
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPairsInDEXList.js",
  contract: "saturnpools",
  method: "getPairsInDEXList",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPairsInDEXList",
});
