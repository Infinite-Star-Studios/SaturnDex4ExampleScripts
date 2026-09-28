#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getGuardOwner — read (free, no wallet)
 * getGuardOwner(user: address): string
 *
 * Returns the name of the Saturn contract that currently holds the per-user
 * reentrancy lock for `user` (for example "saturnswap" or "saturnbonds"), or
 * an empty string when the user is not locked. Pair it with getGuardLocked()
 * when diagnosing a transaction that was refused with a reentrancy error.
 *
 * Returns string: Contract name holding the lock, or "" when unlocked.
 *
 * Usage: node Contract1scripts/getGuardOwner.js <user>
 *   user (address): Wallet whose lock is inspected.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getGuardOwner
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getGuardOwner.js",
  contract: "saturnadmin",
  method: "getGuardOwner",
  params: [
    { name: "user", type: "address", desc: "Wallet whose lock is inspected." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getGuardOwner",
});
