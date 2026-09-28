#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getInstallmentAmount — read (free, no wallet)
 * getInstallmentAmount(totalOwed: number, installmentCount: number): number
 *
 * Computes the per-installment payment amount from total owed divided by
 * count, rounded up to prevent underpayment from truncation. Pair with
 * calculateInterest() and getInstallmentCount() to build a full repayment
 * schedule.
 *
 * Returns number: Per-installment payment amount, rounded up.
 *
 * Usage: node Lending1scripts/getInstallmentAmount.js <totalOwed> <installmentCount>
 *   totalOwed (number): Total amount owed (principal + interest) in raw
 *   units.
 *   installmentCount (number): Number of installments (from
 *   getInstallmentCount()).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getInstallmentAmount
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getInstallmentAmount.js",
  contract: "saturnlendcfg",
  method: "getInstallmentAmount",
  params: [
    { name: "totalOwed", type: "number", desc: "Total amount owed (principal + interest) in raw units." },
    { name: "installmentCount", type: "number", desc: "Number of installments (from getInstallmentCount())." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getInstallmentAmount",
});
