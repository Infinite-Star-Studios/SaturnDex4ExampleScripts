#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getBondFeeToken — read (free, no wallet)
 * getBondFeeToken(bondId: number): string
 *
 * Symbol of the token the bond is denominated in — purchase price, face value,
 * and collateral are all in this token, and only swap fees accrued in this
 * token are counted toward the payout.
 *
 * Returns string: Fee token symbol.
 *
 * Usage: node Contract9scripts/getBondFeeToken.js <bondId>
 *   bondId (number): Bond ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getBondFeeToken
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getBondFeeToken.js",
  contract: "saturnbonds",
  method: "getBondFeeToken",
  params: [
    { name: "bondId", type: "number", desc: "Bond ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getBondFeeToken",
});
