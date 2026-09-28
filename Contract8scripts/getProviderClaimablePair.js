#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getProviderClaimablePair — read (free, no wallet)
 * getProviderClaimablePair(poolId: number): string
 *
 * Passthrough to saturnfees.getProviderClaimablePair(): both pending provider
 * balances of a pool packed as
 * "tokenA:<sym>_pendingA:<n>_tokenB:<sym>_pendingB:<n>" (scaled units).
 *
 * Returns string: Packed pending balances.
 *
 * Usage: node Contract8scripts/getProviderClaimablePair.js <poolId>
 *   poolId (number): Pool to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getProviderClaimablePair
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getProviderClaimablePair.js",
  contract: "saturnrouter",
  method: "getProviderClaimablePair",
  params: [
    { name: "poolId", type: "number", desc: "Pool to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getProviderClaimablePair",
});
