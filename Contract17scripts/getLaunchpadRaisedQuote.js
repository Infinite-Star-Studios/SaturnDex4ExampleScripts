#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadRaisedQuote — read (free, no wallet)
 * getLaunchpadRaisedQuote(launchpadId: number): number
 *
 * Returns the total raw units of tokenQuote committed by all buyers. This
 * doubles as the total buyer share weight.
 *
 * Returns number: Total tokenQuote committed.
 *
 * Usage: node Contract17scripts/getLaunchpadRaisedQuote.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadRaisedQuote
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadRaisedQuote.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadRaisedQuote",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadRaisedQuote",
});
