#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.activateSyndicate — write (signed transaction, needs PHANTASMA_WIF)
 * activateSyndicate(from: address, syndicateId: number)
 *
 * Creator converts the pooled capital into a real pool. The syndicate contract
 * itself becomes the pool provider, and the pool is immediately
 * financial-locked so nobody can accidentally remove it.
 *
 * Usage: node Contract12scripts/activateSyndicate.js <syndicateId>
 *   syndicateId (number): A syndicate in status 0 with raisedA > 0 AND
 *   raisedB > 0.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-activateSyndicate
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/activateSyndicate.js",
  contract: "saturnsyndicate",
  method: "activateSyndicate",
  params: [
    { name: "from", type: "address", desc: "Must be the syndicate creator." },
    { name: "syndicateId", type: "number", desc: "A syndicate in status 0 with raisedA > 0 AND raisedB > 0." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-activateSyndicate",
});
