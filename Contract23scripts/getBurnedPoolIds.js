#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getBurnedPoolIds — read (free, no wallet)
 * getBurnedPoolIds(): number*
 *
 * Every burned pool, in the order they were burned. The list only grows.
 *
 * Returns number*: Pool IDs, one per yielded value; nothing when no pool is
 * burned.
 *
 * Usage: node Contract23scripts/getBurnedPoolIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getBurnedPoolIds
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getBurnedPoolIds.js",
  contract: "saturnlplock",
  method: "getBurnedPoolIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getBurnedPoolIds",
});
