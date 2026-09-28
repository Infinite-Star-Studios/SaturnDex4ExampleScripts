#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralNftPairKey — read (free, no wallet)
 * getCollateralNftPairKey(colId: number): string
 *
 * Returns the cached pair key string for the v3 LP NFT (format:
 * "TOKENA_TOKENB"). Cached at deposit time from saturndexadapt.
 *
 * Returns string: Pair key string, e.g. "SOUL_RA".
 *
 * Usage: node Lending3scripts/getCollateralNftPairKey.js <colId>
 *   colId (number): Collateral position ID (type 3).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralNftPairKey
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralNftPairKey.js",
  contract: "saturnvault",
  method: "getCollateralNftPairKey",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 3)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralNftPairKey",
});
