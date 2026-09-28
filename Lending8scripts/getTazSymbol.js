#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getTazSymbol — read (free, no wallet)
 * getTazSymbol(): string
 *
 * Returns the TAZ token symbol used by this contract (default: "TAZ"). Check
 * this if you need to query TAZ token metadata or display the token symbol
 * dynamically.
 *
 * Returns string: Current TAZ token symbol.
 *
 * Usage: node Lending8scripts/getTazSymbol.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getTazSymbol
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getTazSymbol.js",
  contract: "saturntaz",
  method: "getTazSymbol",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getTazSymbol",
});
