#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getHolderPct — read (free, no wallet)
 * getHolderPct(): number
 *
 * Percentage of each swap fee credited to the stakers of the swap's input
 * token in saturnholders (saturnholders.accrueHolderFee), pro-rata by stake;
 * 10 on mainnet and devnet today. Since saturnswap-4.4.3 the slice is taken
 * only when saturnholders.getTotalStaked(tokenIn) > 0; when nobody stakes the
 * input token it stays in the pool as reinvest. Together with
 * getReinvestPct(), getProviderPct() and getAdminPct() it sums to 100. Zero
 * means no holder rewards are being paid from swap fees (the value on a fresh
 * deployment).
 *
 * Returns number: Whole-number percent (0..100).
 *
 * Usage: node Contract1scripts/getHolderPct.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getHolderPct
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getHolderPct.js",
  contract: "saturnadmin",
  method: "getHolderPct",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getHolderPct",
});
