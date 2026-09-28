#!/usr/bin/env node
"use strict";

/**
 * saturnfees.getProviderClaimable — read (free, no wallet)
 * getProviderClaimable(poolId: number, tokenSymbol: string): number
 *
 * Returns the pending provider fee of one token of a pool, in 8-decimal scaled
 * units. It is claimable by the pool's provider, by the certificate holder of
 * a burned pool, or by the bond/rental contract while a redirect is active.
 * Call this once for tokenA and once for tokenB (or use
 * getProviderClaimablePair()). Apply saturnpools.scaleDown() before showing
 * the number to users.
 *
 * Returns number: Scaled pending fee amount for that token.
 *
 * Usage: node Contract5scripts/getProviderClaimable.js <poolId> <tokenSymbol>
 *   poolId (number): The pool ID.
 *   tokenSymbol (string): Either token in the pair.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfees-getProviderClaimable
 */

const { read } = require("../common");

read({
  file: "Contract5scripts/getProviderClaimable.js",
  contract: "saturnfees",
  method: "getProviderClaimable",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
    { name: "tokenSymbol", type: "string", desc: "Either token in the pair." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfees-getProviderClaimable",
});
