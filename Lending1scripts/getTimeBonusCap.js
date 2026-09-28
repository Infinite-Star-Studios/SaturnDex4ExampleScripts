#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getTimeBonusCap — read (free, no wallet)
 * getTimeBonusCap(): number
 *
 * Maximum credit score points that wallet-age time bonuses can contribute.
 * Default is 150. Even a very old wallet cannot earn more than 150 points from
 * age alone.
 *
 * Returns number: Maximum time-bonus contribution (default: 150).
 *
 * Usage: node Lending1scripts/getTimeBonusCap.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getTimeBonusCap
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getTimeBonusCap.js",
  contract: "saturnlendcfg",
  method: "getTimeBonusCap",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getTimeBonusCap",
});
