#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getTotalPoolCount — read (free, no wallet)
 * getTotalPoolCount(): number
 *
 * Total number of pools ever created in the protocol, including removed ones.
 *
 * Returns number: Total pool count.
 *
 * Usage: node Contract2scripts/getTotalPoolCount.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getTotalPoolCount
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getTotalPoolCount.js",
  contract: "saturnpools",
  method: "getTotalPoolCount",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getTotalPoolCount",
});
