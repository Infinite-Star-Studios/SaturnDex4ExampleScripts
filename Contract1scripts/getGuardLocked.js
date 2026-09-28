#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getGuardLocked — read (free, no wallet)
 * getGuardLocked(user: address): number
 *
 * Returns 1 if the given user currently holds a reentrancy guard slot (meaning
 * they are mid-transaction somewhere in the protocol), 0 otherwise. Normally
 * this should be 0 between transactions.
 *
 * Returns number: 1 = locked, 0 = free.
 *
 * Usage: node Contract1scripts/getGuardLocked.js <user>
 *   user (address): The wallet address to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getGuardLocked
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getGuardLocked.js",
  contract: "saturnadmin",
  method: "getGuardLocked",
  params: [
    { name: "user", type: "address", desc: "The wallet address to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getGuardLocked",
});
