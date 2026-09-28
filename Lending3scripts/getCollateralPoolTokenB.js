#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralPoolTokenB — read (free, no wallet)
 * getCollateralPoolTokenB(colId: number): string
 *
 * Returns the symbol of token B in the locked v4 pool.
 *
 * Returns string: Token B symbol (e.g. "RA").
 *
 * Usage: node Lending3scripts/getCollateralPoolTokenB.js <colId>
 *   colId (number): Collateral position ID (type 2).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolTokenB
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralPoolTokenB.js",
  contract: "saturnvault",
  method: "getCollateralPoolTokenB",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 2)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolTokenB",
});
