#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserRegistered — read (free, no wallet)
 * getUserRegistered(user: address): number
 *
 * Returns 1 if the address is registered in the credit system, 0 otherwise.
 * Gate any credit-dependent UI on this check before displaying a score.
 *
 * Returns number: 1 = registered, 0 = not registered.
 *
 * Usage: node Lending2scripts/getUserRegistered.js <user>
 *   user (address): The address to check.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserRegistered
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserRegistered.js",
  contract: "saturncredit",
  method: "getUserRegistered",
  params: [
    { name: "user", type: "address", desc: "The address to check." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserRegistered",
});
