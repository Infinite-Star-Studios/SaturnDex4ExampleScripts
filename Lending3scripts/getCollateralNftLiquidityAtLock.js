#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralNftLiquidityAtLock — read (free, no wallet)
 * getCollateralNftLiquidityAtLock(colId: number): number
 *
 * Returns the liquidity snapshot recorded when the SATRN LP NFT was deposited
 * into the vault. Use this as the baseline to assess how the pool's depth has
 * changed since the NFT was locked.
 *
 * Returns number: NFT liquidity at deposit time.
 *
 * Usage: node Lending3scripts/getCollateralNftLiquidityAtLock.js <colId>
 *   colId (number): Collateral position ID (type 3).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralNftLiquidityAtLock
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralNftLiquidityAtLock.js",
  contract: "saturnvault",
  method: "getCollateralNftLiquidityAtLock",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 3)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralNftLiquidityAtLock",
});
