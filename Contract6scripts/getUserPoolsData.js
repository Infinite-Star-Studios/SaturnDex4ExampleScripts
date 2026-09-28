#!/usr/bin/env node
"use strict";

/**
 * SATURN.getUserPoolsData — read (free, no wallet)
 * getUserPoolsData(from: address): string*
 *
 * Generator variant of getUserPools() that yields each owned SATURN NFT id as
 * a decimal string row (one id per row), so the 256-bit ids arrive without
 * precision loss. Handy for clients that already consume the pipe-delimited
 * *Data feeds elsewhere. Resolve each id to its pool via the NFT's ROM
 * (poolId, tokenA, tokenB fields) exactly as with getUserPools().
 *
 * Returns string*: Stream of NFT ids as decimal strings.
 *
 * Usage: node Contract6scripts/getUserPoolsData.js <from>
 *   from (address): Wallet to enumerate.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-getUserPoolsData
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/getUserPoolsData.js",
  contract: "SATURN",
  method: "getUserPoolsData",
  params: [
    { name: "from", type: "address", desc: "Wallet to enumerate." },
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-getUserPoolsData",
});
