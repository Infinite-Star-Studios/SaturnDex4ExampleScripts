#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getProviderClaimable — read (free, no wallet)
 * getProviderClaimable(poolId: number, tokenSymbol: string): number
 *
 * Convenience re-export of SaturnFees.getProviderClaimable() so your app can
 * hit a single contract.
 *
 * Returns number: Scaled pending provider fees for that token.
 *
 * Usage: node Contract8scripts/getProviderClaimable.js <poolId> <tokenSymbol>
 *   poolId (number): Pool ID.
 *   tokenSymbol (string): Either token in the pair.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getProviderClaimable
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getProviderClaimable.js",
  contract: "saturnrouter",
  method: "getProviderClaimable",
  params: [
    { name: "poolId", type: "number", desc: "Pool ID." },
    { name: "tokenSymbol", type: "string", desc: "Either token in the pair." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getProviderClaimable",
});
