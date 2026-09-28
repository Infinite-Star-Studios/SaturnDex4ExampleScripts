#!/usr/bin/env node
"use strict";

/**
 * saturnholders.getPledgeLocked — read (free, no wallet)
 * getPledgeLocked(user: address, tokenSymbol: string): number
 *
 * Returns the raw-unit amount of tokenSymbol currently locked against
 * unstaking for user by a Saturn Lending pledge (via saturntaz). The
 * available-for-unstake amount is stakedAmount − pledgeLocked. Query this
 * alongside getStakedAmount to surface the correct withdrawable balance in
 * your UI.
 *
 * Returns number: Raw-unit amount currently locked by an active saturntaz
 * pledge. Returns 0 if no pledge is active.
 *
 * Usage: node Contract21scripts/getPledgeLocked.js <user> <tokenSymbol>
 *   user (address): The staker's address.
 *   tokenSymbol (string): The staked token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnholders-getPledgeLocked
 */

const { read } = require("../common");

read({
  file: "Contract21scripts/getPledgeLocked.js",
  contract: "saturnholders",
  method: "getPledgeLocked",
  params: [
    { name: "user", type: "address", desc: "The staker's address." },
    { name: "tokenSymbol", type: "string", desc: "The staked token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnholders-getPledgeLocked",
});
