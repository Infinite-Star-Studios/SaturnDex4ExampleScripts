#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getTwapCumulativeA — read (free, no wallet)
 * getTwapCumulativeA(poolId: number): number
 *
 * Accumulated price of token A in token B, Uniswap-v2 style: the sum of
 * (reserveB × getTwapScale() / reserveA) × the seconds each price held, up to
 * now (the interval since the last reserve write is added at the current
 * reserves, so no write is needed to read it). Two readings c1 at t1 and c2 at
 * t2 give the average price (c2 − c1) / (t2 − t1), scaled by 10^18. Several
 * reserve writes in one block add zero weight, so a swap in and back inside
 * one transaction does not move the average.
 *
 * Returns number: Price of A in B × 10^18 × seconds, cumulative.
 *
 * Usage: node Contract2scripts/getTwapCumulativeA.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getTwapCumulativeA
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getTwapCumulativeA.js",
  contract: "saturnpools",
  method: "getTwapCumulativeA",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getTwapCumulativeA",
});
