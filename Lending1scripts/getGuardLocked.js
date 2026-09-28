#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getGuardLocked — read (free, no wallet)
 * getGuardLocked(user: address): number
 *
 * Returns 1 if the lending reentrancy guard is currently locked for the given
 * user address, 0 otherwise. Use for debugging hung transactions; under normal
 * conditions this should always return 0 between transactions.
 *
 * Returns number: 1 if guard is active (locked), 0 if free.
 *
 * Usage: node Lending1scripts/getGuardLocked.js <user>
 *   user (address): User address to check.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getGuardLocked
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getGuardLocked.js",
  contract: "saturnlendcfg",
  method: "getGuardLocked",
  params: [
    { name: "user", type: "address", desc: "User address to check." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getGuardLocked",
});
