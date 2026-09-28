#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLiquidationTwapLtv — read (free, no wallet)
 * getLiquidationTwapLtv(loanId: number): number
 *
 * The loan's LTV (per 10,000) at that average price. triggerLiquidation needs
 * it above getLiquidationThreshold() while the flag is inside the window. Poll
 * it: the lender to decide when to trigger, the borrower to decide when to
 * repay.
 *
 * Returns number: Time-weighted LTV per 10,000.
 *
 * Usage: node Lending4scripts/getLiquidationTwapLtv.js <loanId>
 *   loanId (number): A flagged loan.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLiquidationTwapLtv
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLiquidationTwapLtv.js",
  contract: "saturnloans",
  method: "getLiquidationTwapLtv",
  params: [
    { name: "loanId", type: "number", desc: "A flagged loan." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLiquidationTwapLtv",
});
