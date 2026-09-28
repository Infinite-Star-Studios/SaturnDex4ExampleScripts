#!/usr/bin/env node
"use strict";

/**
 * saturnloans.triggerDefault — write (signed transaction, needs PHANTASMA_WIF)
 * triggerDefault(loanId: number)
 *
 * The lender defaults a loan once its due date plus the grace period
 * (saturnlendcfg.getGracePeriod, 259,200 s = 3 days today) has passed. Only
 * the loan's lender can call it: the lender must be a witness (since 1.0.2
 * nobody else can). Moves status 1 (active) → 3 → 4 (liquidated) in the same
 * call, hands the collateral to the lender (for a v4 pool the lender becomes
 * its provider and receives its SATURN certificate), records the trigger time,
 * and marks a default on the borrower's credit profile. Until the lender calls
 * it the loan stays active and the borrower can still repay, late.
 *
 * Usage: node Lending4scripts/triggerDefault.js <loanId>
 *   loanId (number): ID of the active loan to default.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-triggerDefault
 */

const { send } = require("../common");

send({
  file: "Lending4scripts/triggerDefault.js",
  contract: "saturnloans",
  method: "triggerDefault",
  params: [
    { name: "loanId", type: "number", desc: "ID of the active loan to default." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturnloans-triggerDefault",
});
