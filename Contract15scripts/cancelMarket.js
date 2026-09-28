#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.cancelMarket — write (signed transaction, needs PHANTASMA_WIF)
 * cancelMarket(from: address, marketId: number)
 *
 * Creator cancels a market, but only before anyone has placed a bet. Once
 * there's money on either side, cancelling is blocked — use the natural flow
 * instead.
 *
 * Usage: node Contract15scripts/cancelMarket.js <marketId>
 *   marketId (number): An open market with zero totalOver AND zero
 *   totalUnder.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-cancelMarket
 */

const { send } = require("../common");

send({
  file: "Contract15scripts/cancelMarket.js",
  contract: "saturnpredict",
  method: "cancelMarket",
  params: [
    { name: "from", type: "address", desc: "Must be the market creator." },
    { name: "marketId", type: "number", desc: "An open market with zero totalOver AND zero totalUnder." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnpredict-cancelMarket",
});
