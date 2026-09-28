#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getStakedTokenSymbols — read (free, no wallet)
 * getStakedTokenSymbols(): string*
 *
 * Returns an iterator of every token symbol that has ever been staked. Symbols
 * whose stake has since dropped to zero stay listed, so check totalStaked in
 * getStakedTokensData before treating one as an active market (or a stake-arb
 * source).
 *
 * Returns string*: Iterator of token symbol strings (e.g. "SOUL", "KCAL",
 * ...).
 *
 * Usage: node Contract21scripts/getStakedTokenSymbols.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getStakedTokenSymbols
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getStakedTokenSymbols.js",
  contract: "saturnholders",
  method: "getStakedTokenSymbols",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getStakedTokenSymbols",
});
