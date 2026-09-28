#!/usr/bin/env node
"use strict";

/**
 * saturnloans.triggerLiquidation — write (signed transaction, needs PHANTASMA_WIF)
 * triggerLiquidation(loanId: number)
 *
 * Second step of an LTV liquidation, lender only. Requires a flag
 * getLiquidationWindowMin() to getLiquidationWindowMax() seconds old (21,600
 * to 86,400 s on mainnet; devnet is set to 120 to 1,200 s for testing) and the
 * loan's LTV at the reference pool's time-weighted average price since the
 * flag (getLiquidationTwapLtv) above the threshold; an atomic swap in and out
 * of the reference adds nothing to that average. Moves status to 4
 * (liquidated), makes the lender the pool's provider and sends the lender its
 * SATURN certificate, records the average price, the time-weighted LTV and the
 * time (getLoanLiquidationTriggerPrice / getLoanLiquidationTriggerLtv /
 * getLoanLiquidationTriggeredAt), marks a default on the borrower's credit
 * profile and notifies saturntaz so no reward is paid.
 *
 * Usage: node Lending4scripts/triggerLiquidation.js <loanId>
 *   loanId (number): Flagged loan to liquidate.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-triggerLiquidation
 */

const { send } = require("../common");

send({
  file: "Lending4scripts/triggerLiquidation.js",
  contract: "saturnloans",
  method: "triggerLiquidation",
  params: [
    { name: "loanId", type: "number", desc: "Flagged loan to liquidate." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturnloans-triggerLiquidation",
});
