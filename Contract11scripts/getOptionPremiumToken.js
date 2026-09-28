#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionPremiumToken — read (free, no wallet)
 * getOptionPremiumToken(optionId: number): string
 *
 * Token the premium is paid in (chosen by the writer).
 *
 * Returns string: Token symbol.
 *
 * Usage: node Contract11scripts/getOptionPremiumToken.js <optionId>
 *   optionId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionPremiumToken
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionPremiumToken.js",
  contract: "saturnfeeopts",
  method: "getOptionPremiumToken",
  params: [
    { name: "optionId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionPremiumToken",
});
