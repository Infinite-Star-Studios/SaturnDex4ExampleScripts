#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.claimSyndicateReward — write (signed transaction, needs PHANTASMA_WIF)
 * claimSyndicateReward(from: address, syndicateId: number)
 *
 * Member harvests their share of the swap fees the syndicate pool has earned.
 * Shares are tokenA contributions (total = raisedA). MasterChef-style: each
 * harvest adds harvested * 10^12 / raisedA to accFeePerShare, and you receive
 * contribA * accFeePerShare / 10^12 minus what you already took (your reward
 * debt).
 *
 * Usage: node Contract12scripts/claimSyndicateReward.js <syndicateId>
 *   syndicateId (number): An active syndicate (status 1).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-claimSyndicateReward
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/claimSyndicateReward.js",
  contract: "saturnsyndicate",
  method: "claimSyndicateReward",
  params: [
    { name: "from", type: "address", desc: "Must be a member of the syndicate." },
    { name: "syndicateId", type: "number", desc: "An active syndicate (status 1)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-claimSyndicateReward",
});
