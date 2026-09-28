#!/usr/bin/env node
"use strict";

/**
 * saturnflash.getTotalFlashFeesCollected — read (free, no wallet)
 * getTotalFlashFeesCollected(): number
 *
 * Returns the lifetime total of flash fees paid to the protocol admin wallet
 * across all successful executeFlashArb calls. Raw amounts of different
 * tokenStart symbols are added together, so this is an activity counter, not a
 * value in one token.
 *
 * Returns number: Cumulative flash fees forwarded to admin, in raw token
 * units.
 *
 * Usage: node Contract20scripts/getTotalFlashFeesCollected.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-getTotalFlashFeesCollected
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/getTotalFlashFeesCollected.js",
  contract: "saturnflash",
  method: "getTotalFlashFeesCollected",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-getTotalFlashFeesCollected",
});
