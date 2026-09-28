#!/usr/bin/env node
"use strict";

/**
 * saturnswap.getContractAddress — read (free, no wallet)
 * getContractAddress(): address
 *
 * Returns the on-chain address of the SaturnSwap contract. The swap engine
 * never holds tokens: swap inputs, reserves and unclaimed fees all sit at
 * saturnliquidity.getLiquidityAddress(), and the contracts allowed to call
 * swapFromContract() transfer their input there, not here. Useful mainly to
 * identify saturnswap in transaction traces.
 *
 * Returns address: The SaturnSwap contract's address.
 *
 * Usage: node Contract4scripts/getContractAddress.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnswap-getContractAddress
 */

const { read } = require("../common");

read({
  file: "Contract4scripts/getContractAddress.js",
  contract: "saturnswap",
  method: "getContractAddress",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnswap-getContractAddress",
});
