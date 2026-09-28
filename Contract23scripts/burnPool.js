#!/usr/bin/env node
"use strict";

/**
 * saturnlplock.burnPool — write (signed transaction, needs PHANTASMA_WIF)
 * burnPool(from: address, poolId: number)
 *
 * Burns the pool's liquidity forever. There is no undo.
 * saturnpools.getPoolBurned becomes 1 and saturnliquidity.removePool reverts
 * with "Pool liquidity is burned - it can never be withdrawn" from then on.
 * The reserves stay in the pool and keep trading. The SATURN certificate
 * becomes the pool's fee key: saturnfees.claimProviderFees pays the burned
 * pool's provider fees only to the certificate holder, the certificate cannot
 * be destroyed, and saturnpools.updatePoolFee can only lower the fee. from
 * must sign and be the provider or hold the certificate. Pays getBurnFee() TAZ
 * to getFeeWallet() (0 today, so a burn is free). With no live time lock, the
 * pool must carry no bond, rental, fee option, syndicate, launchpad or loan
 * (getPoolFinancialLockCount = 0); with a live lock that check is skipped. The
 * burn takes the pool off getLockedPoolIds and adds it to getBurnedPoolIds; a
 * lock end already stored stays in getLockUntil.
 *
 * Usage: node Contract23scripts/burnPool.js <poolId>
 *   poolId (number): An active v4 pool that is not burned yet.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlplock-burnPool
 */

const { send } = require("../common");

send({
  file: "Contract23scripts/burnPool.js",
  contract: "saturnlplock",
  method: "burnPool",
  params: [
    { name: "from", type: "address", desc: "The pool's provider or SATURN certificate holder. Must sign. Needs getBurnFee() raw TAZ when that is above 0." },
    { name: "poolId", type: "number", desc: "An active v4 pool that is not burned yet." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlplock-burnPool",
});
