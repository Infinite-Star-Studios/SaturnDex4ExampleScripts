#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getPartialRepayBonus — read (free, no wallet)
 * getPartialRepayBonus(): number
 *
 * Credit score points for repaying a loan in full before its due date (counted
 * once, at the final payment). Default is 15; saturncredit caps the total at
 * 50.
 *
 * Returns number: Score bonus for a partial early repayment (default: 15).
 *
 * Usage: node Lending1scripts/getPartialRepayBonus.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getPartialRepayBonus
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getPartialRepayBonus.js",
  contract: "saturnlendcfg",
  method: "getPartialRepayBonus",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getPartialRepayBonus",
});
