#!/usr/bin/env node
"use strict";

/**
 * saturnliquidity.removePool — write (signed transaction, needs PHANTASMA_WIF)
 * removePool(from: address, poolId: number)
 *
 * Removes a pool entirely. Both reserves are paid out in raw units together
 * with the pool's pending provider fees, the pool is deactivated, and its
 * SATURN certificate is burned if the caller holds it (otherwise the
 * certificate is left alone). The caller must hold the pool's SATURN
 * certificate or be its provider (saturnpools.getPoolProvider). Since
 * saturnpools 4.1.10 a certificate transfer also makes the new holder the
 * provider, so a seller loses the right to remove the pool; the provider route
 * remains so a pool whose certificate was destroyed can still be withdrawn.
 * The pool cannot be removed while it is enrolled in a reward campaign, held
 * by any financial product (bond, rental, fee option, syndicate, launchpad or
 * loan pledge), or burned or time-locked through saturnlplock.
 *
 * Returns void: Success = pool marked inactive and tokens returned. Emits
 * PoolRemoved(poolId, returnedA, returnedB, returnedPendingA,
 * returnedPendingB) in raw units.
 *
 * Usage: node Contract3scripts/removePool.js <poolId>
 *   poolId (number): Pool to remove.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnliquidity-removePool
 */

const { send } = require("../common");

send({
  file: "Contract3scripts/removePool.js",
  contract: "saturnliquidity",
  method: "removePool",
  params: [
    { name: "from", type: "address", desc: "Certificate holder or pool provider (must be witness); receives the payout." },
    { name: "poolId", type: "number", desc: "Pool to remove." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnliquidity-removePool",
});
