#!/usr/bin/env node
"use strict";

/**
 * saturntaz.trackPledgerClaimable — write (signed transaction, needs PHANTASMA_WIF)
 * trackPledgerClaimable(pledger: address)
 *
 * Counts a pledger's balance credited before 1.2.2 in the owed total, so the
 * treasury stops spending it on new rewards. Open to anyone and idempotent: it
 * adds only what is owed and not yet counted.
 *
 * Usage: node Lending8scripts/trackPledgerClaimable.js <pledger>
 *   pledger (address): Pledger whose balance to track (no signature needed
 *   from them).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-trackPledgerClaimable
 */

const { send } = require("../common");

send({
  file: "Lending8scripts/trackPledgerClaimable.js",
  contract: "saturntaz",
  method: "trackPledgerClaimable",
  params: [
    { name: "pledger", type: "address", desc: "Pledger whose balance to track (no signature needed from them)." },
  ],
  walletIndex: -1,
  docs: "https://devops.saturnx.cc/reference#saturntaz-trackPledgerClaimable",
});
