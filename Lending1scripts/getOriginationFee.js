#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getOriginationFee — read (free, no wallet)
 * getOriginationFee(principal: number): number
 *
 * Computes the origination fee amount for a given principal: principal ×
 * originationFeeBps / 10000. Display this as an upfront cost on the borrow
 * confirmation screen.
 *
 * Returns number: Origination fee in raw token units.
 *
 * Usage: node Lending1scripts/getOriginationFee.js <principal>
 *   principal (number): Loan principal in raw token units.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getOriginationFee
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getOriginationFee.js",
  contract: "saturnlendcfg",
  method: "getOriginationFee",
  params: [
    { name: "principal", type: "number", desc: "Loan principal in raw token units." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getOriginationFee",
});
