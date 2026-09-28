#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getLenderEligiblePledge — read (free, no wallet)
 * getLenderEligiblePledge(lender: address): number
 *
 * Returns the total scaled RA amount of all currently-eligible (non-expired)
 * pledges backing a lender. This is exactly the value used by the reward
 * formula at distribution time. Useful for showing lenders how much RA backing
 * they have and for computing previewLoanReward inputs.
 *
 * Returns number: Total scaled (8-dec) RA across all active, non-expired
 * pledgers.
 *
 * Usage: node Lending8scripts/getLenderEligiblePledge.js <lender>
 *   lender (address): Lender address to evaluate.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getLenderEligiblePledge
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getLenderEligiblePledge.js",
  contract: "saturntaz",
  method: "getLenderEligiblePledge",
  params: [
    { name: "lender", type: "address", desc: "Lender address to evaluate." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getLenderEligiblePledge",
});
