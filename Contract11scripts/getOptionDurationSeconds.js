#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionDurationSeconds — read (free, no wallet)
 * getOptionDurationSeconds(optionId: number): number
 *
 * Window length set by the writer (3,600 .. 2,592,000 s). endTime = startTime
 * + this value.
 *
 * Returns number: Seconds.
 *
 * Usage: node Contract11scripts/getOptionDurationSeconds.js <optionId>
 *   optionId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionDurationSeconds
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionDurationSeconds.js",
  contract: "saturnfeeopts",
  method: "getOptionDurationSeconds",
  params: [
    { name: "optionId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionDurationSeconds",
});
