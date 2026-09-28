#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadAccFeePerShareB — read (free, no wallet)
 * getLaunchpadAccFeePerShareB(launchpadId: number): number
 *
 * Returns the accumulated fee-per-share accumulator for tokenQuote (tokenB),
 * scaled by 1e12.
 *
 * Returns number: Accumulated tokenQuote fee per share * 1e12.
 *
 * Usage: node Contract17scripts/getLaunchpadAccFeePerShareB.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadAccFeePerShareB
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadAccFeePerShareB.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadAccFeePerShareB",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadAccFeePerShareB",
});
