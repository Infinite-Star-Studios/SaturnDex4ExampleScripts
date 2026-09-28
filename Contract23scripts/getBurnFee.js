#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getBurnFee — read (free, no wallet)
 * getBurnFee(): number
 *
 * TAZ each burnPool call pays, in raw TAZ (9 decimals). 0 = burns are free.
 *
 * Returns number: Raw TAZ. Live on mainnet and devnet: 0.
 *
 * Usage: node Contract23scripts/getBurnFee.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getBurnFee
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getBurnFee.js",
  contract: "saturnlplock",
  method: "getBurnFee",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getBurnFee",
});
