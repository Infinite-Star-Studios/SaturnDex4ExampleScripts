#!/usr/bin/env node
"use strict";

/**
 * saturnclpools.removeClPool — write (signed transaction, needs PHANTASMA_WIF)
 * removeClPool(from: address, poolId: number)
 *
 * Permanently deactivates a CL pool and returns all reserves plus any
 * unclaimed fees to the pool provider. Only the original creator of the pool
 * may call this. After removal the pool cannot be reactivated; poolId remains
 * in storage with active=0. Any accumulated fees are bundled into the refund —
 * a separate claimClFees call is not required.
 *
 * Usage: node Contract18scripts/removeClPool.js <poolId>
 *   poolId (number): Numeric ID of the CL pool to remove.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnclpools-removeClPool
 */

const { send } = require("../common");

send({
  file: "Contract18scripts/removeClPool.js",
  contract: "saturnclpools",
  method: "removeClPool",
  params: [
    { name: "from", type: "address", desc: "Pool provider; must match the address stored at pool creation." },
    { name: "poolId", type: "number", desc: "Numeric ID of the CL pool to remove." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnclpools-removeClPool",
});
