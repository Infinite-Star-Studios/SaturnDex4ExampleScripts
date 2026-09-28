#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getMinDuration — read (free, no wallet)
 * getMinDuration(): number
 *
 * Returns the admin's floor on market length in seconds (added in 4.1.7).
 * createMarket requires endTime − now >= this value. 0 means no minimum: any
 * future endTime works.
 *
 * Returns number: Seconds; 0 on mainnet, 3 on devnet.
 *
 * Usage: node Contract15scripts/getMinDuration.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getMinDuration
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getMinDuration.js",
  contract: "saturnpredict",
  method: "getMinDuration",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getMinDuration",
});
