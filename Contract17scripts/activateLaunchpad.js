#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.activateLaunchpad — write (signed transaction, needs PHANTASMA_WIF)
 * activateLaunchpad(from: address, launchpadId: number)
 *
 * Called by the creator to finalize a successful launch. Transfers the raised
 * quote tokens and the sold tokenA into a new Saturn pool, registers the pool,
 * and locks it under the launchpad's financial lock. The creator's share
 * weight is set to equal the total raised quote (matching buyers 1:1 so the
 * creator holds ~50% of pool fees). Any unsold tokenA is returned to the
 * creator immediately. After activation all participants earn trading fees
 * proportional to their share weight.
 *
 * Usage: node Contract17scripts/activateLaunchpad.js <launchpadId>
 *   launchpadId (number): ID of the launchpad to activate.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-activateLaunchpad
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/activateLaunchpad.js",
  contract: "saturnlaunchpad",
  method: "activateLaunchpad",
  params: [
    { name: "from", type: "address", desc: "Creator's address; must be the transaction witness." },
    { name: "launchpadId", type: "number", desc: "ID of the launchpad to activate." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-activateLaunchpad",
});
