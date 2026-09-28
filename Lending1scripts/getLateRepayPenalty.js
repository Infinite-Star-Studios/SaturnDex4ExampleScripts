#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getLateRepayPenalty — read (free, no wallet)
 * getLateRepayPenalty(): number
 *
 * Credit score points deducted for each payment made after its installment's
 * due time plus the grace period. A payment inside the grace period counts as
 * on time. Default is 30.
 *
 * Returns number: Score penalty for a late (but not defaulted) payment
 * (default: 30).
 *
 * Usage: node Lending1scripts/getLateRepayPenalty.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getLateRepayPenalty
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getLateRepayPenalty.js",
  contract: "saturnlendcfg",
  method: "getLateRepayPenalty",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getLateRepayPenalty",
});
