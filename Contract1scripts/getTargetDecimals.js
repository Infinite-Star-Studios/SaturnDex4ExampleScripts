#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getTargetDecimals — read (free, no wallet)
 * getTargetDecimals(): number
 *
 * The internal scaling target: every token amount is converted to this many
 * decimals inside the protocol (multiplied up for tokens with fewer decimals,
 * divided down for tokens with more, such as KCAL's 10), so pool reserves and
 * fee balances are 8-decimal numbers.
 *
 * Returns number: Target decimals: 8.
 *
 * Usage: node Contract1scripts/getTargetDecimals.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getTargetDecimals
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getTargetDecimals.js",
  contract: "saturnadmin",
  method: "getTargetDecimals",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getTargetDecimals",
});
