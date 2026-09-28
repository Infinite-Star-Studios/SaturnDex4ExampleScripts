#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getStorageFee — read (free, no wallet)
 * getStorageFee(): number
 *
 * Always returns 0. The protocol no longer collects SOUL for storage. On
 * Phantasma the transaction itself escrows a small amount of SOUL per new
 * storage key it creates (about 0.002 SOUL, refunded when the key is later
 * deleted), which is why wallets that create pools, orders, bonds or loans
 * should hold a little SOUL besides KCAL for gas.
 *
 * Returns number: Always 0.
 *
 * Usage: node Contract1scripts/getStorageFee.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getStorageFee
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getStorageFee.js",
  contract: "saturnadmin",
  method: "getStorageFee",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getStorageFee",
});
