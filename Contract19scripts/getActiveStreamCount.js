#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getActiveStreamCount — read (free, no wallet)
 * getActiveStreamCount(): number
 *
 * Returns the current number of active (status = 0) streams. Useful for a live
 * dashboard counter.
 *
 * Returns number: Number of currently active streams.
 *
 * Usage: node Contract19scripts/getActiveStreamCount.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamCount
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getActiveStreamCount.js",
  contract: "saturntwamm",
  method: "getActiveStreamCount",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getActiveStreamCount",
});
