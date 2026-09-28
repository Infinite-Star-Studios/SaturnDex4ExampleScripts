#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.proposeDissolve — write (signed transaction, needs PHANTASMA_WIF)
 * proposeDissolve(from: address, launchpadId: number)
 *
 * Opens a dissolution proposal for an active or funding launchpad. The
 * proposer must be a buyer (committed quote > 0); the creator cannot propose.
 * The proposer's committed quote is automatically counted as the first vote. A
 * 72-hour timelock (259,200 seconds) starts from proposal time before
 * `executeDissolve` can be called. A launchpad gets one proposal in its life:
 * it never expires or closes and keeps collecting votes until executed, and a
 * proposal opened during funding stays open after activation.
 *
 * Usage: node Contract17scripts/proposeDissolve.js <launchpadId>
 *   launchpadId (number): ID of the launchpad to target.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-proposeDissolve
 */

const { send } = require("../common");

send({
  file: "Contract17scripts/proposeDissolve.js",
  contract: "saturnlaunchpad",
  method: "proposeDissolve",
  params: [
    { name: "from", type: "address", desc: "A buyer's address; must be the transaction witness. Creator is excluded." },
    { name: "launchpadId", type: "number", desc: "ID of the launchpad to target." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-proposeDissolve",
});
