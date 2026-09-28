#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getGuardOwner — read (free, no wallet)
 * getGuardOwner(user: address): string
 *
 * Returns the name of the lending contract that currently holds the reentrancy
 * lock for a given user (e.g. "saturnloans", "saturnmarket"). Returns an empty
 * string when the guard is free.
 *
 * Returns string: Contract name that owns the lock, or empty string if
 * unlocked.
 *
 * Usage: node Lending1scripts/getGuardOwner.js <user>
 *   user (address): User address to check.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getGuardOwner
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getGuardOwner.js",
  contract: "saturnlendcfg",
  method: "getGuardOwner",
  params: [
    { name: "user", type: "address", desc: "User address to check." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getGuardOwner",
});
