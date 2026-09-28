#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserLastActivity — read (free, no wallet)
 * getUserLastActivity(user: address): number
 *
 * Unix timestamp of the most recent registration, loan creation, repayment or
 * default. Use this to show how recently a borrower was active.
 *
 * Returns number: Unix timestamp of last event.
 *
 * Usage: node Lending2scripts/getUserLastActivity.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserLastActivity
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserLastActivity.js",
  contract: "saturncredit",
  method: "getUserLastActivity",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserLastActivity",
});
