#!/usr/bin/env node
"use strict";

/**
 * saturnpools.validateTokenSymbol — read (free, no wallet)
 * validateTokenSymbol(symbol: string)
 *
 * Reverts with "Token does not exist: <symbol>" if the given symbol isn't
 * registered as a Phantasma token. Useful as a cheap preflight before
 * submitting a transaction that would otherwise fail mid-execution.
 *
 * Returns void: No return value — reverts on invalid token.
 *
 * Usage: node Contract2scripts/validateTokenSymbol.js <symbol>
 *   symbol (string): Token symbol to validate.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-validateTokenSymbol
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/validateTokenSymbol.js",
  contract: "saturnpools",
  method: "validateTokenSymbol",
  params: [
    { name: "symbol", type: "string", desc: "Token symbol to validate." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-validateTokenSymbol",
});
