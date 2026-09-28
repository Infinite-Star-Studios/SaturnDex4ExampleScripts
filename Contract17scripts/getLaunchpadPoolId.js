#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadPoolId — read (free, no wallet)
 * getLaunchpadPoolId(launchpadId: number): number
 *
 * Returns the Saturn pool ID that was created when the launchpad activated.
 * Returns 0 if not yet activated.
 *
 * Returns number: Pool ID, or 0 if not yet active.
 *
 * Usage: node Contract17scripts/getLaunchpadPoolId.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadPoolId
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadPoolId.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadPoolId",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadPoolId",
});
