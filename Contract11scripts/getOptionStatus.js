#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionStatus — read (free, no wallet)
 * getOptionStatus(optionId: number): number
 *
 * Returns the lifecycle status code.
 *
 * Returns number: 0=listed, 1=active, 2=expired, 3=cancelled, 4=released.
 *
 * Usage: node Contract11scripts/getOptionStatus.js <optionId>
 *   optionId (number): The option to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionStatus
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionStatus.js",
  contract: "saturnfeeopts",
  method: "getOptionStatus",
  params: [
    { name: "optionId", type: "number", desc: "The option to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionStatus",
});
