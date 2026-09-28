#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getPoolFeeRange — read (free, no wallet)
 * getPoolFeeRange(): string
 *
 * Re-export of SaturnAdmin.getPoolFeeRange. Returns both min and max per-pool
 * fee rates packed into one string.
 *
 * Returns string: "min:X_max:Y" in basis points.
 *
 * Usage: node Contract8scripts/getPoolFeeRange.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getPoolFeeRange
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getPoolFeeRange.js",
  contract: "saturnrouter",
  method: "getPoolFeeRange",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getPoolFeeRange",
});
