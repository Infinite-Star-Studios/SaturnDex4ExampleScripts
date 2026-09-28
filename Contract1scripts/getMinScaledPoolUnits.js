#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getMinScaledPoolUnits — read (free, no wallet)
 * getMinScaledPoolUnits(): number
 *
 * Minimum amount (in scaled units) required when creating a pool. Combined
 * with each token's scale factor, this becomes the raw-unit minimum returned
 * by SaturnRouter.getMinRawForPoolCreation().
 *
 * Returns number: Minimum scaled units for pool creation.
 *
 * Usage: node Contract1scripts/getMinScaledPoolUnits.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getMinScaledPoolUnits
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getMinScaledPoolUnits.js",
  contract: "saturnadmin",
  method: "getMinScaledPoolUnits",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getMinScaledPoolUnits",
});
