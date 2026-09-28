#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getMaxTruncationPercent — read (free, no wallet)
 * getMaxTruncationPercent(): number
 *
 * Re-export of SaturnAdmin.getMaxTruncationPercent (default 10).
 *
 * Returns number: Maximum truncation loss allowed on removePool.
 *
 * Usage: node Contract8scripts/getMaxTruncationPercent.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getMaxTruncationPercent
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getMaxTruncationPercent.js",
  contract: "saturnrouter",
  method: "getMaxTruncationPercent",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getMaxTruncationPercent",
});
