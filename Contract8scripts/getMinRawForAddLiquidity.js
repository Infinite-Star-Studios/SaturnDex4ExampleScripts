#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getMinRawForAddLiquidity — read (free, no wallet)
 * getMinRawForAddLiquidity(tokenSymbol: string): number
 *
 * Returns the minimum raw amount of token A a user must add in a single
 * addLiquidity() call.
 *
 * Returns number: Minimum raw amount per add-liquidity.
 *
 * Usage: node Contract8scripts/getMinRawForAddLiquidity.js <tokenSymbol>
 *   tokenSymbol (string): Token A symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getMinRawForAddLiquidity
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getMinRawForAddLiquidity.js",
  contract: "saturnrouter",
  method: "getMinRawForAddLiquidity",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token A symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getMinRawForAddLiquidity",
});
