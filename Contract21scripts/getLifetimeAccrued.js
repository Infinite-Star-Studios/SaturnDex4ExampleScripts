#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getLifetimeAccrued — read (free, no wallet)
 * getLifetimeAccrued(tokenSymbol: string): number
 *
 * Returns the total raw-unit amount of tokenSymbol that has ever been accrued
 * into the reward pool (from both swap fees and arb profits) since deployment.
 * Useful for APR calculation and historical analytics.
 *
 * Returns number: Lifetime accrued rewards in raw token units.
 *
 * Usage: node Contract21scripts/getLifetimeAccrued.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getLifetimeAccrued
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getLifetimeAccrued.js",
  contract: "saturnholders",
  method: "getLifetimeAccrued",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getLifetimeAccrued",
});
