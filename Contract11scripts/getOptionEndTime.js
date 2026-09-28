#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionEndTime — read (free, no wallet)
 * getOptionEndTime(optionId: number): number
 *
 * Returns the Unix timestamp when the option expires. It is 0 until the option
 * is bought; read getOptionDurationSeconds() for the window of a listing.
 *
 * Returns number: Unix seconds, or 0 while listed.
 *
 * Usage: node Contract11scripts/getOptionEndTime.js <optionId>
 *   optionId (number): The option to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionEndTime
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionEndTime.js",
  contract: "saturnfeeopts",
  method: "getOptionEndTime",
  params: [
    { name: "optionId", type: "number", desc: "The option to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionEndTime",
});
