#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getPledgerClaimable — read (free, no wallet)
 * getPledgerClaimable(pledger: address): number
 *
 * Returns the accumulated unclaimed TAZ balance owed to a pledger. Use this to
 * show a "Claimable rewards" figure in your UI before the pledger submits a
 * claimPledgeRewards transaction.
 *
 * Returns number: Raw TAZ (9-decimal) ready to claim.
 *
 * Usage: node Lending8scripts/getPledgerClaimable.js <pledger>
 *   pledger (address): Pledger address to check.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getPledgerClaimable
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getPledgerClaimable.js",
  contract: "saturntaz",
  method: "getPledgerClaimable",
  params: [
    { name: "pledger", type: "address", desc: "Pledger address to check." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getPledgerClaimable",
});
