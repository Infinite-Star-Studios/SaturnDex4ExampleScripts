#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getTotalStreamsPlaced — read (free, no wallet)
 * getTotalStreamsPlaced(): number
 *
 * Returns the cumulative count of all streams ever placed, including completed
 * and cancelled ones.
 *
 * Returns number: All-time streams placed.
 *
 * Usage: node Contract19scripts/getTotalStreamsPlaced.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getTotalStreamsPlaced
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getTotalStreamsPlaced.js",
  contract: "saturntwamm",
  method: "getTotalStreamsPlaced",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getTotalStreamsPlaced",
});
