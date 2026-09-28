#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionBuyer — read (free, no wallet)
 * getOptionBuyer(optionId: number): address
 *
 * Returns the address holding the option, or @null while still in listed
 * state.
 *
 * Returns address: Current option holder, or @null if unbought.
 *
 * Usage: node Contract11scripts/getOptionBuyer.js <optionId>
 *   optionId (number): The option to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionBuyer
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionBuyer.js",
  contract: "saturnfeeopts",
  method: "getOptionBuyer",
  params: [
    { name: "optionId", type: "number", desc: "The option to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionBuyer",
});
