#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestCollateralType — read (free, no wallet)
 * getRequestCollateralType(reqId: number): number
 *
 * Returns the borrower's offered collateral type. It is always 2 (a v4 RA/TAZ
 * pool): types 1 and 3 are refused at post time.
 *
 * Returns number: 2 = v4 LP pool, 3 = v3 LP NFT.
 *
 * Usage: node Lending6scripts/getRequestCollateralType.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralType
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestCollateralType.js",
  contract: "saturnmarket",
  method: "getRequestCollateralType",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralType",
});
