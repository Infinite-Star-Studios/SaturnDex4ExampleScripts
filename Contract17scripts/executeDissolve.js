#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.executeDissolve — write (signed transaction, needs PHANTASMA_WIF)
 * executeDissolve(from: address, launchpadId: number)
 *
 * Executes an approved dissolution proposal once the 72-hour timelock has
 * elapsed and a strict majority of buyer stake has voted yes. For an active
 * launchpad (status 1) this harvests any pending fees, removes pool reserves,
 * and makes the funds claimable via `claimDissolution`. For a funding-state
 * launchpad it simply marks it dissolved, and buyers use `claimFundingRefund`.
 *
 * Usage: node Contract17scripts/executeDissolve.js <launchpadId>
 *   launchpadId (number): ID of the launchpad to dissolve.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-executeDissolve
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/executeDissolve.js",
  contract: "saturnlaunchpad",
  method: "executeDissolve",
  params: [
    { name: "from", type: "address", desc: "Any buyer (not the creator); must be the transaction witness." },
    { name: "launchpadId", type: "number", desc: "ID of the launchpad to dissolve." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-executeDissolve",
});
