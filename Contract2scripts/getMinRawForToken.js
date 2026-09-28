#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getMinRawForToken — read (free, no wallet)
 * getMinRawForToken(symbol: string, minScaledUnits: number): number
 *
 * Given a token and a scaled-unit minimum from SaturnAdmin (e.g.
 * getMinScaledSwapUnits), returns the equivalent raw-unit minimum that a user
 * must provide. The result is floored by getAbsoluteMinRaw so tiny scale
 * factors can't produce zero minimums.
 *
 * Returns number: Minimum raw amount the user must submit.
 *
 * Usage: node Contract2scripts/getMinRawForToken.js <symbol> <minScaledUnits>
 *   symbol (string): Token symbol.
 *   minScaledUnits (number): Scaled-unit threshold.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getMinRawForToken
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getMinRawForToken.js",
  contract: "saturnpools",
  method: "getMinRawForToken",
  params: [
    { name: "symbol", type: "string", desc: "Token symbol." },
    { name: "minScaledUnits", type: "number", desc: "Scaled-unit threshold." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getMinRawForToken",
});
