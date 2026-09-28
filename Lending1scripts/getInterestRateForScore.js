#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getInterestRateForScore — read (free, no wallet)
 * getInterestRateForScore(creditScore: number): number
 *
 * Computes the annual interest rate (bps per 10,000) for a given credit score
 * using the formula: baseInterestRate − (creditScore × creditRateDiscount /
 * 1000), clamped to [minInterestRate, maxInterestRate]. Use this to preview
 * the APR on the loan form before the borrower submits.
 *
 * Returns number: Annual interest rate in bps/10000 (e.g. 1200 = 12% APR).
 *
 * Usage: node Lending1scripts/getInterestRateForScore.js <creditScore>
 *   creditScore (number): Borrower's current credit score (0–1000).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getInterestRateForScore
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getInterestRateForScore.js",
  contract: "saturnlendcfg",
  method: "getInterestRateForScore",
  params: [
    { name: "creditScore", type: "number", desc: "Borrower's current credit score (0–1000)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getInterestRateForScore",
});
