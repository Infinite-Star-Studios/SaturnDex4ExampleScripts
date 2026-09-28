#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestCollateralNftId — read (free, no wallet)
 * getRequestCollateralNftId(reqId: number): number
 *
 * Returns the v3 LP NFT ID offered as collateral (type 3). 0 for types 1 and
 * 2.
 *
 * Returns number: v3 LP NFT ID, or 0 if not an NFT-backed request.
 *
 * Usage: node Lending6scripts/getRequestCollateralNftId.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralNftId
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestCollateralNftId.js",
  contract: "saturnmarket",
  method: "getRequestCollateralNftId",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralNftId",
});
