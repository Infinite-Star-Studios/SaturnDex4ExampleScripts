#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getPledgeExpiry — read (free, no wallet)
 * getPledgeExpiry(pledger: address, lender: address): number
 *
 * Returns the unix timestamp at which the pledge (v3 or v4) expires and
 * becomes withdrawable. Returns 0 if no pledge has been made.
 *
 * Returns number: Unix expiry timestamp (seconds); 0 if no pledge.
 *
 * Usage: node Lending8scripts/getPledgeExpiry.js <pledger> <lender>
 *   pledger (address): Pledger address.
 *   lender (address): Lender address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getPledgeExpiry
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getPledgeExpiry.js",
  contract: "saturntaz",
  method: "getPledgeExpiry",
  params: [
    { name: "pledger", type: "address", desc: "Pledger address." },
    { name: "lender", type: "address", desc: "Lender address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getPledgeExpiry",
});
