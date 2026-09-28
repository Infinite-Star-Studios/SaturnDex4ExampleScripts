#!/usr/bin/env node
"use strict";

/**
 * saturnrouter.getMinRawForPoolCreation — read (free, no wallet)
 * getMinRawForPoolCreation(tokenSymbol: string): number
 *
 * Returns the minimum raw amount of a token a provider must supply when
 * calling createPool(). Already applies the token's scale factor and the
 * absolute floor from SaturnAdmin.
 *
 * Returns number: Minimum raw amount for pool creation.
 *
 * Usage: node Contract8scripts/getMinRawForPoolCreation.js <tokenSymbol>
 *   tokenSymbol (string): Token symbol to quote.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrouter-getMinRawForPoolCreation
 */

const { read } = require("../common");

read({
  file: "Contract8scripts/getMinRawForPoolCreation.js",
  contract: "saturnrouter",
  method: "getMinRawForPoolCreation",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token symbol to quote." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrouter-getMinRawForPoolCreation",
});
