#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getActiveOptionIds — read (free, no wallet)
 * getActiveOptionIds(): number*
 *
 * Yields the ids of options in status 1 (bought, not yet released or expired).
 * An option past its endTime stays here until someone calls expireOption().
 *
 * Returns number*: Stream of option ids.
 *
 * Usage: node Contract11scripts/getActiveOptionIds.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getActiveOptionIds
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getActiveOptionIds.js",
  contract: "saturnfeeopts",
  method: "getActiveOptionIds",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getActiveOptionIds",
});
