#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.claimWinnings — write (signed transaction, needs PHANTASMA_WIF)
 * claimWinnings(from: address, marketId: number)
 *
 * After endTime, claim your share of the pot. The very first caller on a
 * still-open market resolves it. If either side has no bets, the market
 * becomes a refund market (status 4). Otherwise the metric is read live, delta
 * = max(0, current − snapshot), and status becomes 1 (OVER won, delta >=
 * threshold) or 2 (UNDER won). The metric is read at that first claim, not at
 * endTime, so fees earned after endTime still count until someone claims.
 * Every caller (first or later) then receives their payout once.
 *
 * Usage: node Contract15scripts/claimWinnings.js <marketId>
 *   marketId (number): A market whose endTime has passed and which is not
 *   cancelled (status 3).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-claimWinnings
 */

const { send } = require("../common");

send({
  file: "Contract15scripts/claimWinnings.js",
  contract: "saturnpredict",
  method: "claimWinnings",
  params: [
    { name: "from", type: "address", desc: "Caller. Must be a witness and must not have claimed this market before." },
    { name: "marketId", type: "number", desc: "A market whose endTime has passed and which is not cancelled (status 3)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnpredict-claimWinnings",
});
