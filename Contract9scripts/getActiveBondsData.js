#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getActiveBondsData — read (free, no wallet)
 * getActiveBondsData(): string*
 *
 * One pipe-delimited row per active bond:
 * bondId|poolId|issuer|buyer|faceValue|purchasePrice|feeToken|collateral|mode|status|maturityTime|durationSeconds.
 * Amounts are raw units of feeToken.
 *
 * Returns string*: Stream of
 * "bondId|poolId|issuer|buyer|faceValue|purchasePrice|feeToken|collateral|mode|status|maturityTime|durationSeconds"
 * rows.
 *
 * Usage: node Contract9scripts/getActiveBondsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getActiveBondsData
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getActiveBondsData.js",
  contract: "saturnbonds",
  method: "getActiveBondsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getActiveBondsData",
});
