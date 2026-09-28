#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getTokensInDEXList — read (free, no wallet)
 * getTokensInDEXList(): string*
 *
 * Generator-style method that yields every token symbol registered in the DEX.
 * Phantasma exposes this as an enumerable script call.
 *
 * Returns string*: Iterable of token symbols.
 *
 * Usage: node Contract2scripts/getTokensInDEXList.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getTokensInDEXList
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getTokensInDEXList.js",
  contract: "saturnpools",
  method: "getTokensInDEXList",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getTokensInDEXList",
});
