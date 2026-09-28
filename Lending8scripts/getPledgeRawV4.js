#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getPledgeRawV4 — read (free, no wallet)
 * getPledgeRawV4(pledger: address, lender: address): number
 *
 * Returns the raw (native-decimal) RA amount of a v4 non-custodial pledge by
 * converting the stored scaled value back via scaleDownRA.
 *
 * Returns number: Raw RA amount (native decimals) of the v4 pledge; 0 if none.
 *
 * Usage: node Lending8scripts/getPledgeRawV4.js <pledger> <lender>
 *   pledger (address): Pledger address.
 *   lender (address): Lender address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getPledgeRawV4
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getPledgeRawV4.js",
  contract: "saturntaz",
  method: "getPledgeRawV4",
  params: [
    { name: "pledger", type: "address", desc: "Pledger address." },
    { name: "lender", type: "address", desc: "Lender address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getPledgeRawV4",
});
