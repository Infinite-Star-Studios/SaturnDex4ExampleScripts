#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getTotalLoansRewarded — read (free, no wallet)
 * getTotalLoansRewarded(): number
 *
 * Returns the number of loans whose reward claim ran
 * (saturnloans.claimRepaymentReward), even when the reward came out 0. It is 0
 * on mainnet today.
 *
 * Returns number: Count of loans that have received a TAZ reward.
 *
 * Usage: node Lending8scripts/getTotalLoansRewarded.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getTotalLoansRewarded
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getTotalLoansRewarded.js",
  contract: "saturntaz",
  method: "getTotalLoansRewarded",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getTotalLoansRewarded",
});
