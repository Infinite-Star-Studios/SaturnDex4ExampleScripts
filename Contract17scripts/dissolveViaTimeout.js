#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.dissolveViaTimeout — write (signed transaction, needs PHANTASMA_WIF)
 * dissolveViaTimeout(from: address, launchpadId: number)
 *
 * Anyone can call this once `endTime` has passed and the launchpad is still in
 * funding state (status 0) without having been activated. Marks the launchpad
 * as dissolved (status 2) and triggers the refund path. Useful when the
 * creator is absent or a buyer wants to recover their funds immediately after
 * the window expires. Does not require a proposal or vote since the timeout is
 * the objective trigger.
 *
 * Usage: node Contract17scripts/dissolveViaTimeout.js <launchpadId>
 *   launchpadId (number): ID of the launchpad to dissolve.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-dissolveViaTimeout
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/dissolveViaTimeout.js",
  contract: "saturnlaunchpad",
  method: "dissolveViaTimeout",
  params: [
    { name: "from", type: "address", desc: "Any witness address — typically a buyer triggering the cleanup." },
    { name: "launchpadId", type: "number", desc: "ID of the launchpad to dissolve." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-dissolveViaTimeout",
});
