#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondSaleListed — read (free, no wallet)
 * getBondSaleListed(bondId: number): number
 *
 * 1 when the holder has an open resale listing for this active bond, 0
 * otherwise.
 *
 * Returns number: 1 = for sale, 0 = not.
 *
 * Usage: node Contract9scripts/getBondSaleListed.js <bondId>
 *   bondId (number): Id to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondSaleListed
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondSaleListed.js",
  contract: "saturnbonds",
  method: "getBondSaleListed",
  params: [
    { name: "bondId", type: "number", desc: "Id to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondSaleListed",
});
