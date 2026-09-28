#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getAutoMaxExtension — read (free, no wallet)
 * getAutoMaxExtension(): number
 *
 * Maximum additional seconds a perfect credit score (1000) can add to the
 * auto-lending base duration. Default is 12,960,000 (150 days). The full
 * formula is autoBaseDuration + (creditScore * autoMaxExtension / maxScore).
 *
 * Returns number: Maximum duration extension in seconds for auto-lending
 * (default: 12960000).
 *
 * Usage: node Lending1scripts/getAutoMaxExtension.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getAutoMaxExtension
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getAutoMaxExtension.js",
  contract: "saturnlendcfg",
  method: "getAutoMaxExtension",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getAutoMaxExtension",
});
