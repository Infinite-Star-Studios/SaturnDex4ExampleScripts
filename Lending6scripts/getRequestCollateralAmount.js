#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestCollateralAmount — read (free, no wallet)
 * getRequestCollateralAmount(reqId: number): number
 *
 * Returns the collateral token amount (type 1 only). 0 for types 2 and 3.
 *
 * Returns number: Raw-unit collateral token amount; 0 for LP collateral types.
 *
 * Usage: node Lending6scripts/getRequestCollateralAmount.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralAmount
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestCollateralAmount.js",
  contract: "saturnmarket",
  method: "getRequestCollateralAmount",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralAmount",
});
