#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getAdmin — read (free, no wallet)
 * getAdmin(): address
 *
 * Returns the current protocol admin address. The admin slice of every swap
 * fee (getAdminPct()) is paid to it, and the admin-only methods of saturnadmin
 * and most other v4 contracts check its signature (SATURN keeps its own owner,
 * SATURN.getOwner()). Use it to show protocol ownership or to check whether a
 * wallet has admin rights.
 *
 * Returns address: The admin address for the Saturn protocol.
 *
 * Usage: node Contract1scripts/getAdmin.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getAdmin
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getAdmin.js",
  contract: "saturnadmin",
  method: "getAdmin",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getAdmin",
});
