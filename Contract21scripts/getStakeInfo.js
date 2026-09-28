#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getStakeInfo — read (free, no wallet)
 * getStakeInfo(user: address, tokenSymbol: string): string
 *
 * Returns a packed summary string for a user's position in a single call:
 * "stake:{n}_debt:{n}_pending:{n}". Convenient for a compact dashboard widget
 * or a single-RPC snapshot of a user's full position.
 *
 * Returns string: Packed string e.g.
 * "stake:500000000_debt:1234000000000_pending:12300".
 *
 * Usage: node Contract21scripts/getStakeInfo.js <user> <tokenSymbol>
 *   user (address): The staker's address.
 *   tokenSymbol (string): The staked token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getStakeInfo
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getStakeInfo.js",
  contract: "saturnholders",
  method: "getStakeInfo",
  params: [
    { name: "user", type: "address", desc: "The staker's address." },
    { name: "tokenSymbol", type: "string", desc: "The staked token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getStakeInfo",
});
