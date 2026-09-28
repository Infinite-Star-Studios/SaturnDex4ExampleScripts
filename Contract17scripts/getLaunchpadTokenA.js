#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadTokenA — read (free, no wallet)
 * getLaunchpadTokenA(launchpadId: number): string
 *
 * Returns the symbol of the token being sold.
 *
 * Returns string: Token symbol (e.g. "MYTOKEN").
 *
 * Usage: node Contract17scripts/getLaunchpadTokenA.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadTokenA
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadTokenA.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadTokenA",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadTokenA",
});
