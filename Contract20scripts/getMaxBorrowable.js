#!/usr/bin/env node
"use strict";

/**
 * saturnflash.getMaxBorrowable — read (free, no wallet)
 * getMaxBorrowable(tokenSymbol: string): number
 *
 * Returns saturnliquidity's whole raw balance of tokenSymbol (every pool's
 * reserves plus unclaimed provider fees and holder rewards), which is the
 * ceiling executeFlashArb checks amountIn against. It is not a per-pool limit
 * and not a trade size: the profitable amountIn is set by the reserves of the
 * two pools you route through and is usually far smaller. Check amountIn
 * against it to rule out "Insufficient liquidity for flash arb".
 *
 * Returns number: Maximum borrowable amount in raw units of tokenSymbol.
 *
 * Usage: node Contract20scripts/getMaxBorrowable.js <tokenSymbol>
 *   tokenSymbol (string): The token symbol to check borrowable liquidity for
 *   (e.g. "SOUL", "KCAL").
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-getMaxBorrowable
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/getMaxBorrowable.js",
  contract: "saturnflash",
  method: "getMaxBorrowable",
  params: [
    { name: "tokenSymbol", type: "string", desc: "The token symbol to check borrowable liquidity for (e.g. \"SOUL\", \"KCAL\")." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-getMaxBorrowable",
});
