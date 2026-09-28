#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getStakedAmount — read (free, no wallet)
 * getStakedAmount(user: address, tokenSymbol: string): number
 *
 * Returns the raw-unit amount of tokenSymbol currently staked by user. This is
 * the gross staked balance; subtract getPledgeLocked to get the amount
 * available for immediate unstaking.
 *
 * Returns number: Raw-unit staked balance. Returns 0 if user has no stake.
 *
 * Usage: node Contract21scripts/getStakedAmount.js <user> <tokenSymbol>
 *   user (address): The staker's address.
 *   tokenSymbol (string): The staked token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getStakedAmount
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getStakedAmount.js",
  contract: "saturnholders",
  method: "getStakedAmount",
  params: [
    { name: "user", type: "address", desc: "The staker's address." },
    { name: "tokenSymbol", type: "string", desc: "The staked token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getStakedAmount",
});
