#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getLoanRegistered — read (free, no wallet)
 * getLoanRegistered(loanId: number): number
 *
 * Returns 1 if the loan was registered with this contract at creation (via
 * onLoanCreated hook from saturnloans), 0 if not. A loan must be registered
 * for rewards to be distributed on repayment.
 *
 * Returns number: 1 if registered, 0 if not.
 *
 * Usage: node Lending8scripts/getLoanRegistered.js <loanId>
 *   loanId (number): Loan ID as assigned by saturnloans.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getLoanRegistered
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getLoanRegistered.js",
  contract: "saturntaz",
  method: "getLoanRegistered",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID as assigned by saturnloans." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getLoanRegistered",
});
