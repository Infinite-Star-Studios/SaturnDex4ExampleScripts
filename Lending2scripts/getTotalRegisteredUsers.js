#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getTotalRegisteredUsers — read (free, no wallet)
 * getTotalRegisteredUsers(): number
 *
 * Total number of distinct addresses that have ever registered in the credit
 * system. Useful for protocol analytics and growth dashboards.
 *
 * Returns number: Cumulative registered-user count.
 *
 * Usage: node Lending2scripts/getTotalRegisteredUsers.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getTotalRegisteredUsers
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getTotalRegisteredUsers.js",
  contract: "saturncredit",
  method: "getTotalRegisteredUsers",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getTotalRegisteredUsers",
});
