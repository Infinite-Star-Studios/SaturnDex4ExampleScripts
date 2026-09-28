#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.claimDissolution — write (signed transaction, needs PHANTASMA_WIF)
 * claimDissolution(from: address, syndicateId: number)
 *
 * After a syndicate has been dissolved, each member claims their proportional
 * share of the recovered reserves in both tokens, plus any fees they had not
 * claimed yet. Single-claim only — the member entry is zeroed on success.
 *
 * Usage: node Contract12scripts/claimDissolution.js <syndicateId>
 *   syndicateId (number): A dissolved syndicate (status 2).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-claimDissolution
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/claimDissolution.js",
  contract: "saturnsyndicate",
  method: "claimDissolution",
  params: [
    { name: "from", type: "address", desc: "Must be a member with a non-zero recorded contribution." },
    { name: "syndicateId", type: "number", desc: "A dissolved syndicate (status 2)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-claimDissolution",
});
