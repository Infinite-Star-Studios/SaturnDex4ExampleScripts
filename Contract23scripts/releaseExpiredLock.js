#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.releaseExpiredLock — write (signed transaction, needs PHANTASMA_WIF)
 * releaseExpiredLock(poolId: number)
 *
 * Housekeeping that anyone may call; it needs no pool rights, only gas. Takes
 * a pool whose lock has run out off getLockedPoolIds. Withdrawal never needs
 * it: saturnpools compares getPoolLockUntil with the clock, so removePool
 * works as soon as the lock ends. It changes nothing in saturnpools and keeps
 * getLockedBy, getLockedAt and getLockCount. The last pool in the list moves
 * into the freed slot, so the list order changes.
 *
 * Usage: node Contract23scripts/releaseExpiredLock.js <poolId>
 *   poolId (number): A pool in getLockedPoolIds whose getLockUntil is at or
 *   before now.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-releaseExpiredLock
 */

const { send } = require("../common");

send({
  file: "Contract23scripts/releaseExpiredLock.js",
  contract: "saturnlplock",
  method: "releaseExpiredLock",
  params: [
    { name: "poolId", type: "number", desc: "A pool in getLockedPoolIds whose getLockUntil is at or before now." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturnlplock-releaseExpiredLock",
});
