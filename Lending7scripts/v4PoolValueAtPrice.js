#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolValueAtPrice — read (free, no wallet)
 * v4PoolValueAtPrice(poolId: number, priceQ: number): number
 *
 * v4PoolValueInBase in TAZ at a TAZ-per-RA price you supply (scaled by 10^18)
 * instead of the reference's spot price. saturnloans uses it with the average
 * price since a liquidation flag.
 *
 * Returns number: Pool value in scaled TAZ.
 *
 * Usage: node Lending7scripts/v4PoolValueAtPrice.js <poolId> <priceQ>
 *   poolId (number): An RA/TAZ v4 pool.
 *   priceQ (number): TAZ per RA × 10^18, > 0.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolValueAtPrice
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolValueAtPrice.js",
  contract: "saturndexadapt",
  method: "v4PoolValueAtPrice",
  params: [
    { name: "poolId", type: "number", desc: "An RA/TAZ v4 pool." },
    { name: "priceQ", type: "number", desc: "TAZ per RA × 10^18, > 0." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolValueAtPrice",
});
