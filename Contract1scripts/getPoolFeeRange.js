#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getPoolFeeRange — read (free, no wallet)
 * getPoolFeeRange(): string
 *
 * Returns both min and max per-pool fee rate as a single packed string. Use
 * when creating a pool so the UI can clamp the user's fee slider to the valid
 * range.
 *
 * Returns string: Example: "min:30_max:3000" (basis points per 10k → 0.3% to
 * 30%).
 *
 * Usage: node Contract1scripts/getPoolFeeRange.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getPoolFeeRange
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getPoolFeeRange.js",
  contract: "saturnadmin",
  method: "getPoolFeeRange",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getPoolFeeRange",
});
