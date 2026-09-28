#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getActiveBondIds — read (free, no wallet)
 * getActiveBondIds(): number*
 *
 * Yields the ids of bonds in status 1 (purchased, not yet settled).
 *
 * Returns number*: Stream of bond ids.
 *
 * Usage: node Contract9scripts/getActiveBondIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getActiveBondIds
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getActiveBondIds.js",
  contract: "saturnbonds",
  method: "getActiveBondIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getActiveBondIds",
});
