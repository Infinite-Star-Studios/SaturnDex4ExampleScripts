#!/usr/bin/env node
"use strict";

/**
 * saturnloans.flagLiquidation — write (signed transaction, needs PHANTASMA_WIF)
 * flagLiquidation(loanId: number)
 *
 * First step of an LTV liquidation, lender only (the lender must be a
 * witness). Allowed once the spot getCurrentLtv(loanId) exceeds
 * saturnlendcfg.getLiquidationThreshold() (9,000 = 90% today). It records the
 * flag time, the reference RA/TAZ pool and that pool's accumulated
 * time-weighted price; nothing moves. triggerLiquidation() then needs the flag
 * to be getLiquidationWindowMin() to getLiquidationWindowMax() seconds old
 * (21,600 to 86,400 s on mainnet) and decides on the average price since the
 * flag. Every new flag replaces the last one (time and snapshot) and restarts
 * the wait.
 *
 * Usage: node Lending4scripts/flagLiquidation.js <loanId>
 *   loanId (number): Active loan whose LTV is above the liquidation
 *   threshold.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-flagLiquidation
 */

const { send } = require("../common");

send({
  file: "Lending4scripts/flagLiquidation.js",
  contract: "saturnloans",
  method: "flagLiquidation",
  params: [
    { name: "loanId", type: "number", desc: "Active loan whose LTV is above the liquidation threshold." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturnloans-flagLiquidation",
});
