#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralPoolId — read (free, no wallet)
 * getCollateralPoolId(colId: number): number
 *
 * Returns the v4 DEX pool ID locked as collateral. Use with saturnpools to
 * look up live reserves and pool state.
 *
 * Returns number: v4 pool ID.
 *
 * Usage: node Lending3scripts/getCollateralPoolId.js <colId>
 *   colId (number): Collateral position ID (must be type 2).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolId
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralPoolId.js",
  contract: "saturnvault",
  method: "getCollateralPoolId",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (must be type 2)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolId",
});
