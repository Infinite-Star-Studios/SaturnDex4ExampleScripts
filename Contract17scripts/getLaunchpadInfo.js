#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadInfo — read (free, no wallet)
 * getLaunchpadInfo(launchpadId: number): string
 *
 * Returns a packed string summary of a launchpad's key parameters in one call,
 * avoiding N individual round-trips. Format:
 * `tokenA:<sym>_tokenQuote:<sym>_forSale:<n>_price:<n>_sold:<n>_raised:<n>_status:<n>_pool:<n>_buyers:<n>`.
 * Status codes: 0 = Funding, 1 = Active, 2 = Dissolved, 3 = Cancelled.
 *
 * Returns string: Underscore-delimited key:value summary string.
 *
 * Usage: node Contract17scripts/getLaunchpadInfo.js <launchpadId>
 *   launchpadId (number): ID of the launchpad to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadInfo
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadInfo.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadInfo",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadInfo",
});
