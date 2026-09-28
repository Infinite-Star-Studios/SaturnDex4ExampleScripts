#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.betUnder — write (signed transaction, needs PHANTASMA_WIF)
 * betUnder(from: address, marketId: number, amount: number)
 *
 * Place (or add to) a bet that the pool's metric delta will NOT meet the
 * threshold by endTime.
 *
 * Usage: node Contract15scripts/betUnder.js <marketId> <amount>
 *   marketId (number): An open market (status 0).
 *   amount (number): Raw betToken to wager. Must be >= marketMinBet.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-betUnder
 */

const { send } = require("../common");

send({
  file: "Contract15scripts/betUnder.js",
  contract: "saturnpredict",
  method: "betUnder",
  params: [
    { name: "from", type: "address", desc: "Bettor. Must be a witness and hold amount of betToken." },
    { name: "marketId", type: "number", desc: "An open market (status 0)." },
    { name: "amount", type: "number", desc: "Raw betToken to wager. Must be >= marketMinBet." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnpredict-betUnder",
});
