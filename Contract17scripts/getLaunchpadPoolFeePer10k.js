#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadPoolFeePer10k — read (free, no wallet)
 * getLaunchpadPoolFeePer10k(launchpadId: number): number
 *
 * Returns the trading fee rate (basis points per 10,000) configured for the
 * post-launch pool.
 *
 * Returns number: Fee in bps/10k (e.g. 30 = 0.3%).
 *
 * Usage: node Contract17scripts/getLaunchpadPoolFeePer10k.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadPoolFeePer10k
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadPoolFeePer10k.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadPoolFeePer10k",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadPoolFeePer10k",
});
