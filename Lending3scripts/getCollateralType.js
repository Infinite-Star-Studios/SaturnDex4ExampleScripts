#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralType — read (free, no wallet)
 * getCollateralType(colId: number): number
 *
 * Returns the collateral type flag for a given position: 1 = single token
 * (disabled), 2 = v4 LP pool, 3 = v3 LP NFT.
 *
 * Returns number: 1 = token (disabled), 2 = v4 pool, 3 = v3 LP NFT.
 *
 * Usage: node Lending3scripts/getCollateralType.js <colId>
 *   colId (number): Collateral position ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralType
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralType.js",
  contract: "saturnvault",
  method: "getCollateralType",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralType",
});
