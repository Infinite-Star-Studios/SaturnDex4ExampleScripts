#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getTargetDecimals — read (free, no wallet)
 * getTargetDecimals(): number
 *
 * Re-export of SaturnAdmin.getTargetDecimals (8 by default).
 *
 * Returns number: Internal target decimals.
 *
 * Usage: node Contract8scripts/getTargetDecimals.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getTargetDecimals
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getTargetDecimals.js",
  contract: "saturnrouter",
  method: "getTargetDecimals",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getTargetDecimals",
});
