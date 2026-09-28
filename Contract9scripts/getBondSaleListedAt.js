#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondSaleListedAt — read (free, no wallet)
 * getBondSaleListedAt(bondId: number): number
 *
 * Unix time the resale listing was opened; cancelBondSale() requires one hour
 * to have passed. 0 when no sale listing.
 *
 * Returns number: Unix seconds or 0.
 *
 * Usage: node Contract9scripts/getBondSaleListedAt.js <bondId>
 *   bondId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondSaleListedAt
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondSaleListedAt.js",
  contract: "saturnbonds",
  method: "getBondSaleListedAt",
  params: [
    { name: "bondId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondSaleListedAt",
});
