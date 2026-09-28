#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.claimClFees — write (signed transaction, needs PHANTASMA_WIF)
 * claimClFees(from: address, poolId: number)
 *
 * Withdraws all accumulated swap fees from both sides of a CL pool to the pool
 * provider. Fees are denominated in the raw token amounts that were charged at
 * swap time. After claiming, the fee accumulators reset to zero. The pool does
 * not need to be active — fees can be claimed even on an inactive pool (though
 * removeClPool bundles fees into the refund anyway, so a separate claim before
 * removal is optional).
 *
 * Usage: node Contract18scripts/claimClFees.js <poolId>
 *   poolId (number): ID of the CL pool whose fees to collect.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-claimClFees
 */

const { send } = require("../common");

send({
  file: "Contract18scripts/claimClFees.js",
  contract: "saturnclpools",
  method: "claimClFees",
  params: [
    { name: "from", type: "address", desc: "Pool provider; must match the stored provider address." },
    { name: "poolId", type: "number", desc: "ID of the CL pool whose fees to collect." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnclpools-claimClFees",
});
