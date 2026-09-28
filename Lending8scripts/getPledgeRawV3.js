#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getPledgeRawV3 — read (free, no wallet)
 * getPledgeRawV3(pledger: address, lender: address): number
 *
 * Returns the raw (native-decimal) RA amount of a v3 custodial pledge by
 * converting the stored scaled value back via scaleDownRA. Useful for
 * displaying the pledge amount to users in familiar token units.
 *
 * Returns number: Raw RA amount (native decimals) of the v3 pledge; 0 if none.
 *
 * Usage: node Lending8scripts/getPledgeRawV3.js <pledger> <lender>
 *   pledger (address): Pledger address.
 *   lender (address): Lender address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getPledgeRawV3
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getPledgeRawV3.js",
  contract: "saturntaz",
  method: "getPledgeRawV3",
  params: [
    { name: "pledger", type: "address", desc: "Pledger address." },
    { name: "lender", type: "address", desc: "Lender address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getPledgeRawV3",
});
