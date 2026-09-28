#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getDissolveProposed — read (free, no wallet)
 * getDissolveProposed(launchpadId: number): number
 *
 * Returns 1 once a dissolution proposal has been opened, 0 before. It is never
 * reset: the proposal stays open until executed and the flag stays 1 after
 * dissolution.
 *
 * Returns number: 1 = proposal open; 0 = none.
 *
 * Usage: node Contract17scripts/getDissolveProposed.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getDissolveProposed
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getDissolveProposed.js",
  contract: "saturnlaunchpad",
  method: "getDissolveProposed",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getDissolveProposed",
});
