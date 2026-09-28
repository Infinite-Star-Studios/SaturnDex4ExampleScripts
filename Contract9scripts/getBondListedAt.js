#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondListedAt — read (free, no wallet)
 * getBondListedAt(bondId: number): number
 *
 * Unix time the bond was listed. cancelListing() needs listedAt + 1 hour;
 * expireListing() needs listedAt + 30 days.
 *
 * Returns number: Unix seconds.
 *
 * Usage: node Contract9scripts/getBondListedAt.js <bondId>
 *   bondId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondListedAt
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondListedAt.js",
  contract: "saturnbonds",
  method: "getBondListedAt",
  params: [
    { name: "bondId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondListedAt",
});
