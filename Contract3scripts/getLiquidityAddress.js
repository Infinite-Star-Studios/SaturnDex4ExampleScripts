#!/usr/bin/env node
"use strict";

/**
 * saturnliquidity.getLiquidityAddress — read (free, no wallet)
 * getLiquidityAddress(): address
 *
 * Returns the custody address that holds every pool's reserves, the unclaimed
 * provider fees and the holder-reward slices; saturnflash borrows from this
 * same balance (saturnflash.getMaxBorrowable reads it). Other contracts
 * transfer tokens here before calling swapFromContract(); a frontend can use
 * it to show total value locked per token.
 *
 * Returns address: The SaturnLiquidity contract address:
 * S3dCxj4CLFc5WsFwDMuzP85dygnRzsWo7NVaecHurU2VmMA on mainnet and devnet.
 *
 * Usage: node Contract3scripts/getLiquidityAddress.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnliquidity-getLiquidityAddress
 */

const { read } = require("../common");

read({
  file: "Contract3scripts/getLiquidityAddress.js",
  contract: "saturnliquidity",
  method: "getLiquidityAddress",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnliquidity-getLiquidityAddress",
});
