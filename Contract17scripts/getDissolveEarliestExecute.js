#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getDissolveEarliestExecute — read (free, no wallet)
 * getDissolveEarliestExecute(launchpadId: number): number
 *
 * Returns the earliest Unix timestamp at which `executeDissolve` can be called
 * (proposedAt + 72 hours). Returns 0 if no proposal exists. Use this to show a
 * countdown timer in your UI.
 *
 * Returns number: Earliest executable timestamp, or 0 if no proposal.
 *
 * Usage: node Contract17scripts/getDissolveEarliestExecute.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getDissolveEarliestExecute
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getDissolveEarliestExecute.js",
  contract: "saturnlaunchpad",
  method: "getDissolveEarliestExecute",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getDissolveEarliestExecute",
});
