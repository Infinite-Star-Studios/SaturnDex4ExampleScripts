#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondSalePriceToken — read (free, no wallet)
 * getBondSalePriceToken(bondId: number): string
 *
 * Token the resale price is quoted in (empty when no sale listing).
 *
 * Returns string: Token symbol or "".
 *
 * Usage: node Contract9scripts/getBondSalePriceToken.js <bondId>
 *   bondId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondSalePriceToken
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondSalePriceToken.js",
  contract: "saturnbonds",
  method: "getBondSalePriceToken",
  params: [
    { name: "bondId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondSalePriceToken",
});
