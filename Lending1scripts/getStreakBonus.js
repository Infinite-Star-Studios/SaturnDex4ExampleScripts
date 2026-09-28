#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getStreakBonus — read (free, no wallet)
 * getStreakBonus(): number
 *
 * Bonus credit score points added per consecutive on-time repayment in a
 * streak. Default is 10.
 *
 * Returns number: Score bonus per streak increment (default: 10).
 *
 * Usage: node Lending1scripts/getStreakBonus.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getStreakBonus
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getStreakBonus.js",
  contract: "saturnlendcfg",
  method: "getStreakBonus",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getStreakBonus",
});
