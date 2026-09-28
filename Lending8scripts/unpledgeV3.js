#!/usr/bin/env node
"use strict";

/**
 * saturntaz.unpledgeV3 — write (signed transaction, needs PHANTASMA_WIF)
 * unpledgeV3(from: address, lender: address)
 *
 * Withdraws a custodial v3 RA pledge after the 30-day window expires. Returns
 * the originally-pledged RA to the caller (amount is the stored scaled amount
 * converted back to raw). Will revert if the pledge has not yet expired —
 * pledges are time-locked.
 *
 * Usage: node Lending8scripts/unpledgeV3.js <lender>
 *   lender (address): Lender address the pledge was registered against.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-unpledgeV3
 */

const { send } = require("../common");

send({
  file: "Lending8scripts/unpledgeV3.js",
  contract: "saturntaz",
  method: "unpledgeV3",
  params: [
    { name: "from", type: "address", desc: "Pledger address (must be witness)." },
    { name: "lender", type: "address", desc: "Lender address the pledge was registered against." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturntaz-unpledgeV3",
});
