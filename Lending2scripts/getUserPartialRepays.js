#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserPartialRepays — read (free, no wallet)
 * getUserPartialRepays(user: address): number
 *
 * Count of loans fully repaid before their final due date (saturnloans calls
 * markPartialRepay when a loan closes early; installment payments do not
 * count). Each adds partialRepayBonus points (15 live), capped at 50 in total.
 *
 * Returns number: Cumulative early/partial repayment count.
 *
 * Usage: node Lending2scripts/getUserPartialRepays.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserPartialRepays
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserPartialRepays.js",
  contract: "saturncredit",
  method: "getUserPartialRepays",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserPartialRepays",
});
