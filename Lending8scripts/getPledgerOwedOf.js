#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getPledgerOwedOf — read (free, no wallet)
 * getPledgerOwedOf(pledger: address): number
 *
 * The part of a pledger's claimable balance counted in getPledgerOwedTotal.
 * Lower than getPledgerClaimable only for a balance credited before 1.2.2;
 * trackPledgerClaimable fixes that.
 *
 * Returns number: Raw TAZ.
 *
 * Usage: node Lending8scripts/getPledgerOwedOf.js <pledger>
 *   pledger (address): Pledger address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getPledgerOwedOf
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getPledgerOwedOf.js",
  contract: "saturntaz",
  method: "getPledgerOwedOf",
  params: [
    { name: "pledger", type: "address", desc: "Pledger address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getPledgerOwedOf",
});
