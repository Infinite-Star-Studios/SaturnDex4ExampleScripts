#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralSummary — read (free, no wallet)
 * getCollateralSummary(colId: number): string
 *
 * Returns a packed single-string summary of any collateral position — type,
 * DEX version, status, linked loan, and the key asset identifiers. Format
 * varies by type: token positions include symbol/amount; v4 pool positions
 * include poolId and pair; v3 NFT positions include nftId and pair key. Use
 * this for concise collateral cards without multiple round-trips.
 *
 * Returns string: Packed string. A v4 pool (every live position):
 * "type:v4pool_dex:2_status:1_loan:1_poolId:35_pair:RA_TAZ_certId:<SATURN
 * certificate id>" (mainnet collateral 1). The pair itself contains an
 * underscore.
 *
 * Usage: node Lending3scripts/getCollateralSummary.js <colId>
 *   colId (number): Collateral position ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralSummary
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralSummary.js",
  contract: "saturnvault",
  method: "getCollateralSummary",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralSummary",
});
