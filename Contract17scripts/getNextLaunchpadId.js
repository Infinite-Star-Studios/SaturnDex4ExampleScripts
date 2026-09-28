#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getNextLaunchpadId — read (free, no wallet)
 * getNextLaunchpadId(): number
 *
 * Returns the ID that will be assigned to the next launchpad. Read this before
 * `createLaunchpad` to predict the upcoming ID for event matching.
 *
 * Returns number: Next launchpad ID (starts at 1, increments by 1).
 *
 * Usage: node Contract17scripts/getNextLaunchpadId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getNextLaunchpadId
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getNextLaunchpadId.js",
  contract: "saturnlaunchpad",
  method: "getNextLaunchpadId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getNextLaunchpadId",
});
