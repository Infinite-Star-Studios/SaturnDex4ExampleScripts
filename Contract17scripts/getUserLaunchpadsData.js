#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getUserLaunchpadsData — read (free, no wallet)
 * getUserLaunchpadsData(user: address): string*
 *
 * Returns a stream of encoded launchpad rows for every launchpad in which the
 * given user address currently has a non-zero committed quote. Same row format
 * as getActiveLaunchpadsData. Use to show a user's portfolio of active
 * commitments.
 *
 * Returns string*: Stream of pipe-delimited rows for launchpads the user has
 * committed to.
 *
 * Usage: node Contract17scripts/getUserLaunchpadsData.js <user>
 *   user (address): Address to look up.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getUserLaunchpadsData
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getUserLaunchpadsData.js",
  contract: "saturnlaunchpad",
  method: "getUserLaunchpadsData",
  params: [
    { name: "user", type: "address", desc: "Address to look up." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getUserLaunchpadsData",
});
