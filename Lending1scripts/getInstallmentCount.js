#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getInstallmentCount — read (free, no wallet)
 * getInstallmentCount(durationSeconds: number): number
 *
 * Returns the number of installments for a loan of a given duration by
 * dividing by installmentInterval, rounding up. Minimum 1. Use this to compute
 * the payment schedule grid.
 *
 * Returns number: Number of installment payments (always ≥ 1).
 *
 * Usage: node Lending1scripts/getInstallmentCount.js <durationSeconds>
 *   durationSeconds (number): Loan duration in seconds.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getInstallmentCount
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getInstallmentCount.js",
  contract: "saturnlendcfg",
  method: "getInstallmentCount",
  params: [
    { name: "durationSeconds", type: "number", desc: "Loan duration in seconds." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getInstallmentCount",
});
