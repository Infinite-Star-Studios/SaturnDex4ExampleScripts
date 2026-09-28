#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.proposeDissolve — write (signed transaction, needs PHANTASMA_WIF)
 * proposeDissolve(from: address, syndicateId: number)
 *
 * Any member of an active syndicate opens a dissolution proposal. The
 * proposer's own tokenA contribution is counted as the first vote and a
 * 72-hour timelock starts. A syndicate gets one proposal in its life:
 * getDissolveProposed never goes back to 0, so the proposal never expires and
 * keeps collecting votes until executeDissolve succeeds.
 *
 * Usage: node Contract12scripts/proposeDissolve.js <syndicateId>
 *   syndicateId (number): Active syndicate.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-proposeDissolve
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/proposeDissolve.js",
  contract: "saturnsyndicate",
  method: "proposeDissolve",
  params: [
    { name: "from", type: "address", desc: "Member (witness)." },
    { name: "syndicateId", type: "number", desc: "Active syndicate." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-proposeDissolve",
});
