#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getActiveOrdersDataByUser — read (free, no wallet)
 * getActiveOrdersDataByUser(user: address): string*
 *
 * Same row layout as getActiveOrdersData() filtered to one owner — a user's
 * open-orders panel in one call.
 *
 * Returns string*: Stream of
 * "orderId|poolId|owner|tokenIn|tokenOut|amountIn|minAmountOut|maxAmountOut|bountyPer10k|expiry|status"
 * rows.
 *
 * Usage: node Contract14scripts/getActiveOrdersDataByUser.js <user>
 *   user (address): Order owner.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getActiveOrdersDataByUser
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getActiveOrdersDataByUser.js",
  contract: "saturnlimit",
  method: "getActiveOrdersDataByUser",
  params: [
    { name: "user", type: "address", desc: "Order owner." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getActiveOrdersDataByUser",
});
