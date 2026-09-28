#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadDissolvedResA — read (free, no wallet)
 * getLaunchpadDissolvedResA(launchpadId: number): number
 *
 * Returns the raw tokenA reserves captured at dissolution. Used to compute
 * each participant's claimDissolution payout.
 *
 * Returns number: Raw tokenA dissolved reserve; 0 if not dissolved or
 * pre-activation dissolve.
 *
 * Usage: node Contract17scripts/getLaunchpadDissolvedResA.js <launchpadId>
 *   launchpadId (number): ID of the dissolved launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadDissolvedResA
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadDissolvedResA.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadDissolvedResA",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the dissolved launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadDissolvedResA",
});
