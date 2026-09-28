#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralTokenAmount — read (free, no wallet)
 * getCollateralTokenAmount(colId: number): number
 *
 * Raw amount held for a type-1 (single-token) collateral position. Always 0 in
 * v1.0 because token collateral is disabled — LP positions report their size
 * through the V4 pool / V3 NFT field getters instead.
 *
 * Returns number: Raw token amount, 0 for LP-backed positions.
 *
 * Usage: node Lending3scripts/getCollateralTokenAmount.js <colId>
 *   colId (number): Collateral position id.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralTokenAmount
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralTokenAmount.js",
  contract: "saturnvault",
  method: "getCollateralTokenAmount",
  params: [
    { name: "colId", type: "number", desc: "Collateral position id." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralTokenAmount",
});
