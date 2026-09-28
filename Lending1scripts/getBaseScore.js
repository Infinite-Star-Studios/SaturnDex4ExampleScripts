#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getBaseScore — read (free, no wallet)
 * getBaseScore(): number
 *
 * The credit score assigned to a brand-new borrower with no history. Default
 * is 200. New users start in Tier 2 LTV. Display this when onboarding
 * first-time borrowers.
 *
 * Returns number: Starting credit score for new borrowers (default: 200).
 *
 * Usage: node Lending1scripts/getBaseScore.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getBaseScore
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getBaseScore.js",
  contract: "saturnlendcfg",
  method: "getBaseScore",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getBaseScore",
});
