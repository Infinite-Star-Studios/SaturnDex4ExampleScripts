#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getAdmin — read (free, no wallet)
 * getAdmin(): address
 *
 * Returns the current protocol admin address for the lending layer. Use this
 * to verify upgrade authority or to display governance ownership in your UI.
 *
 * Returns address: Current lending config admin address.
 *
 * Usage: node Lending1scripts/getAdmin.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getAdmin
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getAdmin.js",
  contract: "saturnlendcfg",
  method: "getAdmin",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getAdmin",
});
