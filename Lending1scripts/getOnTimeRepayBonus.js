#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getOnTimeRepayBonus — read (free, no wallet)
 * getOnTimeRepayBonus(): number
 *
 * Credit score points awarded per on-time installment or full repayment.
 * Default is 50. Display this in the incentive copy next to the repayment
 * button.
 *
 * Returns number: Score points awarded per on-time repayment (default: 50).
 *
 * Usage: node Lending1scripts/getOnTimeRepayBonus.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getOnTimeRepayBonus
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getOnTimeRepayBonus.js",
  contract: "saturnlendcfg",
  method: "getOnTimeRepayBonus",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getOnTimeRepayBonus",
});
