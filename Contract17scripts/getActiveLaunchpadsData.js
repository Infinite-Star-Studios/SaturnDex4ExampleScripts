#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getActiveLaunchpadsData — read (free, no wallet)
 * getActiveLaunchpadsData(): string*
 *
 * Returns a stream of encoded rows for all active launchpads (status 1) in one
 * call, eliminating N per-field round-trips. Each row is pipe-delimited:
 * launchpadId|tokenA|tokenQuote|tokensForSale|quotePerA|soldA|raisedQuote|buyerCount|status|poolId|endTime.
 *
 * Returns string*: Stream of pipe-delimited launchpad summary rows.
 *
 * Usage: node Contract17scripts/getActiveLaunchpadsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getActiveLaunchpadsData
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getActiveLaunchpadsData.js",
  contract: "saturnlaunchpad",
  method: "getActiveLaunchpadsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getActiveLaunchpadsData",
});
