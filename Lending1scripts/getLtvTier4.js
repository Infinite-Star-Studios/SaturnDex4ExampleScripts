#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getLtvTier4 — read (free, no wallet)
 * getLtvTier4(): number
 *
 * Maximum LTV for credit score 600–799. Default is 6,500 (65%).
 *
 * Returns number: LTV for score 600–799 in bps/10000 (default: 6500 = 65%).
 *
 * Usage: node Lending1scripts/getLtvTier4.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier4
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getLtvTier4.js",
  contract: "saturnlendcfg",
  method: "getLtvTier4",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getLtvTier4",
});
