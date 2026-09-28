#!/usr/bin/env node
"use strict";

/**
 * saturnrewards.endCampaign — write (signed transaction, needs PHANTASMA_WIF)
 * endCampaign(from: address, campaignId: number)
 *
 * Called by the campaign creator at least 30 days (2,592,000 s) after the end
 * time. Marks the campaign inactive, sets getCampaignRewardClaimed() to the
 * full reward total, removes the id from getAllCampaignIds() /
 * getActiveCampaignIds(), and sends the unclaimed remainder (totalReward −
 * claimed, raw units) to the creator. Pools that never claimed keep their
 * campaign lock until the provider calls withdrawFromCampaign() or claims (the
 * claim pays 0).
 *
 * Returns void: Success = campaign closed and unclaimed tokens returned.
 *
 * Usage: node Contract7scripts/endCampaign.js <campaignId>
 *   campaignId (number): Campaign to end.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrewards-endCampaign
 */

const { send } = require("../common");

send({
  file: "Contract7scripts/endCampaign.js",
  contract: "saturnrewards",
  method: "endCampaign",
  params: [
    { name: "from", type: "address", desc: "Original campaign creator wallet (must be witness)." },
    { name: "campaignId", type: "number", desc: "Campaign to end." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrewards-endCampaign",
});
