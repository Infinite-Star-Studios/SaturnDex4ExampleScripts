#!/usr/bin/env node
"use strict";

/**
 * saturnstakearb.getTotalHolderProfit — read (free, no wallet)
 * getTotalHolderProfit(tokenSymbol: string): number
 *
 * Returns the lifetime raw-unit amount of tokenSymbol banked at
 * saturnliquidity as holders' profit share from all successful executeArb
 * calls. Use this to display total arb yield earned by stakers of a given
 * token.
 *
 * Returns number: Lifetime holder profit in raw units of tokenSymbol.
 *
 * Usage: node Contract22scripts/getTotalHolderProfit.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnstakearb-getTotalHolderProfit
 */

const { read } = require("../common");

read({
  file: "Contract22scripts/getTotalHolderProfit.js",
  contract: "saturnstakearb",
  method: "getTotalHolderProfit",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnstakearb-getTotalHolderProfit",
});
