#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.cancelOrder — write (signed transaction, needs PHANTASMA_WIF)
 * cancelOrder(from: address, orderId: number)
 *
 * Order owner cancels an active order and gets the full deposit refunded. Only
 * works while status = 0 (active).
 *
 * Usage: node Contract14scripts/cancelOrder.js <orderId>
 *   orderId (number): An active order.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-cancelOrder
 */

const { send } = require("../common");

send({
  file: "Contract14scripts/cancelOrder.js",
  contract: "saturnlimit",
  method: "cancelOrder",
  params: [
    { name: "from", type: "address", desc: "Must be the order owner." },
    { name: "orderId", type: "number", desc: "An active order." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlimit-cancelOrder",
});
