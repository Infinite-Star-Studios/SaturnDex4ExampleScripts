#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getLiquidationPenalty — read (free, no wallet)
 * getLiquidationPenalty(outstandingDebt: number): number
 *
 * Computes the liquidation penalty amount for a given outstanding debt:
 * outstandingDebt × liquidationPenaltyBps / 10000. Informational only: no
 * contract charges it, and there is no liquidator income, because only the
 * loan's lender can liquidate.
 *
 * Returns number: Liquidation penalty amount in raw token units.
 *
 * Usage: node Lending1scripts/getLiquidationPenalty.js <outstandingDebt>
 *   outstandingDebt (number): Outstanding debt amount in raw token units.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getLiquidationPenalty
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getLiquidationPenalty.js",
  contract: "saturnlendcfg",
  method: "getLiquidationPenalty",
  params: [
    { name: "outstandingDebt", type: "number", desc: "Outstanding debt amount in raw token units." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getLiquidationPenalty",
});
