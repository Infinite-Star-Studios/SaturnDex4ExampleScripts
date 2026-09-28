#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getMinScaledAddLiqUnits — read (free, no wallet)
 * getMinScaledAddLiqUnits(): number
 *
 * Minimum amount (in scaled units) when adding liquidity to an existing pool.
 *
 * Returns number: Minimum scaled units for add-liquidity.
 *
 * Usage: node Contract1scripts/getMinScaledAddLiqUnits.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getMinScaledAddLiqUnits
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getMinScaledAddLiqUnits.js",
  contract: "saturnadmin",
  method: "getMinScaledAddLiqUnits",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getMinScaledAddLiqUnits",
});
