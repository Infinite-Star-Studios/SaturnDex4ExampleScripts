#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.cancelSyndicate — write (signed transaction, needs PHANTASMA_WIF)
 * cancelSyndicate(from: address, syndicateId: number)
 *
 * Creator cancels a syndicate before it has been activated. Contributors must
 * then call withdrawContribution to pull their tokens back.
 *
 * Usage: node Contract12scripts/cancelSyndicate.js <syndicateId>
 *   syndicateId (number): A syndicate in status 0 (funding).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-cancelSyndicate
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/cancelSyndicate.js",
  contract: "saturnsyndicate",
  method: "cancelSyndicate",
  params: [
    { name: "from", type: "address", desc: "Must be the syndicate creator." },
    { name: "syndicateId", type: "number", desc: "A syndicate in status 0 (funding)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-cancelSyndicate",
});
