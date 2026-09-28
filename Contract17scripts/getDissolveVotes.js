#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getDissolveVotes — read (free, no wallet)
 * getDissolveVotes(launchpadId: number): number
 *
 * Returns the total committed-quote weight of all votes cast for the current
 * dissolution proposal. Compare to `getLaunchpadRaisedQuote` to gauge
 * majority: votes * 2 > raisedQuote means the vote has passed.
 *
 * Returns number: Cumulative vote weight in raw tokenQuote units.
 *
 * Usage: node Contract17scripts/getDissolveVotes.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getDissolveVotes
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getDissolveVotes.js",
  contract: "saturnlaunchpad",
  method: "getDissolveVotes",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getDissolveVotes",
});
