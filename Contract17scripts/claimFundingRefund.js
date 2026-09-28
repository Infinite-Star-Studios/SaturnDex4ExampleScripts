#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.claimFundingRefund — write (signed transaction, needs PHANTASMA_WIF)
 * claimFundingRefund(from: address, launchpadId: number)
 *
 * Refunds participants after a pre-activation dissolution (status 2,
 * creatorShareWeight == 0) — i.e. the launchpad was dissolved by timeout or
 * vote before `activateLaunchpad` was ever called. The creator reclaims their
 * full escrowed tokenA; each buyer reclaims their full committed tokenQuote.
 * The original `tokensForSale` value is preserved for indexers (v4.1.1 audit
 * fix) via a dedicated reclaim flag rather than zeroing the field.
 *
 * Usage: node Contract17scripts/claimFundingRefund.js <launchpadId>
 *   launchpadId (number): ID of the dissolved launchpad.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-claimFundingRefund
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/claimFundingRefund.js",
  contract: "saturnlaunchpad",
  method: "claimFundingRefund",
  params: [
    { name: "from", type: "address", desc: "Creator or buyer address; must be the transaction witness." },
    { name: "launchpadId", type: "number", desc: "ID of the dissolved launchpad." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-claimFundingRefund",
});
