#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserOnTimeRepays — read (free, no wallet)
 * getUserOnTimeRepays(user: address): number
 *
 * Count of payments made on time: saturnloans counts a payment as on time when
 * it arrives no later than the installment due date plus
 * saturnlendcfg.getGracePeriod() (259,200 s = 3 days live). Each contributes
 * onTimeRepayBonus points (50 live) to the credit score, capped at
 * onTimeRepayCap (350 live).
 *
 * Returns number: Cumulative on-time repayment count.
 *
 * Usage: node Lending2scripts/getUserOnTimeRepays.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserOnTimeRepays
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserOnTimeRepays.js",
  contract: "saturncredit",
  method: "getUserOnTimeRepays",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserOnTimeRepays",
});
