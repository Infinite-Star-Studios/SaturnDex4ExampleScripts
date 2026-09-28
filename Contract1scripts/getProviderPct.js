#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getProviderPct — read (free, no wallet)
 * getProviderPct(): number
 *
 * Percentage of each swap fee paid to the pool provider, accrued in the
 * FeeVault and claimable via SaturnFees.claimProviderFees().
 *
 * Returns number: Percentage out of 100 (default: 10).
 *
 * Usage: node Contract1scripts/getProviderPct.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getProviderPct
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getProviderPct.js",
  contract: "saturnadmin",
  method: "getProviderPct",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getProviderPct",
});
