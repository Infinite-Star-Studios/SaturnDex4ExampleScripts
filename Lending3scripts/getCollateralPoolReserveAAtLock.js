#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralPoolReserveAAtLock — read (free, no wallet)
 * getCollateralPoolReserveAAtLock(colId: number): number
 *
 * Returns the snapshot of token A's reserve recorded at the moment the pool
 * was locked. Compare against current reserves to quantify fee accrual and
 * impermanent loss since collateral was posted.
 *
 * Returns number: Token A reserve at lock time (scaled units).
 *
 * Usage: node Lending3scripts/getCollateralPoolReserveAAtLock.js <colId>
 *   colId (number): Collateral position ID (type 2).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolReserveAAtLock
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralPoolReserveAAtLock.js",
  contract: "saturnvault",
  method: "getCollateralPoolReserveAAtLock",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 2)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolReserveAAtLock",
});
