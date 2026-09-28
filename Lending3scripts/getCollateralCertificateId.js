#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralCertificateId — read (free, no wallet)
 * getCollateralCertificateId(colId: number): number
 *
 * The SATURN certificate NFT ID the vault took into custody for a type-2 (v4
 * pool) record, 0 when it took none: another collateral type, or a record made
 * before 1.1.0. A legacy record with 0 cannot be released or liquidated
 * ("legacy collateral: the vault holds no certificate for this record"). The
 * ID is not cleared when the record is released or liquidated, so check
 * getCollateralStatus: only status 1 (locked) means the vault still holds the
 * certificate. getCollateralSummary shows the same value as certId.
 *
 * Returns number: SATURN NFT ID (a large integer), or 0.
 *
 * Usage: node Lending3scripts/getCollateralCertificateId.js <colId>
 *   colId (number): Collateral position ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralCertificateId
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralCertificateId.js",
  contract: "saturnvault",
  method: "getCollateralCertificateId",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralCertificateId",
});
