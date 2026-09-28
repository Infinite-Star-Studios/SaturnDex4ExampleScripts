#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.getLockedPoolIds — read (free, no wallet)
 * getLockedPoolIds(): number*
 *
 * Every pool on the lock list: locked through lockPool and not yet released or
 * burned. Some locks may have run out; check getLockUntil or getLocked per
 * pool (or call releaseExpiredLock). The order is not stable: a release moves
 * the last pool into the freed slot.
 *
 * Returns number*: Pool IDs, one per yielded value; nothing when the list is
 * empty.
 *
 * Usage: node Contract23scripts/getLockedPoolIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-getLockedPoolIds
 */

const { read } = require("../common");

read({
  file: "Contract23scripts/getLockedPoolIds.js",
  contract: "saturnlplock",
  method: "getLockedPoolIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlplock-getLockedPoolIds",
});
