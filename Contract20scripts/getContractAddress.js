#!/usr/bin/env node
"use strict";

/**
 * saturnflash.getContractAddress — read (free, no wallet)
 * getContractAddress(): address
 *
 * Returns the on-chain address of this contract. saturnflash holds tokens only
 * inside an executeFlashArb call, so its balance is normally 0; you never send
 * it tokens and there is nothing to approve.
 *
 * Returns address: The deployed address of the saturnflash contract.
 *
 * Usage: node Contract20scripts/getContractAddress.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnflash-getContractAddress
 */

const { read } = require("../common");

read({
  file: "Contract20scripts/getContractAddress.js",
  contract: "saturnflash",
  method: "getContractAddress",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnflash-getContractAddress",
});
