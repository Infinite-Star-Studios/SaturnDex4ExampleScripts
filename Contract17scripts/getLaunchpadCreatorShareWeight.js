#!/usr/bin/env node
"use strict";

/**
 * saturnlaunchpad.getLaunchpadCreatorShareWeight — read (free, no wallet)
 * getLaunchpadCreatorShareWeight(launchpadId: number): number
 *
 * Returns the creator's fee-sharing weight. Set to `raisedQuote` at activation
 * (equal to total buyer stake) and never changed after. It also selects the
 * dissolution path: 0 on a dissolved launchpad means it dissolved before
 * activation (claimFundingRefund), > 0 means claimDissolution. The creator's
 * dissolution claim is tracked in a separate flag with no getter.
 *
 * Returns number: Creator share weight in quote units.
 *
 * Usage: node Contract17scripts/getLaunchpadCreatorShareWeight.js <launchpadId>
 *   launchpadId (number): ID of the launchpad.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadCreatorShareWeight
 */

const { read } = require("../common");

read({
  file: "Contract17scripts/getLaunchpadCreatorShareWeight.js",
  contract: "saturnlaunchpad",
  method: "getLaunchpadCreatorShareWeight",
  params: [
    { name: "launchpadId", type: "number", desc: "ID of the launchpad." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlaunchpad-getLaunchpadCreatorShareWeight",
});
