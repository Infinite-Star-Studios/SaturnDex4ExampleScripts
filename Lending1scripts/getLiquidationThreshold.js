#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getLiquidationThreshold — read (free, no wallet)
 * getLiquidationThreshold(): number
 *
 * The LTV ratio (bps per 10,000) above which collateral becomes eligible for
 * liquidation. Only the loan's lender can act on it:
 * saturnloans.flagLiquidation needs the spot LTV above it, and
 * triggerLiquidation, 6-24 h later on mainnet, needs the time-weighted LTV
 * above it. Default is 9,000 (90%).
 *
 * Returns number: Liquidation LTV threshold in bps/10000 (default: 9000 =
 * 90%).
 *
 * Usage: node Lending1scripts/getLiquidationThreshold.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getLiquidationThreshold
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getLiquidationThreshold.js",
  contract: "saturnlendcfg",
  method: "getLiquidationThreshold",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getLiquidationThreshold",
});
