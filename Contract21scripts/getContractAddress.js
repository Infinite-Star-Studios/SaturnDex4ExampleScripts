#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getContractAddress — read (free, no wallet)
 * getContractAddress(): address
 *
 * Returns the on-chain address of this contract. Use it for balance lookups
 * (getAccount). There are no token approvals: stake() moves the tokens with
 * the staker's own signature.
 *
 * Returns address: The deployed address of the saturnholders contract.
 *
 * Usage: node Contract21scripts/getContractAddress.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getContractAddress
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getContractAddress.js",
  contract: "saturnholders",
  method: "getContractAddress",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getContractAddress",
});
