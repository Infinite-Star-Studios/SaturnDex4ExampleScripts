#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getLtvTier3 — read (free, no wallet)
 * getLtvTier3(): number
 *
 * Maximum LTV for credit score 400–599. Default is 5,000 (50%).
 *
 * Returns number: LTV for score 400–599 in bps/10000 (default: 5000 = 50%).
 *
 * Usage: node Lending1scripts/getLtvTier3.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier3
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getLtvTier3.js",
  contract: "saturnlendcfg",
  method: "getLtvTier3",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier3",
});
