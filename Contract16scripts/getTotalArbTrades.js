#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getTotalArbTrades — read (free, no wallet)
 * getTotalArbTrades(): number
 *
 * Returns the number of trades across all vaults.
 *
 * Returns number: Trade count, all vaults.
 *
 * Usage: node Contract16scripts/getTotalArbTrades.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getTotalArbTrades
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getTotalArbTrades.js",
  contract: "saturnvaults",
  method: "getTotalArbTrades",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getTotalArbTrades",
});
