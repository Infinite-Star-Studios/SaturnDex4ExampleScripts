#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getTotalTazDeposited — read (free, no wallet)
 * getTotalTazDeposited(): number
 *
 * Returns the cumulative raw TAZ deposited into the treasury via depositTaz
 * since contract deployment.
 *
 * Returns number: Total raw TAZ (9-decimal) ever deposited.
 *
 * Usage: node Lending8scripts/getTotalTazDeposited.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getTotalTazDeposited
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getTotalTazDeposited.js",
  contract: "saturntaz",
  method: "getTotalTazDeposited",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getTotalTazDeposited",
});
