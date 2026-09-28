#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestCollateralPoolId — read (free, no wallet)
 * getRequestCollateralPoolId(reqId: number): number
 *
 * Returns the v4 pool ID offered as collateral (type 2). 0 for types 1 and 3.
 *
 * Returns number: v4 pool ID, or 0 if not a pool-backed request.
 *
 * Usage: node Lending6scripts/getRequestCollateralPoolId.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralPoolId
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestCollateralPoolId.js",
  contract: "saturnmarket",
  method: "getRequestCollateralPoolId",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralPoolId",
});
