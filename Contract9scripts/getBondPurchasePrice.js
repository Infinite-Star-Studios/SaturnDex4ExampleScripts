#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondPurchasePrice — read (free, no wallet)
 * getBondPurchasePrice(bondId: number): number
 *
 * Up-front raw amount the buyer paid (or pays) for the bond.
 *
 * Returns number: Purchase price in feeToken raw units.
 *
 * Usage: node Contract9scripts/getBondPurchasePrice.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondPurchasePrice
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondPurchasePrice.js",
  contract: "saturnbonds",
  method: "getBondPurchasePrice",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondPurchasePrice",
});
