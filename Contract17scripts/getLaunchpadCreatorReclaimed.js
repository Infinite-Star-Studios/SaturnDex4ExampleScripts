#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadCreatorReclaimed — read (free, no wallet)
 * getLaunchpadCreatorReclaimed(launchpadId: number): number
 *
 * Returns 1 if the creator has already reclaimed their escrowed tokenA after a
 * pre-activation dissolution or cancellation, 0 if not yet reclaimed.
 *
 * Returns number: 0 = not yet reclaimed; 1 = already reclaimed.
 *
 * Usage: node Contract17scripts/getLaunchpadCreatorReclaimed.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadCreatorReclaimed
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadCreatorReclaimed.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadCreatorReclaimed",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadCreatorReclaimed",
});
