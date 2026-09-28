#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLiquidationWindowMax — read (free, no wallet)
 * getLiquidationWindowMax(): number
 *
 * Maximum age in seconds of a liquidation flag; an older flag must be replaced
 * with a new flagLiquidation. 86,400 (24 h) on mainnet; devnet 1,200.
 *
 * Returns number: Seconds.
 *
 * Usage: node Lending4scripts/getLiquidationWindowMax.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLiquidationWindowMax
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLiquidationWindowMax.js",
  contract: "saturnloans",
  method: "getLiquidationWindowMax",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLiquidationWindowMax",
});
