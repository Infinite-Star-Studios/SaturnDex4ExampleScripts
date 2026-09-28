#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderInfo — read (free, no wallet)
 * getOrderInfo(orderId: number): string
 *
 * One-shot status snapshot. Returns an underscore-delimited string with the
 * key fields.
 *
 * Returns string:
 * pool:<poolId>_in:<tokenIn>_out:<tokenOut>_amtIn:<raw>_minOut:<raw>_maxOut:<raw>_bounty:<per10k>_expiry:<unix>_status:<status>
 *
 * Usage: node Contract14scripts/getOrderInfo.js <orderId>
 *   orderId (number): The order to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderInfo
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderInfo.js",
  contract: "saturnlimit",
  method: "getOrderInfo",
  params: [
    { name: "orderId", type: "number", desc: "The order to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderInfo",
});
