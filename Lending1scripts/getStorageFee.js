#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getStorageFee — read (free, no wallet)
 * getStorageFee(): number
 *
 * Always returns 0. Gen3 storage is funded by the transaction's SOUL data
 * escrow (maxData on the payer), not by any staking or SOUL charge through
 * this contract. Signature retained for ABI/upgrade compatibility only.
 *
 * Returns number: Always 0.
 *
 * Usage: node Lending1scripts/getStorageFee.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getStorageFee
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getStorageFee.js",
  contract: "saturnlendcfg",
  method: "getStorageFee",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getStorageFee",
});
