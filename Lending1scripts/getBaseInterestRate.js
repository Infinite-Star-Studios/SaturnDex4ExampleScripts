#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getBaseInterestRate — read (free, no wallet)
 * getBaseInterestRate(): number
 *
 * The starting annual interest rate in basis points (per 10,000) before any
 * credit-score discount is applied. Default is 2,000 (20% APR). A borrower
 * with zero credit score pays this rate (clamped to maxInterestRate).
 *
 * Returns number: Base annual interest rate in bps/10000 (default: 2000 =
 * 20%).
 *
 * Usage: node Lending1scripts/getBaseInterestRate.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getBaseInterestRate
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getBaseInterestRate.js",
  contract: "saturnlendcfg",
  method: "getBaseInterestRate",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getBaseInterestRate",
});
