#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getMinScaledSwapUnits — read (free, no wallet)
 * getMinScaledSwapUnits(): number
 *
 * Minimum amount (in scaled units) required per swap. Enforced by the Swap
 * Engine and used by Router views to show users the minimum swap they can
 * submit.
 *
 * Returns number: Minimum swap input in 8-decimal scaled units.
 *
 * Usage: node Contract1scripts/getMinScaledSwapUnits.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getMinScaledSwapUnits
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getMinScaledSwapUnits.js",
  contract: "saturnadmin",
  method: "getMinScaledSwapUnits",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getMinScaledSwapUnits",
});
