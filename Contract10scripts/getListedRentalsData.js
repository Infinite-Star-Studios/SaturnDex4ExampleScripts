#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getListedRentalsData — read (free, no wallet)
 * getListedRentalsData(): string*
 *
 * Same row layout as getActiveRentalsData() for listings in status 0; the
 * operator field is the text "[Null address]".
 *
 * Returns string*: Stream of
 * "rentalId|poolId|owner|operator|dailyRate|deposit|minFee|maxFee|minTermDays|maxTermDays|status"
 * rows.
 *
 * Usage: node Contract10scripts/getListedRentalsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getListedRentalsData
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getListedRentalsData.js",
  contract: "saturnrental",
  method: "getListedRentalsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getListedRentalsData",
});
