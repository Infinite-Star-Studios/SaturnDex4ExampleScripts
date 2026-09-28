#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.calculateInterest — read (free, no wallet)
 * calculateInterest(principal: number, ratePer10k: number, durationSeconds: number): number
 *
 * Computes total simple interest owed on a loan: (principal × ratePer10k /
 * 10000) × durationSeconds / secondsPerYear. Use this to show the total cost
 * of a loan before the borrower confirms.
 *
 * Returns number: Total interest amount in the same raw units as principal.
 *
 * Usage: node Lending1scripts/calculateInterest.js <principal> <ratePer10k> <durationSeconds>
 *   principal (number): Loan principal in the token's raw units.
 *   ratePer10k (number): Annual interest rate in bps per 10,000 (e.g. 1500 =
 *   15%).
 *   durationSeconds (number): Loan duration in seconds.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-calculateInterest
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/calculateInterest.js",
  contract: "saturnlendcfg",
  method: "calculateInterest",
  params: [
    { name: "principal", type: "number", desc: "Loan principal in the token's raw units." },
    { name: "ratePer10k", type: "number", desc: "Annual interest rate in bps per 10,000 (e.g. 1500 = 15%)." },
    { name: "durationSeconds", type: "number", desc: "Loan duration in seconds." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-calculateInterest",
});
