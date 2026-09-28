#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getLtvTier2 — read (free, no wallet)
 * getLtvTier2(): number
 *
 * Maximum LTV for credit score 200–399. Default is 3,500 (35%).
 *
 * Returns number: LTV for score 200–399 in bps/10000 (default: 3500 = 35%).
 *
 * Usage: node Lending1scripts/getLtvTier2.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier2
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getLtvTier2.js",
  contract: "saturnlendcfg",
  method: "getLtvTier2",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier2",
});
