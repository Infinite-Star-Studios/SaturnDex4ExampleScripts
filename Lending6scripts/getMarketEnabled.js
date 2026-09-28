#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getMarketEnabled — read (free, no wallet)
 * getMarketEnabled(): number
 *
 * Returns 1 if the P2P market is open for new requests and quotes, 0 if an
 * admin has paused it. Check this before rendering the post-request UI.
 *
 * Returns number: 1 = enabled, 0 = disabled.
 *
 * Usage: node Lending6scripts/getMarketEnabled.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getMarketEnabled
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getMarketEnabled.js",
  contract: "saturnmarket",
  method: "getMarketEnabled",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getMarketEnabled",
});
