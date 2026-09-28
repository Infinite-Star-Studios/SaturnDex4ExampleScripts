#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserBestStreak — read (free, no wallet)
 * getUserBestStreak(user: address): number
 *
 * The all-time longest consecutive on-time repayment streak for this user.
 * This is the streak value that feeds the credit score formula (not the
 * current streak), so it is never reset by a missed payment.
 *
 * Returns number: Best-ever on-time repayment streak.
 *
 * Usage: node Lending2scripts/getUserBestStreak.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserBestStreak
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserBestStreak.js",
  contract: "saturncredit",
  method: "getUserBestStreak",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserBestStreak",
});
