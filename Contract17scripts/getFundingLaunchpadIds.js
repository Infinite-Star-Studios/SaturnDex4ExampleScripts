#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getFundingLaunchpadIds — read (free, no wallet)
 * getFundingLaunchpadIds(): number*
 *
 * Returns only IDs of launchpads currently in Funding state (status 0). Use to
 * populate an "open sales" listing.
 *
 * Returns number*: Stream of funding launchpad IDs.
 *
 * Usage: node Contract17scripts/getFundingLaunchpadIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getFundingLaunchpadIds
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getFundingLaunchpadIds.js",
  contract: "saturnlaunchpad",
  method: "getFundingLaunchpadIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getFundingLaunchpadIds",
});
