#!/usr/bin/env node
"use strict";

/**
 * saturncredit.computeScore — write (signed transaction, needs PHANTASMA_WIF)
 * computeScore(user: address): number
 *
 * Recomputes the user's score, stores it as the cached score with the current
 * timestamp, and returns it. Anyone can call it for any registered user.
 * Formula (saturnlendcfg values, live value in brackets): baseScore [200] +
 * min(floor(secondsSinceRegistration / secondsPerDay [86,400]) ×
 * timeBonusPerDay [1], timeBonusCap [150]) + min(onTimeRepays ×
 * onTimeRepayBonus [50], onTimeRepayCap [350]) + min(bestStreak × streakBonus
 * [10], streakBonusCap [100]) + min(partialRepays × partialRepayBonus [15],
 * 50) − lateRepays × lateRepayPenalty [30] − defaults × defaultPenalty [150].
 * A result below 0 becomes 0, and the result is capped at maxScore [1000];
 * with the live config the highest reachable score is 850. Called through
 * invokeRawScript it returns the live score for free without storing it.
 *
 * Returns number: Credit score, 0 to maxScore (1000); 850 is the highest
 * reachable with the live config.
 *
 * Usage: node Lending2scripts/computeScore.js <user>
 *   user (address): The borrower whose score to recompute.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-computeScore
 */

const { send } = require("../common");

send({
  file: "Lending2scripts/computeScore.js",
  contract: "saturncredit",
  method: "computeScore",
  params: [
    { name: "user", type: "address", desc: "The borrower whose score to recompute." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturncredit-computeScore",
});
