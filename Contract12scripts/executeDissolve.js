#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.executeDissolve — write (signed transaction, needs PHANTASMA_WIF)
 * executeDissolve(from: address, syndicateId: number)
 *
 * Any member executes a proposal once the 72-hour timelock has elapsed and the
 * votes represent a strict majority of the raised tokenA (votes * 2 >
 * raisedA). Pending fees are harvested, the pool's reserves are pulled into
 * the syndicate contract, the pool is deactivated and its financial lock
 * released, and status becomes 2 (dissolved). Members then call
 * claimDissolution() for their proportional share of the reserves.
 *
 * Usage: node Contract12scripts/executeDissolve.js <syndicateId>
 *   syndicateId (number): Syndicate with a passed proposal.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-executeDissolve
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/executeDissolve.js",
  contract: "saturnsyndicate",
  method: "executeDissolve",
  params: [
    { name: "from", type: "address", desc: "Member (witness)." },
    { name: "syndicateId", type: "number", desc: "Syndicate with a passed proposal." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-executeDissolve",
});
