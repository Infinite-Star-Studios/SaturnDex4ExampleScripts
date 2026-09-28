#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getMinPoolFeePer10k — read (free, no wallet)
 * getMinPoolFeePer10k(): number
 *
 * Minimum fee rate (in basis points out of 10,000) a provider may set when
 * creating a pool. 30 means 0.3%.
 *
 * Returns number: Minimum fee in basis points (default: 30 = 0.3%).
 *
 * Usage: node Contract1scripts/getMinPoolFeePer10k.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getMinPoolFeePer10k
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getMinPoolFeePer10k.js",
  contract: "saturnadmin",
  method: "getMinPoolFeePer10k",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getMinPoolFeePer10k",
});
