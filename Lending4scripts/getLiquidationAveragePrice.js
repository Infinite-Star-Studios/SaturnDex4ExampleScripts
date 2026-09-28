#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLiquidationAveragePrice — read (free, no wallet)
 * getLiquidationAveragePrice(loanId: number): number
 *
 * The reference pool's average TAZ-per-RA price from the flag to now, scaled
 * by 10^18: the price triggerLiquidation would use now.
 *
 * Returns number: Average TAZ per RA × 10^18.
 *
 * Usage: node Lending4scripts/getLiquidationAveragePrice.js <loanId>
 *   loanId (number): A flagged loan.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLiquidationAveragePrice
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLiquidationAveragePrice.js",
  contract: "saturnloans",
  method: "getLiquidationAveragePrice",
  params: [
    { name: "loanId", type: "number", desc: "A flagged loan." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLiquidationAveragePrice",
});
