#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getMaxPledgersPerLender — read (free, no wallet)
 * getMaxPledgersPerLender(): number
 *
 * Returns the maximum number of active pledgers a single lender may have at
 * once. Once reached, new pledgers are blocked until an existing pledge
 * expires and its slot is freed.
 *
 * Returns number: Hard cap on simultaneous pledgers per lender (default: 30).
 *
 * Usage: node Lending8scripts/getMaxPledgersPerLender.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getMaxPledgersPerLender
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getMaxPledgersPerLender.js",
  contract: "saturntaz",
  method: "getMaxPledgersPerLender",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getMaxPledgersPerLender",
});
