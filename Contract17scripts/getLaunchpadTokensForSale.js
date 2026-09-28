#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadTokensForSale — read (free, no wallet)
 * getLaunchpadTokensForSale(launchpadId: number): number
 *
 * Returns the original total tokenA amount offered. This field retains its
 * original value even after dissolution (v4.1.1 audit fix).
 *
 * Returns number: Raw units of tokenA originally for sale.
 *
 * Usage: node Contract17scripts/getLaunchpadTokensForSale.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadTokensForSale
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadTokensForSale.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadTokensForSale",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadTokensForSale",
});
