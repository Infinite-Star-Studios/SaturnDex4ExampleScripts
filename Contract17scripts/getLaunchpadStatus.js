#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadStatus — read (free, no wallet)
 * getLaunchpadStatus(launchpadId: number): number
 *
 * Returns the launchpad lifecycle status. 0 = Funding, 1 = Active (pool live),
 * 2 = Dissolved, 3 = Cancelled.
 *
 * Returns number: Status code: 0 Funding | 1 Active | 2 Dissolved | 3
 * Cancelled.
 *
 * Usage: node Contract17scripts/getLaunchpadStatus.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadStatus
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadStatus.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadStatus",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadStatus",
});
