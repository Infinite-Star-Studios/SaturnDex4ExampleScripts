#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getStreakBonusCap — read (free, no wallet)
 * getStreakBonusCap(): number
 *
 * Maximum credit score contribution from repayment streaks. Default is 100.
 *
 * Returns number: Maximum streak bonus contribution (default: 100).
 *
 * Usage: node Lending1scripts/getStreakBonusCap.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getStreakBonusCap
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getStreakBonusCap.js",
  contract: "saturnlendcfg",
  method: "getStreakBonusCap",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getStreakBonusCap",
});
