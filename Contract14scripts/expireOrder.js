#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.expireOrder — write (signed transaction, needs PHANTASMA_WIF)
 * expireOrder(from: address, orderId: number)
 *
 * Anyone can mark an order as expired once its expiryTime has passed. The
 * deposit is refunded to the owner in the same call — a convenience for
 * long-tail cleanup.
 *
 * Usage: node Contract14scripts/expireOrder.js <orderId>
 *   orderId (number): An active order with expiry > 0 and now >= expiry.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-expireOrder
 */

const { send } = require("../common");

send({
  file: "Contract14scripts/expireOrder.js",
  contract: "saturnlimit",
  method: "expireOrder",
  params: [
    { name: "from", type: "address", desc: "Any signer: must be a witness but need not own the order. Earns nothing." },
    { name: "orderId", type: "number", desc: "An active order with expiry > 0 and now >= expiry." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlimit-expireOrder",
});
