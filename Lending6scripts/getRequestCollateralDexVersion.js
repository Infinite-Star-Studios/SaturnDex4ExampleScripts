#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getRequestCollateralDexVersion — read (free, no wallet)
 * getRequestCollateralDexVersion(reqId: number): number
 *
 * Returns the DEX version used to price the type-1 collateral token. 0 for
 * types 2 and 3.
 *
 * Returns number: 1 = V3, 2 = V4, or 0 for LP collateral types.
 *
 * Usage: node Lending6scripts/getRequestCollateralDexVersion.js <reqId>
 *   reqId (number): Loan request ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralDexVersion
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getRequestCollateralDexVersion.js",
  contract: "saturnmarket",
  method: "getRequestCollateralDexVersion",
  params: [
    { name: "reqId", type: "number", desc: "Loan request ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getRequestCollateralDexVersion",
});
