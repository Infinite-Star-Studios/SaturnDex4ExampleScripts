#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getAllLaunchpadIds — read (free, no wallet)
 * getAllLaunchpadIds(): number*
 *
 * Returns all launchpad IDs ever created, in creation order. The return type
 * `number*` is a Tomb generator/stream; the Phantasma SDK deserializes it as
 * an array. Use to build a full launchpad registry.
 *
 * Returns number*: Stream of all launchpad IDs.
 *
 * Usage: node Contract17scripts/getAllLaunchpadIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getAllLaunchpadIds
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getAllLaunchpadIds.js",
  contract: "saturnlaunchpad",
  method: "getAllLaunchpadIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getAllLaunchpadIds",
});
