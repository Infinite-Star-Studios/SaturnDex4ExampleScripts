#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserActiveLoans — read (free, no wallet)
 * getUserActiveLoans(user: address): number
 *
 * Count of currently open loans. Increments on loan creation; decrements when
 * a loan is fully repaid, defaulted or liquidated. saturnmarket.acceptQuote
 * reverts with "Maximum concurrent loans reached" once this reaches
 * saturnlendcfg.getMaxLoansPerUser() (5 live).
 *
 * Returns number: Number of currently active loans.
 *
 * Usage: node Lending2scripts/getUserActiveLoans.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserActiveLoans
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserActiveLoans.js",
  contract: "saturncredit",
  method: "getUserActiveLoans",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserActiveLoans",
});
