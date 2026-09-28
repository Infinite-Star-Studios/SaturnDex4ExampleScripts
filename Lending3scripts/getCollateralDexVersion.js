#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralDexVersion — read (free, no wallet)
 * getCollateralDexVersion(colId: number): number
 *
 * Returns which DEX version underpins this collateral: 1 = v3 (SATRN), 2 = v4
 * (saturnpools). For type-2 collateral this is always 2; for type-3 always 1.
 *
 * Returns number: 1 = v3 SATRN, 2 = v4 saturnpools.
 *
 * Usage: node Lending3scripts/getCollateralDexVersion.js <colId>
 *   colId (number): Collateral position ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralDexVersion
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralDexVersion.js",
  contract: "saturnvault",
  method: "getCollateralDexVersion",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralDexVersion",
});
