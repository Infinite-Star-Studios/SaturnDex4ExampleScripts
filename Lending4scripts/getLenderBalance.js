#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLenderBalance — read (free, no wallet)
 * getLenderBalance(lender: address, tokenSymbol: string): number
 *
 * What the lender can withdraw now with withdrawLenderBalance: the lender's
 * shares of repayments, in raw token units.
 *
 * Returns number: Raw token amount (TAZ has 9 decimals).
 *
 * Usage: node Lending4scripts/getLenderBalance.js <lender> <tokenSymbol>
 *   lender (address): Lender address.
 *   tokenSymbol (string): Loan token, "TAZ" in v1.0.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLenderBalance
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLenderBalance.js",
  contract: "saturnloans",
  method: "getLenderBalance",
  params: [
    { name: "lender", type: "address", desc: "Lender address." },
    { name: "tokenSymbol", type: "string", desc: "Loan token, \"TAZ\" in v1.0." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLenderBalance",
});
