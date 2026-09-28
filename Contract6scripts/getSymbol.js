#!/usr/bin/env node
"use strict";

/**
 * SATURN.getSymbol — read (free, no wallet)
 * getSymbol(): string
 *
 * Token symbol property. Use it ("SATURN") with the RPC getNFT /
 * getTokenBalance calls.
 *
 * Returns string: "SATURN".
 *
 * Usage: node Contract6scripts/getSymbol.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-getSymbol
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/getSymbol.js",
  contract: "SATURN",
  method: "getSymbol",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-getSymbol",
});
