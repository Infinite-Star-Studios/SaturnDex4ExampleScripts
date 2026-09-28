#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadQuotePerA — read (free, no wallet)
 * getLaunchpadQuotePerA(launchpadId: number): number
 *
 * Returns the fixed price: how many raw units of tokenQuote purchase one raw
 * unit of tokenA.
 *
 * Returns number: Quote units per tokenA unit.
 *
 * Usage: node Contract17scripts/getLaunchpadQuotePerA.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadQuotePerA
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadQuotePerA.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadQuotePerA",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadQuotePerA",
});
