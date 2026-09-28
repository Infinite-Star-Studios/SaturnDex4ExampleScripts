#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getStakedTokensData — read (free, no wallet)
 * getStakedTokensData(): string*
 *
 * Returns one packed row per staked token symbol. Each row is
 * "symbol|totalStaked|accFeePerToken|stakers|lifetimeAccrued|loanOpen". Use
 * this for a single-call dashboard load of all token staking metrics.
 *
 * Returns string*: Iterator of rows; each row:
 * "symbol|totalStaked|accFeePerToken|stakers|lifetimeAccrued|loanOpen".
 *
 * Usage: node Contract21scripts/getStakedTokensData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getStakedTokensData
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getStakedTokensData.js",
  contract: "saturnholders",
  method: "getStakedTokensData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getStakedTokensData",
});
