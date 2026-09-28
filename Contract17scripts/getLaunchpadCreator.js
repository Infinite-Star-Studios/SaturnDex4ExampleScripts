#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadCreator — read (free, no wallet)
 * getLaunchpadCreator(launchpadId: number): address
 *
 * Returns the address that created the launchpad.
 *
 * Returns address: Creator's address.
 *
 * Usage: node Contract17scripts/getLaunchpadCreator.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadCreator
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadCreator.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadCreator",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadCreator",
});
