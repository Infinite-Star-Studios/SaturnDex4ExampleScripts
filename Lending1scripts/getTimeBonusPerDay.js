#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getTimeBonusPerDay — read (free, no wallet)
 * getTimeBonusPerDay(): number
 *
 * Credit score points added per day since the borrower was registered in
 * saturncredit (postLoanRequest registers a new borrower). Default is 1
 * point/day, capped by getTimeBonusCap().
 *
 * Returns number: Score points accrued per day of wallet age (default: 1).
 *
 * Usage: node Lending1scripts/getTimeBonusPerDay.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getTimeBonusPerDay
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getTimeBonusPerDay.js",
  contract: "saturnlendcfg",
  method: "getTimeBonusPerDay",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getTimeBonusPerDay",
});
