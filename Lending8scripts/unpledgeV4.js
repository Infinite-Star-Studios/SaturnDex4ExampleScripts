#!/usr/bin/env node
"use strict";

/**
 * saturntaz.unpledgeV4 — write (signed transaction, needs PHANTASMA_WIF)
 * unpledgeV4(from: address, lender: address)
 *
 * Releases a non-custodial v4 RA pledge after the 30-day window expires. Calls
 * saturnholders.unlockPledge to restore the RA to its normal unlocked-stake
 * state. Will revert if the pledge has not yet expired.
 *
 * Usage: node Lending8scripts/unpledgeV4.js <lender>
 *   lender (address): Lender address the pledge was registered against.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-unpledgeV4
 */

const { send } = require("../common");

send({
  file: "Lending8scripts/unpledgeV4.js",
  contract: "saturntaz",
  method: "unpledgeV4",
  params: [
    { name: "from", type: "address", desc: "Pledger address (must be witness)." },
    { name: "lender", type: "address", desc: "Lender address the pledge was registered against." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturntaz-unpledgeV4",
});
