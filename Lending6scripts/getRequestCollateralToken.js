#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestCollateralToken — read (free, no wallet)
 * getRequestCollateralToken(reqId: number): string
 *
 * Returns the collateral token symbol (type 1 only). Empty string for types 2
 * and 3.
 *
 * Returns string: Token symbol for type-1 collateral; empty otherwise.
 *
 * Usage: node Lending6scripts/getRequestCollateralToken.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralToken
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestCollateralToken.js",
  contract: "saturnmarket",
  method: "getRequestCollateralToken",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralToken",
});
