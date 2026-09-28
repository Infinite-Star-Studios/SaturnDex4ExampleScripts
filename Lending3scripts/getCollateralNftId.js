#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralNftId — read (free, no wallet)
 * getCollateralNftId(colId: number): number
 *
 * Returns the SATRN NFT ID held in vault custody for a v3 LP NFT collateral
 * position.
 *
 * Returns number: SATRN LP NFT ID.
 *
 * Usage: node Lending3scripts/getCollateralNftId.js <colId>
 *   colId (number): Collateral position ID (must be type 3).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralNftId
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralNftId.js",
  contract: "saturnvault",
  method: "getCollateralNftId",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (must be type 3)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralNftId",
});
