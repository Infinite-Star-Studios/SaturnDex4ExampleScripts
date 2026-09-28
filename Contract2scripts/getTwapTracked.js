#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getTwapTracked — read (free, no wallet)
 * getTwapTracked(poolId: number): number
 *
 * 1 when the admin keeps a time-weighted average price for this pool
 * (setTwapTracked), 0 otherwise. The RA/TAZ reference pool the lending
 * protocol prices with is tracked (pool 33 on mainnet,
 * saturndexadapt.getReferencePool()).
 *
 * Returns number: 1 = tracked, 0 = not tracked.
 *
 * Usage: node Contract2scripts/getTwapTracked.js <poolId>
 *   poolId (number): The pool ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getTwapTracked
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getTwapTracked.js",
  contract: "saturnpools",
  method: "getTwapTracked",
  params: [
    { name: "poolId", type: "number", desc: "The pool ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getTwapTracked",
});
