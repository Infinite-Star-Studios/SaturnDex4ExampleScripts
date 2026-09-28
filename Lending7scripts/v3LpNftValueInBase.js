#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3LpNftValueInBase — read (free, no wallet)
 * v3LpNftValueInBase(nftId: number, baseToken: string, baseDex: number): number
 *
 * Values a v3 LP NFT position in terms of a base token. Computes the NFT's
 * pro-rata share of pool reserves (nftLiquidity / totalLiquidity) then prices
 * both token portions through RA into baseToken. This is the collateral value
 * used by saturnvault for v3 LP NFT deposits.
 *
 * Returns number: NFT position value in scaled baseToken units.
 *
 * Usage: node Lending7scripts/v3LpNftValueInBase.js <nftId> <baseToken> <baseDex>
 *   nftId (number): On-chain series ID of the v3 LP NFT.
 *   baseToken (string): Token to denominate the result in (e.g. "RA" or the
 *   loan token).
 *   baseDex (number): DEX version for the base token's RA pool (1 = v3, 2 =
 *   v4).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3LpNftValueInBase
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3LpNftValueInBase.js",
  contract: "saturndexadapt",
  method: "v3LpNftValueInBase",
  params: [
    { name: "nftId", type: "number", desc: "On-chain series ID of the v3 LP NFT." },
    { name: "baseToken", type: "string", desc: "Token to denominate the result in (e.g. \"RA\" or the loan token)." },
    { name: "baseDex", type: "number", desc: "DEX version for the base token's RA pool (1 = v3, 2 = v4)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3LpNftValueInBase",
});
