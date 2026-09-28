#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getLiquidationPenaltyBps — read (free, no wallet)
 * getLiquidationPenaltyBps(): number
 *
 * Stored liquidation penalty in basis points (per 10,000). Default is 500
 * (5%). No contract applies it: a liquidation or default hands the lender the
 * whole pledged pool, whatever the debt.
 *
 * Returns number: Liquidation penalty rate in bps/10000 (default: 500 = 5%).
 *
 * Usage: node Lending1scripts/getLiquidationPenaltyBps.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getLiquidationPenaltyBps
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getLiquidationPenaltyBps.js",
  contract: "saturnlendcfg",
  method: "getLiquidationPenaltyBps",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getLiquidationPenaltyBps",
});
