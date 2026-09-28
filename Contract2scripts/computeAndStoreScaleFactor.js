#!/usr/bin/env node
"use strict";

/**
 * saturnpools.computeAndStoreScaleFactor — write (signed transaction, needs PHANTASMA_WIF)
 * computeAndStoreScaleFactor(symbol: string)
 *
 * Warms the scale cache for a token: reads Token.getDecimals(symbol) and
 * stores the factor / divisor pair that converts raw amounts to the protocol's
 * 8-decimal internal units. Idempotent — it does nothing when the factor is
 * already stored. No witness is required, so any wallet (or your indexer) can
 * call it, and every path that needs a scale (createPool, router scoring, the
 * lending adapter's warmScale) calls it internally. Use it before the first
 * read against a brand-new token, because getScaleFactor() / getScaleDivisor()
 * return 0 while the cache is cold.
 *
 * Usage: node Contract2scripts/computeAndStoreScaleFactor.js <symbol>
 *   symbol (string): Token symbol to warm.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-computeAndStoreScaleFactor
 */

const { send } = require("../common");

send({
  file: "Contract2scripts/computeAndStoreScaleFactor.js",
  contract: "saturnpools",
  method: "computeAndStoreScaleFactor",
  params: [
    { name: "symbol", type: "string", desc: "Token symbol to warm." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturnpools-computeAndStoreScaleFactor",
});
