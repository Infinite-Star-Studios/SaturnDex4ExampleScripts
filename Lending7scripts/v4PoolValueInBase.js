#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v4PoolValueInBase — read (free, no wallet)
 * v4PoolValueInBase(poolId: number, baseToken: string, baseDex: number): number
 *
 * Values an RA/TAZ v4 pool at its fair-LP value 2 × √(a × t × P) in scaled
 * TAZ, where a and t are its RA and TAZ reserves and P the spot TAZ-per-RA
 * price of the reference pool (getReferencePool), then converts to baseToken
 * (identity for "TAZ"). Since 1.1.0 this replaces the sum of both reserves at
 * spot, so swapping junk into a pool or skewing it does not raise its value.
 * This is the collateral value saturnvault and saturnloans.getCurrentLtv use.
 *
 * Returns number: Total pool value in scaled baseToken units.
 *
 * Usage: node Lending7scripts/v4PoolValueInBase.js <poolId> <baseToken> <baseDex>
 *   poolId (number): Numeric v4 pool ID.
 *   baseToken (string): Token to denominate the result in (e.g. "RA" or the
 *   loan token).
 *   baseDex (number): DEX version for the base token's RA pool (1 = v3, 2 =
 *   v4).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v4PoolValueInBase
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v4PoolValueInBase.js",
  contract: "saturndexadapt",
  method: "v4PoolValueInBase",
  params: [
    { name: "poolId", type: "number", desc: "Numeric v4 pool ID." },
    { name: "baseToken", type: "string", desc: "Token to denominate the result in (e.g. \"RA\" or the loan token)." },
    { name: "baseDex", type: "number", desc: "DEX version for the base token's RA pool (1 = v3, 2 = v4)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v4PoolValueInBase",
});
