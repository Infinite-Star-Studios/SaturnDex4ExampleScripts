#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolCampaignLockCount — read (free, no wallet)
 * getPoolCampaignLockCount(poolId: number): number
 *
 * How many active reward campaigns currently reference this pool. When > 0,
 * the provider can't change the pool fee or remove the pool.
 *
 * Returns number: Number of active campaign locks on the pool.
 *
 * Usage: node Contract2scripts/getPoolCampaignLockCount.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolCampaignLockCount
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolCampaignLockCount.js",
  contract: "saturnpools",
  method: "getPoolCampaignLockCount",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolCampaignLockCount",
});
