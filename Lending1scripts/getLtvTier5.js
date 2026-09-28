#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getLtvTier5 — read (free, no wallet)
 * getLtvTier5(): number
 *
 * Maximum LTV for credit score 800–1000. Default is 8,000 (80%). This is the
 * best LTV tier, reserved for borrowers with an established repayment history.
 *
 * Returns number: LTV for score 800–1000 in bps/10000 (default: 8000 = 80%).
 *
 * Usage: node Lending1scripts/getLtvTier5.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier5
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getLtvTier5.js",
  contract: "saturnlendcfg",
  method: "getLtvTier5",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier5",
});
