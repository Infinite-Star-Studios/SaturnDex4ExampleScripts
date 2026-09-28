#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3NftPairKey — read (free, no wallet)
 * v3NftPairKey(nftId: number): string
 *
 * Returns the v3 pool pair key associated with the given LP NFT ID. Use to
 * identify which pool the NFT represents before valuing it as collateral.
 *
 * Returns string: Pair key string, e.g. "MKST_RA".
 *
 * Usage: node Lending7scripts/v3NftPairKey.js <nftId>
 *   nftId (number): On-chain series ID of the v3 LP NFT.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3NftPairKey
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3NftPairKey.js",
  contract: "saturndexadapt",
  method: "v3NftPairKey",
  params: [
    { name: "nftId", type: "number", desc: "On-chain series ID of the v3 LP NFT." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3NftPairKey",
});
