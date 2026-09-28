#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.claimDissolution — write (signed transaction, needs PHANTASMA_WIF)
 * claimDissolution(from: address, launchpadId: number)
 *
 * Claims a participant's share of the pool reserves after a post-activation
 * dissolution (status 2 with creatorShareWeight > 0). Each participant
 * receives their proportional share of dissolved tokenA and tokenQuote
 * reserves plus any uncollected fee rewards. The creator and each buyer call
 * this independently. This path is only valid for launchpads that were
 * activated before being dissolved; use `claimFundingRefund` for
 * pre-activation dissolutions.
 *
 * Usage: node Contract17scripts/claimDissolution.js <launchpadId>
 *   launchpadId (number): ID of the dissolved launchpad.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-claimDissolution
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/claimDissolution.js",
  contract: "saturnlaunchpad",
  method: "claimDissolution",
  params: [
    { name: "from", type: "address", desc: "Participant's address (creator or buyer); must be the transaction witness." },
    { name: "launchpadId", type: "number", desc: "ID of the dissolved launchpad." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-claimDissolution",
});
