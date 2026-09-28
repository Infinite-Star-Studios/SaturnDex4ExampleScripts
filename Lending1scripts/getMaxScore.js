#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getMaxScore — read (free, no wallet)
 * getMaxScore(): number
 *
 * The maximum achievable credit score. Default is 1,000. Use this as the upper
 * bound when rendering a score progress bar.
 *
 * Returns number: Maximum credit score (default: 1000).
 *
 * Usage: node Lending1scripts/getMaxScore.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getMaxScore
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getMaxScore.js",
  contract: "saturnlendcfg",
  method: "getMaxScore",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getMaxScore",
});
