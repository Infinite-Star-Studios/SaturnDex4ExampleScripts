#!/usr/bin/env node
"use strict";

/**
 * saturnrental.getActiveRentalsData — read (free, no wallet)
 * getActiveRentalsData(): string*
 *
 * One pipe-delimited row per active rental:
 * rentalId|poolId|owner|operator|dailyRate|deposit|minFee|maxFee|minTermDays|maxTermDays|status.
 * dailyRate and deposit are raw SOUL.
 *
 * Returns string*: Stream of
 * "rentalId|poolId|owner|operator|dailyRate|deposit|minFee|maxFee|minTermDays|maxTermDays|status"
 * rows.
 *
 * Usage: node Contract10scripts/getActiveRentalsData.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-getActiveRentalsData
 */

const { read } = require("../common");

read({
  file: "Contract10scripts/getActiveRentalsData.js",
  contract: "saturnrental",
  method: "getActiveRentalsData",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnrental-getActiveRentalsData",
});
