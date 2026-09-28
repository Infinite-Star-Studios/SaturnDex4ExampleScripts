#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getCountOfTokensOnList — read (free, no wallet)
 * getCountOfTokensOnList(): number
 *
 * Length of the token list behind getTokensInDEXList(). A symbol is appended
 * whenever a pool is created while the DEX holds none of that token (its
 * global reserve is 0), so a token whose pools were all removed and later
 * re-created is listed again: this counts entries, not unique tokens (mainnet
 * lists ANGEL three times).
 *
 * Returns number: Token count.
 *
 * Usage: node Contract2scripts/getCountOfTokensOnList.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getCountOfTokensOnList
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getCountOfTokensOnList.js",
  contract: "saturnpools",
  method: "getCountOfTokensOnList",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getCountOfTokensOnList",
});
