#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionOriginalFee — read (free, no wallet)
 * getOptionOriginalFee(optionId: number): number
 *
 * Pool fee recorded when the option was bought; restored when the option is
 * released or expired. 0 while listed.
 *
 * Returns number: Fee per 10,000.
 *
 * Usage: node Contract11scripts/getOptionOriginalFee.js <optionId>
 *   optionId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionOriginalFee
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionOriginalFee.js",
  contract: "saturnfeeopts",
  method: "getOptionOriginalFee",
  params: [
    { name: "optionId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionOriginalFee",
});
