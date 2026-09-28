#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondPoolId — read (free, no wallet)
 * getBondPoolId(bondId: number): number
 *
 * Pool the bond is issued against.
 *
 * Returns number: Pool ID.
 *
 * Usage: node Contract9scripts/getBondPoolId.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondPoolId
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondPoolId.js",
  contract: "saturnbonds",
  method: "getBondPoolId",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondPoolId",
});
