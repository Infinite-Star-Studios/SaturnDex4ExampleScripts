#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getLockFee — read (free, no wallet)
 * getLockFee(): number
 *
 * TAZ each lockPool call pays, extensions included, in raw TAZ (9 decimals).
 *
 * Returns number: Raw TAZ. Live on mainnet and devnet: 50,000,000,000 (50
 * TAZ).
 *
 * Usage: node Contract23scripts/getLockFee.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getLockFee
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getLockFee.js",
  contract: "saturnlplock",
  method: "getLockFee",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getLockFee",
});
