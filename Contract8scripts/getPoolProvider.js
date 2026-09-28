#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getPoolProvider — read (free, no wallet)
 * getPoolProvider(poolId: number): address
 *
 * Passthrough to saturnpools.getPoolProvider(): the wallet (or contract, for
 * syndicate and launchpad pools) recorded as the pool's provider. For
 * ownership checks prefer SATURN.holdsPoolCertificate(), which follows the
 * NFT.
 *
 * Returns address: Provider address.
 *
 * Usage: node Contract8scripts/getPoolProvider.js <poolId>
 *   poolId (number): Pool to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getPoolProvider
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getPoolProvider.js",
  contract: "saturnrouter",
  method: "getPoolProvider",
  params: [
    { name: "poolId", type: "number", desc: "Pool to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getPoolProvider",
});
