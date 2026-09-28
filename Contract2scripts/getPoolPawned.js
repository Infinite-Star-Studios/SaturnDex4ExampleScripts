#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolPawned — read (free, no wallet)
 * getPoolPawned(poolId: number): number
 *
 * 1 while the pool is pledged as collateral for a saturnmarket loan (since
 * 4.1.8), 0 otherwise. A pledged pool holds a financial lock of exactly 1 and
 * its SATURN certificate sits in saturnvault; swaps, provider fees and
 * addLiquidity continue, but it cannot be removed, re-priced by the provider,
 * burned, time-locked, enrolled in a campaign or put under another product
 * until the loan is repaid (pledge released, certificate back to the borrower)
 * or liquidated / defaulted (the lender becomes the provider). pawnPool /
 * unpawnPool are unrelated deprecated stubs.
 *
 * Returns number: 1 = pledged to a loan, 0 = not pledged.
 *
 * Usage: node Contract2scripts/getPoolPawned.js <poolId>
 *   poolId (number): Pool to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolPawned
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolPawned.js",
  contract: "saturnpools",
  method: "getPoolPawned",
  params: [
    { name: "poolId", type: "number", desc: "Pool to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolPawned",
});
