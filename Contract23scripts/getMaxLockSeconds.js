#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getMaxLockSeconds — read (free, no wallet)
 * getMaxLockSeconds(): number
 *
 * Longest durationSeconds lockPool accepts. Since the duration counts from
 * now, no lock can end more than this far ahead.
 *
 * Returns number: Seconds. Live on mainnet and devnet: 315,360,000 (10 years).
 *
 * Usage: node Contract23scripts/getMaxLockSeconds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getMaxLockSeconds
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getMaxLockSeconds.js",
  contract: "saturnlplock",
  method: "getMaxLockSeconds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getMaxLockSeconds",
});
