#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralValue — read (free, no wallet)
 * getCollateralValue(colId: number, baseToken: string, baseDex: number): number
 *
 * Generic valuation dispatcher: reads the collateral type and routes to the
 * correct type-specific valuation. Returns the position's current value
 * denominated in baseToken, scaled to 8 decimals. For a v4 pool (every live
 * position) pass TAZ with any baseDex, or another RA-paired token with baseDex
 * 2; any other token with baseDex 1 reverts with 'v4 pool collateral is valued
 * in TAZ or through DEX v4 only (baseDex 2)'. saturnloans.getCurrentLtv values
 * it in TAZ. This is the primary call for LTV monitoring — use it to compute
 * the collateral-to-debt ratio at any time.
 *
 * Returns number: Current collateral value in baseToken, 8-decimal scaled.
 *
 * Usage: node Lending3scripts/getCollateralValue.js <colId> <baseToken> <baseDex>
 *   colId (number): Collateral position ID.
 *   baseToken (string): Token symbol to denominate the value in (e.g. "RA").
 *   baseDex (number): DEX version (1 = v3, 2 = v4) hosting the RA pricing
 *   pool for baseToken.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralValue
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralValue.js",
  contract: "saturnvault",
  method: "getCollateralValue",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID." },
    { name: "baseToken", type: "string", desc: "Token symbol to denominate the value in (e.g. \"RA\")." },
    { name: "baseDex", type: "number", desc: "DEX version (1 = v3, 2 = v4) hosting the RA pricing pool for baseToken." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralValue",
});
