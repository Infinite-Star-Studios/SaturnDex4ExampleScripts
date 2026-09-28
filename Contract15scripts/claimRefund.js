#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.claimRefund — write (signed transaction, needs PHANTASMA_WIF)
 * claimRefund(from: address, marketId: number)
 *
 * If one side of the book has zero bets at expiry, there is no opponent to
 * play against — the populated side can simply withdraw everything they put
 * in. This path bypasses resolution and protocol fees.
 *
 * Usage: node Contract15scripts/claimRefund.js <marketId>
 *   marketId (number): A market whose endTime has passed where at least one
 *   of totalOver / totalUnder is zero.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-claimRefund
 */

const { send } = require("../common");

send({
  file: "Contract15scripts/claimRefund.js",
  contract: "saturnpredict",
  method: "claimRefund",
  params: [
    { name: "from", type: "address", desc: "Bettor with non-zero bets on the populated side." },
    { name: "marketId", type: "number", desc: "A market whose endTime has passed where at least one of totalOver / totalUnder is zero." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnpredict-claimRefund",
});
