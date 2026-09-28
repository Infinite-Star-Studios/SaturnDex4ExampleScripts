#!/usr/bin/env node
"use strict";

/**
 * SATURN.getMaxSupply — read (free, no wallet)
 * getMaxSupply(): number
 *
 * Token-wide supply cap: 0, meaning no cap. Each certificate is minted in its
 * own series with a max supply of 1.
 *
 * Returns number: 0 (no cap).
 *
 * Usage: node Contract6scripts/getMaxSupply.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#SATURN-getMaxSupply
 */

const { read } = require("../common");

read({
  file: "Contract6scripts/getMaxSupply.js",
  contract: "SATURN",
  method: "getMaxSupply",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#SATURN-getMaxSupply",
});
