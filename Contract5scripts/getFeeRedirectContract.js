#!/usr/bin/env node
"use strict";

/**
 * saturnfees.getFeeRedirectContract — read (free, no wallet)
 * getFeeRedirectContract(poolId: number): string
 *
 * Name of the contract that owns (or last owned) the pool's provider-fee
 * redirect: "saturnbonds" or "saturnrental", the only callers setFeeRedirect
 * accepts. Empty string if no redirect was ever set. Syndicate and launchpad
 * pools are not redirects: those contracts are the pool's provider. Read it
 * together with getFeeRedirectActive() to explain to a provider why
 * claimProviderFees() is refused.
 *
 * Returns string: Redirect owner contract name, or "".
 *
 * Usage: node Contract5scripts/getFeeRedirectContract.js <poolId>
 *   poolId (number): Pool to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfees-getFeeRedirectContract
 */

const { read } = require("../common");

read({
  file: "Contract5scripts/getFeeRedirectContract.js",
  contract: "saturnfees",
  method: "getFeeRedirectContract",
  params: [
    { name: "poolId", type: "number", desc: "Pool to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfees-getFeeRedirectContract",
});
