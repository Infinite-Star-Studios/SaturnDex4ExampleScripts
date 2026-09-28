#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderBountyPer10k — read (free, no wallet)
 * getOrderBountyPer10k(orderId: number): number
 *
 * Executor bounty in units of 1/10,000 of the output above minAmountOut
 * (0..500). Bounty = (amountOut − minAmountOut) × this / 10000.
 *
 * Returns number: Bounty per 10,000.
 *
 * Usage: node Contract14scripts/getOrderBountyPer10k.js <orderId>
 *   orderId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderBountyPer10k
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderBountyPer10k.js",
  contract: "saturnlimit",
  method: "getOrderBountyPer10k",
  params: [
    { name: "orderId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderBountyPer10k",
});
