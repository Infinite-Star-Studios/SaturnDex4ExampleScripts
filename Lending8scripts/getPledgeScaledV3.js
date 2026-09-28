#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getPledgeScaledV3 — read (free, no wallet)
 * getPledgeScaledV3(pledger: address, lender: address): number
 *
 * Returns the scaled (8-decimal) RA amount of a pledger's active v3 custodial
 * pledge to a specific lender. Returns 0 if no pledge exists.
 *
 * Returns number: Scaled RA amount (8-dec) of the v3 pledge; 0 if none.
 *
 * Usage: node Lending8scripts/getPledgeScaledV3.js <pledger> <lender>
 *   pledger (address): Pledger address.
 *   lender (address): Lender address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getPledgeScaledV3
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getPledgeScaledV3.js",
  contract: "saturntaz",
  method: "getPledgeScaledV3",
  params: [
    { name: "pledger", type: "address", desc: "Pledger address." },
    { name: "lender", type: "address", desc: "Lender address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getPledgeScaledV3",
});
