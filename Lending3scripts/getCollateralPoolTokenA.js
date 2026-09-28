#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralPoolTokenA — read (free, no wallet)
 * getCollateralPoolTokenA(colId: number): string
 *
 * Returns the symbol of token A in the locked v4 pool.
 *
 * Returns string: Token A symbol (e.g. "KCAL").
 *
 * Usage: node Lending3scripts/getCollateralPoolTokenA.js <colId>
 *   colId (number): Collateral position ID (type 2).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolTokenA
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralPoolTokenA.js",
  contract: "saturnvault",
  method: "getCollateralPoolTokenA",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 2)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolTokenA",
});
