#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getMaxPoolFeePer10k — read (free, no wallet)
 * getMaxPoolFeePer10k(): number
 *
 * Maximum allowed pool fee rate (in basis points out of 10,000). 3000 means
 * 30%.
 *
 * Returns number: Maximum fee in basis points (default: 3000 = 30%).
 *
 * Usage: node Contract1scripts/getMaxPoolFeePer10k.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getMaxPoolFeePer10k
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getMaxPoolFeePer10k.js",
  contract: "saturnadmin",
  method: "getMaxPoolFeePer10k",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getMaxPoolFeePer10k",
});
