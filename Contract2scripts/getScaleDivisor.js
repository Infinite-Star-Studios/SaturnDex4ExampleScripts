#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getScaleDivisor — read (free, no wallet)
 * getScaleDivisor(tokenSymbol: string): number
 *
 * Returns the cached divisor that scaleDown() applies to a token whose
 * decimals exceed the protocol target (8). It is 1 for tokens at or below the
 * target and 0 when the token's scale has never been computed (cold cache).
 * With a cold cache scaleUp() and scaleDown() return the amount unchanged and
 * getMinRawForToken() returns saturnadmin.getAbsoluteMinRaw(), while
 * saturnrouter.getBestPoolForSwapV2() and the router's getMinRawFor*() fail as
 * reads because they try to write the cache. A factor cached with divisor 0
 * (before the divisor existed) is treated as divisor 1.
 *
 * Returns number: Power of ten (1, 10, 100 …), or 0 when the cache is cold.
 *
 * Usage: node Contract2scripts/getScaleDivisor.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getScaleDivisor
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getScaleDivisor.js",
  contract: "saturnpools",
  method: "getScaleDivisor",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getScaleDivisor",
});
