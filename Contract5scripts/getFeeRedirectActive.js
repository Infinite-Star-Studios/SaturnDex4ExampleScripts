#!/usr/bin/env node
"use strict";

/**
 * saturnfees.getFeeRedirectActive — read (free, no wallet)
 * getFeeRedirectActive(poolId: number): number
 *
 * Returns 1 if the pool currently has a fee redirect active (the fee stream is
 * owned by a bond or rental), 0 otherwise. Use this to disable the "Claim
 * Fees" button in your UI and show the right explanation to the provider.
 *
 * Returns number: 1 = fees redirected, 0 = free to claim.
 *
 * Usage: node Contract5scripts/getFeeRedirectActive.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfees-getFeeRedirectActive
 */

const { read } = require("../common");

read({
  file: "Contract5scripts/getFeeRedirectActive.js",
  contract: "saturnfees",
  method: "getFeeRedirectActive",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfees-getFeeRedirectActive",
});
