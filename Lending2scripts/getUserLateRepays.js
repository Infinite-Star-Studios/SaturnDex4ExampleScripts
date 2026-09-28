#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserLateRepays — read (free, no wallet)
 * getUserLateRepays(user: address): number
 *
 * Count of late payments received. Each deducts lateRepayPenalty points from
 * the credit score (uncapped penalty).
 *
 * Returns number: Cumulative late repayment count.
 *
 * Usage: node Lending2scripts/getUserLateRepays.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserLateRepays
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserLateRepays.js",
  contract: "saturncredit",
  method: "getUserLateRepays",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserLateRepays",
});
