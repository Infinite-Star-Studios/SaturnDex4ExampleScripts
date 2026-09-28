#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getNextPoolId — read (free, no wallet)
 * getNextPoolId(): number
 *
 * The poolId that will be assigned to the next pool created.
 *
 * Returns number: Next pool ID (starts at 1).
 *
 * Usage: node Contract2scripts/getNextPoolId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getNextPoolId
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getNextPoolId.js",
  contract: "saturnpools",
  method: "getNextPoolId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getNextPoolId",
});
