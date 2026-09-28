#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralNftTokenA — read (free, no wallet)
 * getCollateralNftTokenA(colId: number): string
 *
 * Returns the symbol of token A in the v3 LP NFT pair.
 *
 * Returns string: Token A symbol.
 *
 * Usage: node Lending3scripts/getCollateralNftTokenA.js <colId>
 *   colId (number): Collateral position ID (type 3).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralNftTokenA
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralNftTokenA.js",
  contract: "saturnvault",
  method: "getCollateralNftTokenA",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 3)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralNftTokenA",
});
