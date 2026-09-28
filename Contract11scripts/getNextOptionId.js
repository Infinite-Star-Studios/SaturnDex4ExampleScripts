#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getNextOptionId — read (free, no wallet)
 * getNextOptionId(): number
 *
 * Returns the optionId that will be assigned to the next writeOption call.
 *
 * Returns number: Next option ID (starts at 1).
 *
 * Usage: node Contract11scripts/getNextOptionId.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getNextOptionId
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getNextOptionId.js",
  contract: "saturnfeeopts",
  method: "getNextOptionId",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getNextOptionId",
});
