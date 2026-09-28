#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLiquidationWindowMin — read (free, no wallet)
 * getLiquidationWindowMin(): number
 *
 * Minimum age in seconds of a liquidation flag before triggerLiquidation
 * accepts it. 21,600 (6 h) on mainnet; devnet is set to 120 for testing.
 *
 * Returns number: Seconds.
 *
 * Usage: node Lending4scripts/getLiquidationWindowMin.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLiquidationWindowMin
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLiquidationWindowMin.js",
  contract: "saturnloans",
  method: "getLiquidationWindowMin",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLiquidationWindowMin",
});
