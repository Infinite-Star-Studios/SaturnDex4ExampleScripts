#!/usr/bin/env node
"use strict";

/**
 * saturnloans.getLoanLender — read (free, no wallet)
 * getLoanLender(loanId: number): address
 *
 * Returns the lender address. For auto loans this is the saturnauto contract
 * address; for P2P loans via saturnmarket it is the individual lender's
 * wallet.
 *
 * Returns address: Lender address.
 *
 * Usage: node Lending4scripts/getLoanLender.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnloans-getLoanLender
 */

const { read } = require("../common");

read({
  file: "Lending4scripts/getLoanLender.js",
  contract: "saturnloans",
  method: "getLoanLender",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnloans-getLoanLender",
});
