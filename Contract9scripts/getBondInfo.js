#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondInfo — read (free, no wallet)
 * getBondInfo(bondId: number): string
 *
 * Packed string with every top-level bond field — pool, face value, purchase
 * price, fee token, mode, maturity timestamp, duration, status, and
 * collateral. Parse with String.split on underscores, then on ":".
 *
 * Returns string: Format:
 * "pool:<n>_face:<n>_price:<n>_token:<s>_mode:<1|2>_maturity:<ts|0>_duration:<s>_status:<0..4>_collateral:<n>".
 * maturity is 0 until the bond is bought.
 *
 * Usage: node Contract9scripts/getBondInfo.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondInfo
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondInfo.js",
  contract: "saturnbonds",
  method: "getBondInfo",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondInfo",
});
