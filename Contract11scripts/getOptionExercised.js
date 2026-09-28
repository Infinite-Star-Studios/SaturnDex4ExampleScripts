#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionExercised — read (free, no wallet)
 * getOptionExercised(optionId: number): number
 *
 * 1 once the buyer has exercised (the pool fee sits at the target), 0
 * otherwise.
 *
 * Returns number: 1 or 0.
 *
 * Usage: node Contract11scripts/getOptionExercised.js <optionId>
 *   optionId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionExercised
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionExercised.js",
  contract: "saturnfeeopts",
  method: "getOptionExercised",
  params: [
    { name: "optionId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionExercised",
});
