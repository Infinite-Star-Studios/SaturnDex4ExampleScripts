#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionPoolId — read (free, no wallet)
 * getOptionPoolId(optionId: number): number
 *
 * Returns the poolId the option is written on.
 *
 * Returns number: Underlying pool ID.
 *
 * Usage: node Contract11scripts/getOptionPoolId.js <optionId>
 *   optionId (number): The option to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionPoolId
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionPoolId.js",
  contract: "saturnfeeopts",
  method: "getOptionPoolId",
  params: [
    { name: "optionId", type: "number", desc: "The option to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionPoolId",
});
