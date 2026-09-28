#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getReserveValue — read (free, no wallet)
 * getReserveValue(tokenSymbol: string): number
 *
 * Total scaled reserve of a token across every pool in the DEX. Useful for
 * protocol-level stats.
 *
 * Returns number: Sum of all scaled reserves of the token.
 *
 * Usage: node Contract2scripts/getReserveValue.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getReserveValue
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getReserveValue.js",
  contract: "saturnpools",
  method: "getReserveValue",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getReserveValue",
});
