#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getScaleFactor — read (free, no wallet)
 * getScaleFactor(tokenSymbol: string): number
 *
 * Re-export of SaturnPools.getScaleFactor. scaled = raw × factor / divisor:
 * the factor is 10^(8 − decimals) for tokens with 8 decimals or fewer and 1
 * above 8, where saturnpools.getScaleDivisor() holds 10^(decimals − 8) (KCAL:
 * factor 1, divisor 100). This router has no divisor passthrough, so read
 * saturnpools.getScaleDivisor or use saturnpools.scaleUp / scaleDown.
 *
 * Returns number: Scale factor (0 = never seen).
 *
 * Usage: node Contract8scripts/getScaleFactor.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getScaleFactor
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getScaleFactor.js",
  contract: "saturnrouter",
  method: "getScaleFactor",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getScaleFactor",
});
