#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getMinDuration — read (free, no wallet)
 * getMinDuration(): number
 *
 * The shortest bond term listBond() accepts right now, in seconds. Returns
 * 86,400 (1 day) while the admin has not set a value. Live: 86400 on mainnet,
 * 60 on devnet.
 *
 * Returns number: Minimum durationSeconds for listBond(), in seconds.
 *
 * Usage: node Contract9scripts/getMinDuration.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getMinDuration
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getMinDuration.js",
  contract: "saturnbonds",
  method: "getMinDuration",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getMinDuration",
});
