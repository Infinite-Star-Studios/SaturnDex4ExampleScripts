#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadDissolvedResB — read (free, no wallet)
 * getLaunchpadDissolvedResB(launchpadId: number): number
 *
 * Returns the raw tokenQuote reserves captured at dissolution.
 *
 * Returns number: Raw tokenQuote dissolved reserve; 0 if not dissolved or
 * pre-activation dissolve.
 *
 * Usage: node Contract17scripts/getLaunchpadDissolvedResB.js <launchpadId>
 *   launchpadId (number): ID of the dissolved launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadDissolvedResB
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadDissolvedResB.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadDissolvedResB",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the dissolved launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadDissolvedResB",
});
