#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadTokenQuote — read (free, no wallet)
 * getLaunchpadTokenQuote(launchpadId: number): string
 *
 * Returns the symbol of the quote token buyers pay with.
 *
 * Returns string: Quote token symbol (e.g. "SOUL").
 *
 * Usage: node Contract17scripts/getLaunchpadTokenQuote.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadTokenQuote
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadTokenQuote.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadTokenQuote",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadTokenQuote",
});
