#!/usr/bin/env node
"use strict";

/**
 * saturnlimit.getActiveOrderIdsByUser — read (free, no wallet)
 * getActiveOrderIdsByUser(user: address): number*
 *
 * Yields the active order ids owned by a wallet.
 *
 * Returns number*: Stream of order ids.
 *
 * Usage: node Contract14scripts/getActiveOrderIdsByUser.js <user>
 *   user (address): Order owner.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlimit-getActiveOrderIdsByUser
 */

const { read } = require("../common");

read({
  file: "Contract14scripts/getActiveOrderIdsByUser.js",
  contract: "saturnlimit",
  method: "getActiveOrderIdsByUser",
  params: [
    { name: "user", type: "address", desc: "Order owner." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlimit-getActiveOrderIdsByUser",
});
