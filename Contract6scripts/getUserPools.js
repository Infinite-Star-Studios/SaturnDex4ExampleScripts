#!/usr/bin/env node
"use strict";

/**
 * SATURN.getUserPools — read (free, no wallet)
 * getUserPools(from: address): number*
 *
 * Generator yielding every SATURN NFT token ID currently owned by the given
 * address. Each token ID maps to one pool: saturnpools.getNftPoolId(nftId)
 * gives the poolId, or read the NFT's properties (poolId, tokenA, tokenB,
 * name) through the RPC getNFT call. Token IDs are 256-bit numbers (up to 78
 * digits); keep them as strings or BigInt, since a JavaScript Number loses
 * precision (getUserPoolsData() returns them as strings). While a pool backs a
 * loan, its certificate sits in the lending vault (saturnvault) and is not
 * listed for the borrower.
 *
 * Returns number*: Iterable of SATURN NFT token IDs held by the address.
 *
 * Usage: node Contract6scripts/getUserPools.js <from>
 *   from (address): The wallet to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-getUserPools
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/getUserPools.js",
  contract: "SATURN",
  method: "getUserPools",
  params: [
    { name: "from", type: "address", desc: "The wallet to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-getUserPools",
});
