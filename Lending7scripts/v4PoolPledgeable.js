#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolPledgeable — read (free, no wallet)
 * v4PoolPledgeable(owner: address, poolId: number): number
 *
 * 1 when owner could pledge the pool now: active, provided by owner, not
 * pledged, no financial or campaign lock, withdrawable (not burned, no live
 * time lock), no fee redirect, and owner holds its SATURN certificate.
 * saturnmarket.postLoanRequest and submitQuote require it; the pair must also
 * be RA/TAZ (anchoredPair), which this view does not check.
 *
 * Returns number: 1 = pledgeable, 0 = not.
 *
 * Usage: node Lending7scripts/v4PoolPledgeable.js <owner> <poolId>
 *   owner (address): Would-be borrower.
 *   poolId (number): v4 pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolPledgeable
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolPledgeable.js",
  contract: "saturndexadapt",
  method: "v4PoolPledgeable",
  params: [
    { name: "owner", type: "address", desc: "Would-be borrower." },
    { name: "poolId", type: "number", desc: "v4 pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolPledgeable",
});
