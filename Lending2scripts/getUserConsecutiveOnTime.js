#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserConsecutiveOnTime — read (free, no wallet)
 * getUserConsecutiveOnTime(user: address): number
 *
 * The current unbroken run of on-time repayments. Resets to 0 on a late
 * payment or default. Useful for showing a user their active streak as a
 * retention / gamification signal.
 *
 * Returns number: Active consecutive on-time repayment count.
 *
 * Usage: node Lending2scripts/getUserConsecutiveOnTime.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserConsecutiveOnTime
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserConsecutiveOnTime.js",
  contract: "saturncredit",
  method: "getUserConsecutiveOnTime",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserConsecutiveOnTime",
});
