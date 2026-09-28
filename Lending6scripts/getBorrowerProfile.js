#!/usr/bin/env node
"use strict";

/**
 * saturnmarket.getBorrowerProfile — read (free, no wallet)
 * getBorrowerProfile(borrower: address): string
 *
 * Returns a packed credit summary for a borrower address, useful for lender
 * UIs that need to show creditworthiness at a glance. The string is prefixed
 * with the number of days the borrower has been in the system, then appended
 * with the full credit report from saturncredit. Format:
 * "daysInSystem:<N>_<creditReport>" (e.g. "daysInSystem:42_score:780_...").
 * The score is saturncredit's cached score, which the lending flow never
 * refreshes; simulate saturncredit.computeScore(borrower) for the live one.
 * Reverts if the address is not registered.
 *
 * Returns string: Packed string: "daysInSystem:<N>_<creditReport>".
 *
 * Usage: node Lending6scripts/getBorrowerProfile.js <borrower>
 *   borrower (address): Address of the borrower whose profile to fetch.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnmarket-getBorrowerProfile
 */

const { read } = require("../common");

read({
  file: "Lending6scripts/getBorrowerProfile.js",
  contract: "saturnmarket",
  method: "getBorrowerProfile",
  params: [
    { name: "borrower", type: "address", desc: "Address of the borrower whose profile to fetch." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnmarket-getBorrowerProfile",
});
