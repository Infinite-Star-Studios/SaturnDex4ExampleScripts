#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolProvider — read (free, no wallet)
 * v4PoolProvider(poolId: number): address
 *
 * Returns the address of the liquidity provider for a v4 pool. Useful to
 * verify ownership before pledging or locking a pool as collateral.
 *
 * Returns address: Wallet address of the pool's single provider.
 *
 * Usage: node Lending7scripts/v4PoolProvider.js <poolId>
 *   poolId (number): Numeric pool ID in the v4 PoolRegistry.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolProvider
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolProvider.js",
  contract: "saturndexadapt",
  method: "v4PoolProvider",
  params: [
    { name: "poolId", type: "number", desc: "Numeric pool ID in the v4 PoolRegistry." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolProvider",
});
