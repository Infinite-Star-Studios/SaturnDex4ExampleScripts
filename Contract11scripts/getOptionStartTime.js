#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionStartTime — read (free, no wallet)
 * getOptionStartTime(optionId: number): number
 *
 * Unix time the option was bought; 0 while listed.
 *
 * Returns number: Unix seconds or 0.
 *
 * Usage: node Contract11scripts/getOptionStartTime.js <optionId>
 *   optionId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionStartTime
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionStartTime.js",
  contract: "saturnfeeopts",
  method: "getOptionStartTime",
  params: [
    { name: "optionId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionStartTime",
});
