#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getMinLockSeconds — read (free, no wallet)
 * getMinLockSeconds(): number
 *
 * Shortest durationSeconds lockPool accepts.
 *
 * Returns number: Seconds. Live on mainnet and devnet: 86,400 (1 day).
 *
 * Usage: node Contract23scripts/getMinLockSeconds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getMinLockSeconds
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getMinLockSeconds.js",
  contract: "saturnlplock",
  method: "getMinLockSeconds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getMinLockSeconds",
});
