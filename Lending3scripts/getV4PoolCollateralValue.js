#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getV4PoolCollateralValue — read (free, no wallet)
 * getV4PoolCollateralValue(colId: number, baseToken: string, baseDex: number): number
 *
 * Directly values a type-2 (v4 pool) collateral position by calling
 * saturndexadapt.v4PoolValueInBase with the locked pool ID. Use when you
 * already know the position is a v4 pool and want to skip the type-dispatch
 * overhead.
 *
 * Returns number: Pool value in baseToken, 8-decimal scaled.
 *
 * Usage: node Lending3scripts/getV4PoolCollateralValue.js <colId> <baseToken> <baseDex>
 *   colId (number): Collateral position ID (type 2).
 *   baseToken (string): Token symbol to denominate the value in.
 *   baseDex (number): DEX version for baseToken's RA pricing pool.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getV4PoolCollateralValue
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getV4PoolCollateralValue.js",
  contract: "saturnvault",
  method: "getV4PoolCollateralValue",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 2)." },
    { name: "baseToken", type: "string", desc: "Token symbol to denominate the value in." },
    { name: "baseDex", type: "number", desc: "DEX version for baseToken's RA pricing pool." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getV4PoolCollateralValue",
});
