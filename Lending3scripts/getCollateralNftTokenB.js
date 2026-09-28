#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralNftTokenB — read (free, no wallet)
 * getCollateralNftTokenB(colId: number): string
 *
 * Returns the symbol of token B in the v3 LP NFT pair.
 *
 * Returns string: Token B symbol.
 *
 * Usage: node Lending3scripts/getCollateralNftTokenB.js <colId>
 *   colId (number): Collateral position ID (type 3).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralNftTokenB
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralNftTokenB.js",
  contract: "saturnvault",
  method: "getCollateralNftTokenB",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 3)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralNftTokenB",
});
