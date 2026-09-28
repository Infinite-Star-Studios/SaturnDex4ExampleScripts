#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getOrderStatus — read (free, no wallet)
 * getOrderStatus(orderId: number): number
 *
 * Returns the lifecycle status code. An id that was never assigned also reads
 * 0, so check orderId < getNextOrderId() or use the active-order views.
 *
 * Returns number: 0=active, 1=executed, 2=cancelled, 3=expired.
 *
 * Usage: node Contract14scripts/getOrderStatus.js <orderId>
 *   orderId (number): The order to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getOrderStatus
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getOrderStatus.js",
  contract: "saturnlimit",
  method: "getOrderStatus",
  params: [
    { name: "orderId", type: "number", desc: "The order to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getOrderStatus",
});
