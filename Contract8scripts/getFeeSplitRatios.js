#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getFeeSplitRatios — read (free, no wallet)
 * getFeeSplitRatios(): string
 *
 * Re-export of SaturnAdmin.getFeeSplitRatios. Returns the full reinvest /
 * provider / admin / holder breakdown in one string. The holder slice is taken
 * only when the swap's input token has stakers in saturnholders; otherwise it
 * stays in the pool as reinvest.
 *
 * Returns string: "reinvest:X_provider:Y_admin:Z_holder:H" (today
 * reinvest:60_provider:10_admin:20_holder:10).
 *
 * Usage: node Contract8scripts/getFeeSplitRatios.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getFeeSplitRatios
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getFeeSplitRatios.js",
  contract: "saturnrouter",
  method: "getFeeSplitRatios",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getFeeSplitRatios",
});
