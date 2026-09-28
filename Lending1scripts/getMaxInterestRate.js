#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getMaxInterestRate — read (free, no wallet)
 * getMaxInterestRate(): number
 *
 * Ceiling for the computed annual interest rate. Default is 3,000 (30% APR).
 * Show this as the worst-case rate a borrower can be assigned.
 *
 * Returns number: Maximum annual interest rate in bps/10000 (default: 3000 =
 * 30%).
 *
 * Usage: node Lending1scripts/getMaxInterestRate.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getMaxInterestRate
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getMaxInterestRate.js",
  contract: "saturnlendcfg",
  method: "getMaxInterestRate",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getMaxInterestRate",
});
