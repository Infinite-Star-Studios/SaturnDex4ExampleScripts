#!/usr/bin/env node
"use strict";

/**
 * saturnflash.getFlashEnabled — read (free, no wallet)
 * getFlashEnabled(): number
 *
 * Returns 1 if flash arbitrage is currently active, 0 if the admin has paused
 * it. Check this before attempting executeFlashArb to surface a clear status
 * in your bot or UI.
 *
 * Returns number: 1 = enabled; 0 = paused by admin.
 *
 * Usage: node Contract20scripts/getFlashEnabled.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-getFlashEnabled
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/getFlashEnabled.js",
  contract: "saturnflash",
  method: "getFlashEnabled",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-getFlashEnabled",
});
