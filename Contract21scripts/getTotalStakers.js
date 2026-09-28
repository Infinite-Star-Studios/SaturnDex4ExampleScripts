#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getTotalStakers — read (free, no wallet)
 * getTotalStakers(tokenSymbol: string): number
 *
 * Returns the number of distinct addresses currently holding a non-zero stake
 * of tokenSymbol. Useful for showing participation metrics in your UI.
 *
 * Returns number: Count of unique stakers for this token.
 *
 * Usage: node Contract21scripts/getTotalStakers.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getTotalStakers
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getTotalStakers.js",
  contract: "saturnholders",
  method: "getTotalStakers",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getTotalStakers",
});
