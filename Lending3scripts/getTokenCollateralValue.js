#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getTokenCollateralValue — read (free, no wallet)
 * getTokenCollateralValue(colId: number, baseToken: string, baseDex: number): number
 *
 * Values a type-1 (single token) collateral position. Returns the stored raw
 * amount scaled up and converted to baseToken via the RA-pair pricing path.
 * Although depositTokenCollateral is disabled, this read path remains active
 * for positions created before the v1.0 cutoff.
 *
 * Returns number: Token value in baseToken, 8-decimal scaled.
 *
 * Usage: node Lending3scripts/getTokenCollateralValue.js <colId> <baseToken> <baseDex>
 *   colId (number): Collateral position ID (type 1).
 *   baseToken (string): Token symbol to denominate the value in.
 *   baseDex (number): DEX version for baseToken's RA pricing pool.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getTokenCollateralValue
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getTokenCollateralValue.js",
  contract: "saturnvault",
  method: "getTokenCollateralValue",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 1)." },
    { name: "baseToken", type: "string", desc: "Token symbol to denominate the value in." },
    { name: "baseDex", type: "number", desc: "DEX version for baseToken's RA pricing pool." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getTokenCollateralValue",
});
