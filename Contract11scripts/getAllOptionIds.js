#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getAllOptionIds — read (free, no wallet)
 * getAllOptionIds(): number*
 *
 * Generator yielding the ids of options that are still open: listed (status 0)
 * or active (status 1). Cancelling, releasing or expiring an option removes
 * its id. Walk 1 .. getNextOptionId() − 1 to reach closed options.
 *
 * Returns number*: Iterable of option IDs.
 *
 * Usage: node Contract11scripts/getAllOptionIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getAllOptionIds
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getAllOptionIds.js",
  contract: "saturnfeeopts",
  method: "getAllOptionIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getAllOptionIds",
});
