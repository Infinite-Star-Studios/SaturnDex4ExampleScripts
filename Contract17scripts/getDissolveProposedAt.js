#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getDissolveProposedAt — read (free, no wallet)
 * getDissolveProposedAt(launchpadId: number): number
 *
 * Returns the Unix timestamp when the current dissolution proposal was opened.
 * Returns 0 if no proposal exists.
 *
 * Returns number: Unix timestamp of proposal, or 0.
 *
 * Usage: node Contract17scripts/getDissolveProposedAt.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getDissolveProposedAt
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getDissolveProposedAt.js",
  contract: "saturnlaunchpad",
  method: "getDissolveProposedAt",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getDissolveProposedAt",
});
