#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3NftTokenB — read (free, no wallet)
 * v3NftTokenB(nftId: number): string
 *
 * Returns the symbol of token B recorded in the v3 LP NFT's metadata.
 *
 * Returns string: Symbol of token B for this LP position.
 *
 * Usage: node Lending7scripts/v3NftTokenB.js <nftId>
 *   nftId (number): On-chain series ID of the v3 LP NFT.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3NftTokenB
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3NftTokenB.js",
  contract: "saturndexadapt",
  method: "v3NftTokenB",
  params: [
    { name: "nftId", type: "number", desc: "On-chain series ID of the v3 LP NFT." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3NftTokenB",
});
