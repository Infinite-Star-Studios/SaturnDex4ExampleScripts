#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserRegisteredAt — read (free, no wallet)
 * getUserRegisteredAt(user: address): number
 *
 * Returns the Unix timestamp when the user first registered. The time-bonus
 * component of the credit score accrues from this date, so earlier
 * registration means higher potential score.
 *
 * Returns number: Unix timestamp of registration.
 *
 * Usage: node Lending2scripts/getUserRegisteredAt.js <user>
 *   user (address): The registered borrower.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserRegisteredAt
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserRegisteredAt.js",
  contract: "saturncredit",
  method: "getUserRegisteredAt",
  params: [
    { name: "user", type: "address", desc: "The registered borrower." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserRegisteredAt",
});
