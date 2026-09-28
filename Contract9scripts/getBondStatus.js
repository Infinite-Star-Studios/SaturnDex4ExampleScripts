#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondStatus — read (free, no wallet)
 * getBondStatus(bondId: number): number
 *
 * Lifecycle state of the bond.
 *
 * Returns number: 0 = listed, 1 = active, 2 = settled, 3 = cancelled, 4 =
 * listing expired.
 *
 * Usage: node Contract9scripts/getBondStatus.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondStatus
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondStatus.js",
  contract: "saturnbonds",
  method: "getBondStatus",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondStatus",
});
