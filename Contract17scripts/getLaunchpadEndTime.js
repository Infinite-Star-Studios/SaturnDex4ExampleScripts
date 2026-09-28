#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadEndTime — read (free, no wallet)
 * getLaunchpadEndTime(launchpadId: number): number
 *
 * Returns the Unix timestamp at which the funding window closes. Commits are
 * rejected at or after this time.
 *
 * Returns number: Unix timestamp (seconds).
 *
 * Usage: node Contract17scripts/getLaunchpadEndTime.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadEndTime
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadEndTime.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadEndTime",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadEndTime",
});
