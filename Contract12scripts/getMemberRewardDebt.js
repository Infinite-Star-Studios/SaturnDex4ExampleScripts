#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getMemberRewardDebt — read (free, no wallet)
 * getMemberRewardDebt(syndicateId: number, member: address): string
 *
 * The member's reward-debt checkpoints for both tokens packed as
 * "debtA:<n>_debtB:<n>". Subtract from contribution × accumulator to reproduce
 * the amount claimSyndicateReward() will pay.
 *
 * Returns string: "debtA:<n>_debtB:<n>".
 *
 * Usage: node Contract12scripts/getMemberRewardDebt.js <syndicateId> <member>
 *   syndicateId (number): Syndicate.
 *   member (address): Member wallet.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getMemberRewardDebt
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getMemberRewardDebt.js",
  contract: "saturnsyndicate",
  method: "getMemberRewardDebt",
  params: [
    { name: "syndicateId", type: "number", desc: "Syndicate." },
    { name: "member", type: "address", desc: "Member wallet." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getMemberRewardDebt",
});
