#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondDurationSeconds — read (free, no wallet)
 * getBondDurationSeconds(bondId: number): number
 *
 * Term length chosen at listing, from the getMinDuration() in force then
 * (86,400 s on mainnet) up to 31,536,000 s. maturityTime = purchase time +
 * this value.
 *
 * Returns number: Seconds.
 *
 * Usage: node Contract9scripts/getBondDurationSeconds.js <bondId>
 *   bondId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondDurationSeconds
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondDurationSeconds.js",
  contract: "saturnbonds",
  method: "getBondDurationSeconds",
  params: [
    { name: "bondId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondDurationSeconds",
});
