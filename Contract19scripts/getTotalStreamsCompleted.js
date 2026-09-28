#!/usr/bin/env node
"use strict";

/**
 * saturntwamm.getTotalStreamsCompleted — read (free, no wallet)
 * getTotalStreamsCompleted(): number
 *
 * Returns the number of streams that have been fully executed to completion
 * (all input streamed).
 *
 * Returns number: All-time streams completed.
 *
 * Usage: node Contract19scripts/getTotalStreamsCompleted.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntwamm-getTotalStreamsCompleted
 */

const { read } = require("../common");

read({
  file: "Contract19scripts/getTotalStreamsCompleted.js",
  contract: "saturntwamm",
  method: "getTotalStreamsCompleted",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntwamm-getTotalStreamsCompleted",
});
