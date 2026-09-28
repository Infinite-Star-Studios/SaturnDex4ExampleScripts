#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getListedOptionIds — read (free, no wallet)
 * getListedOptionIds(): number*
 *
 * Yields the ids of options in status 0 (written, not yet bought).
 *
 * Returns number*: Stream of option ids.
 *
 * Usage: node Contract11scripts/getListedOptionIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getListedOptionIds
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getListedOptionIds.js",
  contract: "saturnfeeopts",
  method: "getListedOptionIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getListedOptionIds",
});
