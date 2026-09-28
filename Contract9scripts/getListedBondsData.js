#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.getListedBondsData — read (free, no wallet)
 * getListedBondsData(): string*
 *
 * Same row layout as getActiveBondsData() for bonds in status 0 (listed).
 * Until purchase the buyer field is the text "[Null address]" and maturityTime
 * is 0.
 *
 * Returns string*: Stream of
 * "bondId|poolId|issuer|buyer|faceValue|purchasePrice|feeToken|collateral|mode|status|maturityTime|durationSeconds"
 * rows.
 *
 * Usage: node Contract9scripts/getListedBondsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-getListedBondsData
 */

const { read } = require("../common");

read({
  file: "Contract9scripts/getListedBondsData.js",
  contract: "saturnbonds",
  method: "getListedBondsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnbonds-getListedBondsData",
});
