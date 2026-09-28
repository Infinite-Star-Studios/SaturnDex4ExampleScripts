#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.cancelLaunchpad — write (signed transaction, needs PHANTASMA_WIF)
 * cancelLaunchpad(from: address, launchpadId: number)
 *
 * Allows the creator to abort their launchpad before any buyers have
 * committed. Immediately returns all escrowed tokenA to the creator and sets
 * the launchpad status to Cancelled (3). It only works while no buyer holds a
 * commitment (buyers who withdrew do not count), before or after endTime. With
 * buyers in, the creator can neither cancel nor propose a dissolution:
 * activate once the fill is reached, or after endTime anyone (the creator
 * included) can call `dissolveViaTimeout`, after which everyone uses
 * `claimFundingRefund`.
 *
 * Usage: node Contract17scripts/cancelLaunchpad.js <launchpadId>
 *   launchpadId (number): ID of the launchpad to cancel.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-cancelLaunchpad
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/cancelLaunchpad.js",
  contract: "saturnlaunchpad",
  method: "cancelLaunchpad",
  params: [
    { name: "from", type: "address", desc: "Creator's address; must be the transaction witness." },
    { name: "launchpadId", type: "number", desc: "ID of the launchpad to cancel." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-cancelLaunchpad",
});
