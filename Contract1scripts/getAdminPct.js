#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getAdminPct — read (free, no wallet)
 * getAdminPct(): number
 *
 * Percentage of each swap fee sent straight to the protocol admin wallet
 * (saturnadmin.getAdmin()) at swap time.
 *
 * Returns number: Whole percent of each swap fee (constructor default 30; 20
 * on mainnet and devnet today).
 *
 * Usage: node Contract1scripts/getAdminPct.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getAdminPct
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getAdminPct.js",
  contract: "saturnadmin",
  method: "getAdminPct",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getAdminPct",
});
