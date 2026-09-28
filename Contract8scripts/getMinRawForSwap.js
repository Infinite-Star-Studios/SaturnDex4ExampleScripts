#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getMinRawForSwap — read (free, no wallet)
 * getMinRawForSwap(tokenSymbol: string): number
 *
 * Returns the minimum raw amount a user must send as the input of a swap.
 * Enforces both the scaled-units minimum and the absolute floor.
 *
 * Returns number: Minimum raw amount per swap.
 *
 * Usage: node Contract8scripts/getMinRawForSwap.js <tokenSymbol>
 *   tokenSymbol (string): Input token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getMinRawForSwap
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getMinRawForSwap.js",
  contract: "saturnrouter",
  method: "getMinRawForSwap",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Input token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getMinRawForSwap",
});
