#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getRewardParam — read (free, no wallet)
 * getRewardParam(key: string): number
 *
 * Returns a single reward formula parameter by key (0 for an unknown key).
 * Keys: "baseReward" (raw TAZ when every factor is at its cap), "loanCapTaz"
 * (scaled TAZ principal where the size factor saturates; 0 = no reward),
 * "minLoanTaz" (scaled TAZ principal floor, 0 = none), "feeRebateBps" (share
 * of the protocol fees earned on the loan the reward may reach, 10,000 = 100%;
 * 0 = no reward), "durationCapDays" (elapsed days where the time factor
 * saturates), "daySeconds" (length of a counted day, 0 = 86,400),
 * "pledgeCapRA" (scaled RA pledge where the pledge factor saturates),
 * "minDurationDays" (elapsed-day floor), "minPledgeRA" (floor of the lender's
 * eligible pledge, scaled RA), "minPledgeEach" (smallest single pledge, scaled
 * RA), "maxRewardPerLoan" (raw TAZ ceiling per loan), "borrowerBps",
 * "lenderBps", "pledgerBps" (the split). "loanCapRA" and "minLoanRA" are
 * retired since 1.2 and no longer read.
 *
 * Returns number: Current value of the requested reward parameter.
 *
 * Usage: node Lending8scripts/getRewardParam.js <key>
 *   key (string): Parameter key (see description for valid keys).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getRewardParam
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getRewardParam.js",
  contract: "saturntaz",
  method: "getRewardParam",
  params: [
    { name: "key", type: "string", desc: "Parameter key (see description for valid keys)." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getRewardParam",
});
