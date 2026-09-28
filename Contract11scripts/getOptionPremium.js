#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionPremium — read (free, no wallet)
 * getOptionPremium(optionId: number): number
 *
 * Returns the premium price, in raw units of premiumToken.
 *
 * Returns number: Premium amount (raw).
 *
 * Usage: node Contract11scripts/getOptionPremium.js <optionId>
 *   optionId (number): The option to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionPremium
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionPremium.js",
  contract: "saturnfeeopts",
  method: "getOptionPremium",
  params: [
    { name: "optionId", type: "number", desc: "The option to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionPremium",
});
