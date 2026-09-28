#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.claimCampaignReward — write (signed transaction, needs PHANTASMA_WIF)
 * claimCampaignReward(from: address, poolId: number, campaignId: number)
 *
 * Called after the campaign's end time. Pays the provider's share of the
 * reward pot: share = poolWeight × totalReward / totalLocked, in raw reward
 * units, rounded down. poolWeight and totalLocked are the liquidity-seconds
 * from getPoolCampaignLiquidity() and getCampaignTotalLocked(). The share is
 * capped at what is still unclaimed (totalReward −
 * getCampaignRewardClaimed()). The claim then removes this campaign's lock
 * from the pool. Each enrollment settles once (4.1.5): the claim is recorded
 * even when the capped share is 0, so it cannot be repeated. After
 * endCampaign() nothing is left, so a late claim pays 0 (it still removes the
 * lock); withdrawFromCampaign() is the cleaner way to unlock the pool.
 *
 * Returns void: Success = reward transferred and pool unlocked.
 *
 * Usage: node Contract7scripts/claimCampaignReward.js <poolId> <campaignId>
 *   poolId (number): Enrolled pool.
 *   campaignId (number): Campaign being claimed.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-claimCampaignReward
 */

const { send } = require("../common");

send({
  file: "Contract7scripts/claimCampaignReward.js",
  contract: "saturnrewards",
  method: "claimCampaignReward",
  params: [
    { name: "from", type: "address", desc: "Pool provider wallet (must be witness)." },
    { name: "poolId", type: "number", desc: "Enrolled pool." },
    { name: "campaignId", type: "number", desc: "Campaign being claimed." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrewards-claimCampaignReward",
});
