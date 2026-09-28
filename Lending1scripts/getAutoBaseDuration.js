#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getAutoBaseDuration — read (free, no wallet)
 * getAutoBaseDuration(): number
 *
 * Base loan duration (seconds) used in the auto-lending algorithm before
 * credit-score extensions are added. Default is 2,592,000 (30 days).
 *
 * Returns number: Auto-lending base duration in seconds (default: 2592000 = 30
 * days).
 *
 * Usage: node Lending1scripts/getAutoBaseDuration.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getAutoBaseDuration
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getAutoBaseDuration.js",
  contract: "saturnlendcfg",
  method: "getAutoBaseDuration",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getAutoBaseDuration",
});
