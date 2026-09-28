#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.warmScale — write (signed transaction, needs PHANTASMA_WIF)
 * warmScale(tokenSymbol: string)
 *
 * Precomputes and stores the scale factor for a token in the v4 pool registry
 * (saturnpools.computeAndStoreScaleFactor). Call this once for any new token
 * before the first scaleUp call in a transaction batch to avoid extra compute
 * cost at pricing time.
 *
 * Usage: node Lending7scripts/warmScale.js <tokenSymbol>
 *   tokenSymbol (string): Token whose scale factor should be cached.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-warmScale
 */

const { send } = require("../common");

send({
  file: "Lending7scripts/warmScale.js",
  contract: "saturndexadapt",
  method: "warmScale",
  params: [
    { name: "tokenSymbol", type: "string", desc: "Token whose scale factor should be cached." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-warmScale",
});
