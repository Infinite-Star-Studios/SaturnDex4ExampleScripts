#!/usr/bin/env node
"use strict";

/**
 * saturnfees.getProviderLifetimeFees — read (free, no wallet)
 * getProviderLifetimeFees(poolId: number, tokenSymbol: string): number
 *
 * Cumulative provider fees accrued to a pool in one token since
 * saturnfees-4.1.2 added the counter (fees from before that build are not
 * counted), in 8-decimal scaled units. Unlike getProviderClaimable() it is
 * never reduced by claims or redirects, so it is the right number for "fees
 * earned to date" statistics and for the lifetime-fee metric that
 * saturnpredict markets settle on.
 *
 * Returns number: Scaled cumulative fee total.
 *
 * Usage: node Contract5scripts/getProviderLifetimeFees.js <poolId> <tokenSymbol>
 *   poolId (number): Pool to inspect.
 *   tokenSymbol (string): One of the pool's two tokens.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfees-getProviderLifetimeFees
 */

const { read } = require("../common");

read({
  file: "Contract5scripts/getProviderLifetimeFees.js",
  contract: "saturnfees",
  method: "getProviderLifetimeFees",
  params: [
    { name: "poolId", type: "number", desc: "Pool to inspect." },
    { name: "tokenSymbol", type: "string", desc: "One of the pool's two tokens." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfees-getProviderLifetimeFees",
});
