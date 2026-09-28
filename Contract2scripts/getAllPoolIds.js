#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getAllPoolIds — read (free, no wallet)
 * getAllPoolIds(): number*
 *
 * Generator yielding every poolId that has ever been created, including
 * removed ones. Filter with getPoolActive() if you only want live pools.
 *
 * Returns number*: Iterable of pool IDs.
 *
 * Usage: node Contract2scripts/getAllPoolIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getAllPoolIds
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getAllPoolIds.js",
  contract: "saturnpools",
  method: "getAllPoolIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getAllPoolIds",
});
