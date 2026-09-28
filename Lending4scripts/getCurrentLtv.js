#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getCurrentLtv — read (free, no wallet)
 * getCurrentLtv(loanId: number): number
 *
 * Returns the live loan-to-value ratio of the position, expressed per 10,000
 * (e.g., 7,500 = 75% LTV). Computes the remaining balance divided by the
 * collateral value in TAZ (saturnvault.getCollateralValue): a pledged RA/TAZ
 * pool is valued at its fair-LP value 2 × √(k × P), with P the spot TAZ-per-RA
 * price of the reference pool the admin pins
 * (saturndexadapt.getReferencePool). If the collateral value is zero it
 * returns 10,000. This spot figure only gates flagLiquidation();
 * triggerLiquidation() uses the time-weighted LTV (getLiquidationTwapLtv).
 *
 * Returns number: LTV per 10,000. 0 means fully repaid; 10,000 means
 * collateral is worthless.
 *
 * Usage: node Lending4scripts/getCurrentLtv.js <loanId>
 *   loanId (number): ID of the loan to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getCurrentLtv
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getCurrentLtv.js",
  contract: "saturnloans",
  method: "getCurrentLtv",
  params: [
    { name: "loanId", type: "number", desc: "ID of the loan to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getCurrentLtv",
});
