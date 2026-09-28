#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getScaleFactor — read (free, no wallet)
 * getScaleFactor(tokenSymbol: string): number
 *
 * Returns the stored scale factor for a token: 10^(8 − decimals) for a token
 * with 8 decimals or fewer, 1 for a token with more (the division is in
 * getScaleDivisor). scaled = raw × factor / divisor. Live values: SOUL factor
 * 1 / divisor 1, RA and TAZ 1 / 10, KCAL 1 / 100. 0 means the scale was never
 * computed.
 *
 * Returns number: Scale multiplier (1 for tokens above 8 decimals); 0 when
 * never computed.
 *
 * Usage: node Contract2scripts/getScaleFactor.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getScaleFactor
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getScaleFactor.js",
  contract: "saturnpools",
  method: "getScaleFactor",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getScaleFactor",
});
