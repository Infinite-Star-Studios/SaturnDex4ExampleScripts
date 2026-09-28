#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadSoldA — read (free, no wallet)
 * getLaunchpadSoldA(launchpadId: number): number
 *
 * Returns how many raw units of tokenA have been reserved by buyers so far.
 *
 * Returns number: Raw units of tokenA sold/reserved.
 *
 * Usage: node Contract17scripts/getLaunchpadSoldA.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadSoldA
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadSoldA.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadSoldA",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadSoldA",
});
