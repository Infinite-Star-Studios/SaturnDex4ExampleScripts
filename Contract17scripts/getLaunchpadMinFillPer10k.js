#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadMinFillPer10k — read (free, no wallet)
 * getLaunchpadMinFillPer10k(launchpadId: number): number
 *
 * Returns the minimum fill threshold per 10,000 of tokensForSale required to
 * activate.
 *
 * Returns number: Min fill ratio (1000–10000).
 *
 * Usage: node Contract17scripts/getLaunchpadMinFillPer10k.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadMinFillPer10k
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadMinFillPer10k.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadMinFillPer10k",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadMinFillPer10k",
});
