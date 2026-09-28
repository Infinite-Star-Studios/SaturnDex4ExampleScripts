#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.getAllClPoolIds — read (free, no wallet)
 * getAllClPoolIds(): number*
 *
 * Streams all ever-created CL pool IDs (including inactive ones) as a
 * sequence. Use getActiveClPoolIds() if you only want live pools.
 *
 * Returns number*: Sequence of all CL pool IDs (active and inactive).
 *
 * Usage: node Contract18scripts/getAllClPoolIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-getAllClPoolIds
 */

const { read } = require("../common");

read({
  file: "Contract18scripts/getAllClPoolIds.js",
  contract: "saturnclpools",
  method: "getAllClPoolIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnclpools-getAllClPoolIds",
});
