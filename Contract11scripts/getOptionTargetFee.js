#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionTargetFee — read (free, no wallet)
 * getOptionTargetFee(optionId: number): number
 *
 * Returns the fee rate (per 10,000) that exerciseOption will set on the pool.
 *
 * Returns number: Target fee, per 10k.
 *
 * Usage: node Contract11scripts/getOptionTargetFee.js <optionId>
 *   optionId (number): The option to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionTargetFee
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionTargetFee.js",
  contract: "saturnfeeopts",
  method: "getOptionTargetFee",
  params: [
    { name: "optionId", type: "number", desc: "The option to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionTargetFee",
});
