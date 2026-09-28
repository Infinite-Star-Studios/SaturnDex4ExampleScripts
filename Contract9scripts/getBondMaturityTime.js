#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondMaturityTime — read (free, no wallet)
 * getBondMaturityTime(bondId: number): number
 *
 * Unix timestamp at which the bond can be settled. It is 0 while the bond is
 * listed (status 0) and is set to purchase time + getBondDurationSeconds()
 * when the bond is bought.
 *
 * Returns number: Maturity timestamp, or 0 if unsold.
 *
 * Usage: node Contract9scripts/getBondMaturityTime.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondMaturityTime
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondMaturityTime.js",
  contract: "saturnbonds",
  method: "getBondMaturityTime",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondMaturityTime",
});
