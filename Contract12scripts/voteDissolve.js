#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.voteDissolve — write (signed transaction, needs PHANTASMA_WIF)
 * voteDissolve(from: address, syndicateId: number)
 *
 * A member adds their share weight (tokenA contribution) to the open
 * dissolution proposal. Each member votes at most once per proposal; there is
 * no vote against — members who disagree simply do not vote.
 *
 * Usage: node Contract12scripts/voteDissolve.js <syndicateId>
 *   syndicateId (number): Syndicate with an open proposal.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-voteDissolve
 */

const { send } = require("../common");

send({
  file: "Contract12scripts/voteDissolve.js",
  contract: "saturnsyndicate",
  method: "voteDissolve",
  params: [
    { name: "from", type: "address", desc: "Member (witness)." },
    { name: "syndicateId", type: "number", desc: "Syndicate with an open proposal." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-voteDissolve",
});
