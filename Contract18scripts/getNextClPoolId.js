#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getNextClPoolId — read (free, no wallet)
 * getNextClPoolId(): number
 *
 * Returns the ID that will be assigned to the next CL pool created. Pool IDs
 * are sequential starting from 1.
 *
 * Returns number: Next available pool ID.
 *
 * Usage: node Contract18scripts/getNextClPoolId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getNextClPoolId
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getNextClPoolId.js",
  contract: "saturnclpools",
  method: "getNextClPoolId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getNextClPoolId",
});
