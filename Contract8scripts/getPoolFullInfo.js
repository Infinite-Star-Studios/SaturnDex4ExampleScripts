#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getPoolFullInfo — read (free, no wallet)
 * getPoolFullInfo(poolId: number): string
 *
 * One-call view that returns every field a frontend typically needs to render
 * a pool row: tokens, scaled reserves, fee rate, active flag, campaign lock
 * count and financial lock count, packed into a single underscore-delimited
 * string. The obsolete pawned field was dropped in 4.1.1; read
 * saturnpools.getPoolPawned() to see whether a pool backs a loan.
 *
 * Returns string: Format:
 * "tokenA:<s>_tokenB:<s>_resA:<n>_resB:<n>_fee:<n>_active:<0|1>_campLocks:<n>_finLocks:<n>",
 * reserves in 8-decimal scaled units.
 *
 * Usage: node Contract8scripts/getPoolFullInfo.js <poolId>
 *   poolId (number): Pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getPoolFullInfo
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getPoolFullInfo.js",
  contract: "saturnrouter",
  method: "getPoolFullInfo",
  params: [
    { name: "poolId", type: "number", desc: "Pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getPoolFullInfo",
});
