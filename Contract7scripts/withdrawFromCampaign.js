#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.withdrawFromCampaign — write (signed transaction, needs PHANTASMA_WIF)
 * withdrawFromCampaign(from: address, poolId: number, campaignId: number)
 *
 * Unenrolls the pool and removes this campaign's lock at once. It forfeits the
 * pool's share: its weight is subtracted from getCampaignTotalLocked(), so the
 * pools that remain split the pot. There is no time check: it works before or
 * after the end time, and after endCampaign() it is the clean way to unlock a
 * pool that never claimed (a late claim pays 0). Not allowed once the pool has
 * claimed. While the campaign is still running the pool may enroll again, with
 * a new weight based on its liquidity and the time left.
 *
 * Returns void: Success = enrollment cleared and pool unlocked.
 *
 * Usage: node Contract7scripts/withdrawFromCampaign.js <poolId> <campaignId>
 *   poolId (number): Enrolled pool.
 *   campaignId (number): Campaign to withdraw from.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-withdrawFromCampaign
 */

const { send } = require("../common");

send({
  file: "Contract7scripts/withdrawFromCampaign.js",
  contract: "saturnrewards",
  method: "withdrawFromCampaign",
  params: [
    { name: "from", type: "address", desc: "Pool provider wallet (must be witness)." },
    { name: "poolId", type: "number", desc: "Enrolled pool." },
    { name: "campaignId", type: "number", desc: "Campaign to withdraw from." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrewards-withdrawFromCampaign",
});
