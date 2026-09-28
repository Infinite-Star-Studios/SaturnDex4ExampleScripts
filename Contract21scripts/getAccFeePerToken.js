#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getAccFeePerToken — read (free, no wallet)
 * getAccFeePerToken(tokenSymbol: string): number
 *
 * Returns the current global accumulated-fee-per-unit value for tokenSymbol,
 * scaled by 1e12. This counter only ever increases. Use it alongside
 * getUserRewardDebt to reconstruct the MasterChef pending-reward formula:
 * pending = stake × (accNow − debt) / 1e12.
 *
 * Returns number: Cumulative fee-per-unit accumulator scaled by 1e12.
 *
 * Usage: node Contract21scripts/getAccFeePerToken.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol to query.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getAccFeePerToken
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getAccFeePerToken.js",
  contract: "saturnholders",
  method: "getAccFeePerToken",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol to query." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getAccFeePerToken",
});
