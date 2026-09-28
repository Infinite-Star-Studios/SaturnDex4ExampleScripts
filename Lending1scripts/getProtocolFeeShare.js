#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getProtocolFeeShare — read (free, no wallet)
 * getProtocolFeeShare(): number
 *
 * The share of the interest part of each repayment (bps per 10,000) sent to
 * the saturnlendcfg admin instead of the lender. Default is 1,000 (10%). The
 * origination fee (getOriginationFeeBps) is separate.
 *
 * Returns number: Protocol's share of fee revenue in bps/10000 (default: 1000
 * = 10%).
 *
 * Usage: node Lending1scripts/getProtocolFeeShare.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getProtocolFeeShare
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getProtocolFeeShare.js",
  contract: "saturnlendcfg",
  method: "getProtocolFeeShare",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getProtocolFeeShare",
});
