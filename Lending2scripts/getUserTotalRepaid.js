#!/usr/bin/env node
"use strict";

/**
 * saturncredit.getUserTotalRepaid — read (free, no wallet)
 * getUserTotalRepaid(user: address): number
 *
 * Total amount repaid by this user across all loans (principal plus interest,
 * as credited by saturnloans), in 8-decimal scaled units. Useful for
 * displaying lifetime repayment volume on a borrower dashboard.
 *
 * Returns number: Sum of all repayments in 8-decimal scaled units.
 *
 * Usage: node Lending2scripts/getUserTotalRepaid.js <user>
 *   user (address): The borrower's address.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-getUserTotalRepaid
 */

const { read } = require("../common");

read({
  file: "Lending2scripts/getUserTotalRepaid.js",
  contract: "saturncredit",
  method: "getUserTotalRepaid",
  params: [
    { name: "user", type: "address", desc: "The borrower's address." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturncredit-getUserTotalRepaid",
});
