#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadAccFeePerShareA — read (free, no wallet)
 * getLaunchpadAccFeePerShareA(launchpadId: number): number
 *
 * Returns the accumulated fee-per-share accumulator for tokenA (scaled by
 * 1e12). Used internally to compute pending rewards; expose in UIs for
 * advanced fee accounting.
 *
 * Returns number: Accumulated tokenA fee per share * 1e12.
 *
 * Usage: node Contract17scripts/getLaunchpadAccFeePerShareA.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadAccFeePerShareA
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadAccFeePerShareA.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadAccFeePerShareA",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadAccFeePerShareA",
});
