#!/usr/bin/env node
"use strict";

/**
 * saturnrental.listForRentV2 — write (signed transaction, needs PHANTASMA_WIF)
 * listForRentV2(from: address, poolId: number, dailyRate: number, depositRequired: number, minFeePer10k: number, maxFeePer10k: number, minTermDays: number, maxTermDays: number)
 *
 * Pool provider lists their pool for rent. Defines the price (SOUL per day),
 * the SOUL deposit a renter must post, the fee envelope the renter may operate
 * inside, and the minimum and maximum term. The live fee is recorded when a
 * renter steps in, so it can be restored at the end. The pool must be free of
 * bonds, rentals, options and any other financial product. Listing does not
 * lock the pool. Claim pending provider fees (saturnfees.claimProviderFees)
 * before a renter steps in: fees still unclaimed then go to the renter.
 *
 * Usage: node Contract10scripts/listForRentV2.js <poolId> <dailyRate> <depositRequired> <minFeePer10k> <maxFeePer10k> <minTermDays> <maxTermDays>
 *   poolId (number): Active pool to list.
 *   dailyRate (number): Rent per day in raw SOUL units (8 decimals).
 *   depositRequired (number): Refundable deposit in raw SOUL units.
 *   minFeePer10k (number): Lowest fee the renter may set (>= protocol
 *   minimum).
 *   maxFeePer10k (number): Highest fee the renter may set (<= protocol
 *   maximum).
 *   minTermDays (number): Minimum rental length, 1..365 days; paid up front
 *   by the renter.
 *   maxTermDays (number): Hard cap on the rental length, minTermDays..3650
 *   days; extensions cannot pass it.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-listForRentV2
 */

const { send } = require("../common");

send({
  file: "Contract10scripts/listForRentV2.js",
  contract: "saturnrental",
  method: "listForRentV2",
  params: [
    { name: "from", type: "address", desc: "Pool provider (witness)." },
    { name: "poolId", type: "number", desc: "Active pool to list." },
    { name: "dailyRate", type: "number", desc: "Rent per day in raw SOUL units (8 decimals)." },
    { name: "depositRequired", type: "number", desc: "Refundable deposit in raw SOUL units." },
    { name: "minFeePer10k", type: "number", desc: "Lowest fee the renter may set (>= protocol minimum)." },
    { name: "maxFeePer10k", type: "number", desc: "Highest fee the renter may set (<= protocol maximum)." },
    { name: "minTermDays", type: "number", desc: "Minimum rental length, 1..365 days; paid up front by the renter." },
    { name: "maxTermDays", type: "number", desc: "Hard cap on the rental length, minTermDays..3650 days; extensions cannot pass it." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrental-listForRentV2",
});
