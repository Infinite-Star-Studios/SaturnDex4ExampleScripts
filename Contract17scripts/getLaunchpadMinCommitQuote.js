#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadMinCommitQuote — read (free, no wallet)
 * getLaunchpadMinCommitQuote(launchpadId: number): number
 *
 * Returns the minimum quote amount accepted per individual commit call.
 *
 * Returns number: Raw units of tokenQuote.
 *
 * Usage: node Contract17scripts/getLaunchpadMinCommitQuote.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadMinCommitQuote
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadMinCommitQuote.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadMinCommitQuote",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadMinCommitQuote",
});
