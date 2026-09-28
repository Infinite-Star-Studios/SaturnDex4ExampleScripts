#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionWriter — read (free, no wallet)
 * getOptionWriter(optionId: number): address
 *
 * Returns the pool provider who wrote (sold) the option.
 *
 * Returns address: Option writer.
 *
 * Usage: node Contract11scripts/getOptionWriter.js <optionId>
 *   optionId (number): The option to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionWriter
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionWriter.js",
  contract: "saturnfeeopts",
  method: "getOptionWriter",
  params: [
    { name: "optionId", type: "number", desc: "The option to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionWriter",
});
