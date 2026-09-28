#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getActiveLaunchpadIds — read (free, no wallet)
 * getActiveLaunchpadIds(): number*
 *
 * Returns only IDs of launchpads in Active state (status 1 — pool is live).
 * Useful for listing post-launch pools that are still earning fees.
 *
 * Returns number*: Stream of active launchpad IDs.
 *
 * Usage: node Contract17scripts/getActiveLaunchpadIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getActiveLaunchpadIds
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getActiveLaunchpadIds.js",
  contract: "saturnlaunchpad",
  method: "getActiveLaunchpadIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getActiveLaunchpadIds",
});
