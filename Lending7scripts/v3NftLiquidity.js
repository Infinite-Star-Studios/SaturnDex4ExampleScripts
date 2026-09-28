#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3NftLiquidity — read (free, no wallet)
 * v3NftLiquidity(nftId: number): number
 *
 * Returns the liquidity units recorded for the given v3 LP NFT. Divide by the
 * pool's total liquidity (v3PoolLiquidity) to get the NFT's pro-rata share of
 * pool reserves.
 *
 * Returns number: Liquidity units attributed to this NFT position.
 *
 * Usage: node Lending7scripts/v3NftLiquidity.js <nftId>
 *   nftId (number): On-chain series ID of the v3 LP NFT.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3NftLiquidity
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3NftLiquidity.js",
  contract: "saturndexadapt",
  method: "v3NftLiquidity",
  params: [
    { name: "nftId", type: "number", desc: "On-chain series ID of the v3 LP NFT." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3NftLiquidity",
});
