#!/usr/bin/env node
"use strict";

/**
 * saturnrental.adjustFee — write (signed transaction, needs PHANTASMA_WIF)
 * adjustFee(from: address, rentalId: number, newFeePer10k: number)
 *
 * Renter changes the pool's fee rate, within the [minFee, maxFee] window set
 * at list time. This is the core lever of the franchise model — raise fees to
 * earn more per swap, lower them to attract volume.
 *
 * Usage: node Contract10scripts/adjustFee.js <rentalId> <newFeePer10k>
 *   rentalId (number): An active rental that has not yet passed
 *   paidThroughTime.
 *   newFeePer10k (number): New pool fee, per 10,000. Must be within
 *   [rentalMinFee, rentalMaxFee].
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnrental-adjustFee
 */

const { send } = require("../common");

send({
  file: "Contract10scripts/adjustFee.js",
  contract: "saturnrental",
  method: "adjustFee",
  params: [
    { name: "from", type: "address", desc: "Must be the current renter." },
    { name: "rentalId", type: "number", desc: "An active rental that has not yet passed paidThroughTime." },
    { name: "newFeePer10k", type: "number", desc: "New pool fee, per 10,000. Must be within [rentalMinFee, rentalMaxFee]." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnrental-adjustFee",
});
