#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3NftTokenA — read (free, no wallet)
 * v3NftTokenA(nftId: number): string
 *
 * Returns the symbol of token A recorded in the v3 LP NFT's metadata.
 *
 * Returns string: Symbol of token A for this LP position.
 *
 * Usage: node Lending7scripts/v3NftTokenA.js <nftId>
 *   nftId (number): On-chain series ID of the v3 LP NFT.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3NftTokenA
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3NftTokenA.js",
  contract: "saturndexadapt",
  method: "v3NftTokenA",
  params: [
    { name: "nftId", type: "number", desc: "On-chain series ID of the v3 LP NFT." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3NftTokenA",
});
