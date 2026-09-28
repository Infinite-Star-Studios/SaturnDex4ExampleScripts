#!/usr/bin/env node
"use strict";

/**
 * saturnfees.getProviderClaimablePair — read (free, no wallet)
 * getProviderClaimablePair(poolId: number): string
 *
 * Both pending provider balances of a pool in one call, packed as
 * "tokenA:<sym>_pendingA:<n>_tokenB:<sym>_pendingB:<n>". Amounts are in scaled
 * (8-decimal) units — pass them through saturnpools.scaleDown() to display raw
 * token amounts.
 *
 * Returns string: e.g.
 * "tokenA:KCAL_pendingA:123456_tokenB:SOUL_pendingB:7890".
 *
 * Usage: node Contract5scripts/getProviderClaimablePair.js <poolId>
 *   poolId (number): Pool to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfees-getProviderClaimablePair
 */

const { read } = require("../common");

read({
  file: "Contract5scripts/getProviderClaimablePair.js",
  contract: "saturnfees",
  method: "getProviderClaimablePair",
  params: [
    { name: "poolId", type: "number", desc: "Pool to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfees-getProviderClaimablePair",
});
