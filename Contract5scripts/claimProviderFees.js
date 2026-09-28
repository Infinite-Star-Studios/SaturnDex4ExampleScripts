#!/usr/bin/env node
"use strict";

/**
 * saturnfees.claimProviderFees — write (signed transaction, needs PHANTASMA_WIF)
 * claimProviderFees(from: address, poolId: number)
 *
 * Sweeps all pending provider fees of a pool, both tokens at once, to the
 * caller. Pending balances are scaled down to raw units and paid out of
 * saturnliquidity custody. Who may claim: for a normal pool, its provider
 * (saturnpools.getPoolProvider, which follows the SATURN certificate since
 * saturnpools 4.1.10); since saturnfees-4.1.3, for a burned pool
 * (saturnlplock), only the current holder of its SATURN certificate, the
 * pool's fee key. The call reverts while a fee redirect is active (a bond or
 * rental owns the fee stream).
 *
 * Returns void: Success = both pending balances zeroed and paid to from in raw
 * units. Emits FeesClaimed(poolId, tokenA, tokenB, realClaimA, realClaimB).
 *
 * Usage: node Contract5scripts/claimProviderFees.js <poolId>
 *   poolId (number): Pool whose fees to claim.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfees-claimProviderFees
 */

const { send } = require("../common");

send({
  file: "Contract5scripts/claimProviderFees.js",
  contract: "saturnfees",
  method: "claimProviderFees",
  params: [
    { name: "from", type: "address", desc: "Pool provider, or the certificate holder of a burned pool (must be witness)." },
    { name: "poolId", type: "number", desc: "Pool whose fees to claim." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnfees-claimProviderFees",
});
