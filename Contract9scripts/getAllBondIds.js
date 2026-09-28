#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getAllBondIds — read (free, no wallet)
 * getAllBondIds(): number*
 *
 * Generator yielding the ids of bonds that are still open: listed (status 0)
 * or active (status 1). Settling, cancelling or expiring a bond removes its
 * id. Walk 1 .. getNextBondId() − 1 to reach closed bonds.
 *
 * Returns number*: Iterable of bond IDs.
 *
 * Usage: node Contract9scripts/getAllBondIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getAllBondIds
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getAllBondIds.js",
  contract: "saturnbonds",
  method: "getAllBondIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getAllBondIds",
});
