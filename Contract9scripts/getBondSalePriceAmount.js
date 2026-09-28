#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondSalePriceAmount — read (free, no wallet)
 * getBondSalePriceAmount(bondId: number): number
 *
 * Raw resale price in getBondSalePriceToken() units; 0 when no sale listing.
 *
 * Returns number: Raw price.
 *
 * Usage: node Contract9scripts/getBondSalePriceAmount.js <bondId>
 *   bondId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondSalePriceAmount
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondSalePriceAmount.js",
  contract: "saturnbonds",
  method: "getBondSalePriceAmount",
  params: [
    { name: "bondId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondSalePriceAmount",
});
