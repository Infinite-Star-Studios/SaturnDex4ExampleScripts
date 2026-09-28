#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserTotalLoans — read (free, no wallet)
 * getUserTotalLoans(user: address): number
 *
 * Lifetime count of loans ever originated by this borrower, regardless of
 * outcome.
 *
 * Returns number: Total loans originated.
 *
 * Usage: node Lending2scripts/getUserTotalLoans.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserTotalLoans
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserTotalLoans.js",
  contract: "saturncredit",
  method: "getUserTotalLoans",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserTotalLoans",
});
