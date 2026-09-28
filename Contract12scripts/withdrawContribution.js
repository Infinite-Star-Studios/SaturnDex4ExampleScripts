#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.withdrawContribution — write (signed transaction, needs PHANTASMA_WIF)
 * withdrawContribution(from: address, syndicateId: number)
 *
 * Contributor reclaims their deposit. Works while the syndicate is still in
 * funding (status 0) or after it has been cancelled (status 3). Withdraws the
 * entire outstanding contribution in one call.
 *
 * Usage: node Contract12scripts/withdrawContribution.js <syndicateId>
 *   syndicateId (number): A syndicate in status 0 or 3.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-withdrawContribution
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/withdrawContribution.js",
  contract: "saturnsyndicate",
  method: "withdrawContribution",
  params: [
    { name: "from", type: "address", desc: "Must be a member with a non-zero recorded contribution." },
    { name: "syndicateId", type: "number", desc: "A syndicate in status 0 or 3." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-withdrawContribution",
});
