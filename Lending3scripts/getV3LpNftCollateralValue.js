#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getV3LpNftCollateralValue — read (free, no wallet)
 * getV3LpNftCollateralValue(colId: number, baseToken: string, baseDex: number): number
 *
 * Values a type-3 (v3 LP NFT) collateral position by delegating to
 * saturndexadapt.v3LpNftValueInBase using the stored NFT ID. Reflects live
 * reserve state of the v3 pool as fee accrual continues while the NFT is in
 * custody.
 *
 * Returns number: NFT LP value in baseToken, 8-decimal scaled.
 *
 * Usage: node Lending3scripts/getV3LpNftCollateralValue.js <colId> <baseToken> <baseDex>
 *   colId (number): Collateral position ID (type 3).
 *   baseToken (string): Token symbol to denominate the value in.
 *   baseDex (number): DEX version for baseToken's RA pricing pool.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getV3LpNftCollateralValue
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getV3LpNftCollateralValue.js",
  contract: "saturnvault",
  method: "getV3LpNftCollateralValue",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 3)." },
    { name: "baseToken", type: "string", desc: "Token symbol to denominate the value in." },
    { name: "baseDex", type: "number", desc: "DEX version for baseToken's RA pricing pool." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getV3LpNftCollateralValue",
});
