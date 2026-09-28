#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getLtvTier1 — read (free, no wallet)
 * getLtvTier1(): number
 *
 * Maximum LTV (in bps per 10,000) for borrowers with a credit score of 0–199.
 * Default is 2,500 (25%). This is the most restrictive tier.
 *
 * Returns number: LTV for score 0–199 in bps/10000 (default: 2500 = 25%).
 *
 * Usage: node Lending1scripts/getLtvTier1.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier1
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getLtvTier1.js",
  contract: "saturnlendcfg",
  method: "getLtvTier1",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier1",
});
