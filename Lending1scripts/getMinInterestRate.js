#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getMinInterestRate — read (free, no wallet)
 * getMinInterestRate(): number
 *
 * Floor for the computed annual interest rate regardless of how high a
 * borrower's credit score is. Default is 300 (3% APR). Show this as the
 * best-case rate achievable.
 *
 * Returns number: Minimum annual interest rate in bps/10000 (default: 300 =
 * 3%).
 *
 * Usage: node Lending1scripts/getMinInterestRate.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getMinInterestRate
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getMinInterestRate.js",
  contract: "saturnlendcfg",
  method: "getMinInterestRate",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getMinInterestRate",
});
