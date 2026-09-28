#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getPoolTokenA — read (free, no wallet)
 * getPoolTokenA(poolId: number): string
 *
 * Returns the symbol of the pool's first token (slot A). Note: A/B slot order
 * is provider-chosen at creation and is NOT canonical.
 *
 * Returns string: Token symbol stored in slot A.
 *
 * Usage: node Contract2scripts/getPoolTokenA.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getPoolTokenA
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getPoolTokenA.js",
  contract: "saturnpools",
  method: "getPoolTokenA",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getPoolTokenA",
});
