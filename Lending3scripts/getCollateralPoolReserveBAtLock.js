#!/usr/bin/env node
"use strict";

/**
 * saturnvault.getCollateralPoolReserveBAtLock — read (free, no wallet)
 * getCollateralPoolReserveBAtLock(colId: number): number
 *
 * Returns the snapshot of token B's reserve at lock time. Pair with
 * getCollateralPoolReserveAAtLock to reconstruct the pool's price and depth at
 * the time collateral was posted.
 *
 * Returns number: Token B reserve at lock time (scaled units).
 *
 * Usage: node Lending3scripts/getCollateralPoolReserveBAtLock.js <colId>
 *   colId (number): Collateral position ID (type 2).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolReserveBAtLock
 */

const { read } = require("../common");

read({
  file: "Lending3scripts/getCollateralPoolReserveBAtLock.js",
  contract: "saturnvault",
  method: "getCollateralPoolReserveBAtLock",
  params: [
    { name: "colId", type: "number", desc: "Collateral position ID (type 2)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvault-getCollateralPoolReserveBAtLock",
});
