#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadBuyerCount — read (free, no wallet)
 * getLaunchpadBuyerCount(launchpadId: number): number
 *
 * Returns the number of distinct buyers. commit adds 1 for a new buyer and
 * withdrawCommit subtracts 1; claimDissolution and claimFundingRefund do not
 * change it, so after a dissolution it still counts buyers who have claimed.
 *
 * Returns number: Number of unique buyers with non-zero commitments.
 *
 * Usage: node Contract17scripts/getLaunchpadBuyerCount.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadBuyerCount
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadBuyerCount.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadBuyerCount",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadBuyerCount",
});
