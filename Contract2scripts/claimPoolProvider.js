#!/usr/bin/env node
"use strict";

/**
 * saturnpools.claimPoolProvider — write (signed transaction, needs PHANTASMA_WIF)
 * claimPoolProvider(from: address, poolId: number)
 *
 * The holder of a pool's SATURN certificate takes the provider role. Needed
 * for pools whose certificate moved before 4.1.10 (when the provider did not
 * follow the certificate); since 4.1.10 every certificate transfer does this
 * automatically. Also records the certificate id to pool id map. Refused while
 * the pool is pledged to a loan, under a bond, rental or fee option, or
 * enrolled in a reward campaign.
 *
 * Usage: node Contract2scripts/claimPoolProvider.js <poolId>
 *   poolId (number): Pool whose certificate from holds.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-claimPoolProvider
 */

const { send } = require("../common");

send({
  file: "Contract2scripts/claimPoolProvider.js",
  contract: "saturnpools",
  method: "claimPoolProvider",
  params: [
    { name: "from", type: "address", desc: "Certificate holder (must be the transaction witness)." },
    { name: "poolId", type: "number", desc: "Pool whose certificate from holds." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnpools-claimPoolProvider",
});
