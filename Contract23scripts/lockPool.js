#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.lockPool — write (signed transaction, needs PHANTASMA_WIF)
 * lockPool(from: address, poolId: number, durationSeconds: number)
 *
 * Time-locks the pool's liquidity until now + durationSeconds (unix seconds,
 * block time). Until then saturnliquidity.removePool reverts with "Pool
 * liquidity is time-locked until <unix>" and the pool cannot back a loan. from
 * must sign and be the pool's provider (saturnpools.getPoolProvider) or hold
 * its SATURN certificate. Every call, extensions included, sends getLockFee()
 * raw TAZ from the caller to getFeeWallet() (50 TAZ today). With no live lock,
 * the pool must carry no bond, rental, fee option, syndicate, launchpad or
 * loan (getPoolFinancialLockCount = 0). With a live lock the call is an
 * extension: the new end, counted from now, must be later than the current
 * end, so a lock can never be shortened, and the financial-product check is
 * skipped. The end is stored in saturnpools (getPoolLockUntil). This contract
 * records the caller (getLockedBy) and time (getLockedAt) of the latest call,
 * adds 1 to getLockCount and lists the pool in getLockedPoolIds.
 *
 * Usage: node Contract23scripts/lockPool.js <poolId> <durationSeconds>
 *   poolId (number): An active v4 pool (saturnpools.getPoolActive = 1) that
 *   is not burned.
 *   durationSeconds (number): Lock length in seconds, counted from now.
 *   getMinLockSeconds() to getMaxLockSeconds() (86,400 = 1 day to
 *   315,360,000 = 10 years today). To extend, pass more than the time left:
 *   getLockUntil(poolId) − now + the extra seconds.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-lockPool
 */

const { send } = require("../common");

send({
  file: "Contract23scripts/lockPool.js",
  contract: "saturnlplock",
  method: "lockPool",
  params: [
    { name: "from", type: "address", desc: "The pool's provider or SATURN certificate holder. Must sign. Pays the lock fee, so it needs getLockFee() raw TAZ." },
    { name: "poolId", type: "number", desc: "An active v4 pool (saturnpools.getPoolActive = 1) that is not burned." },
    { name: "durationSeconds", type: "number", desc: "Lock length in seconds, counted from now. getMinLockSeconds() to getMaxLockSeconds() (86,400 = 1 day to 315,360,000 = 10 years today). To extend, pass more t..." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlplock-lockPool",
});
