#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getMinCollateralValue — read (free, no wallet)
 * getMinCollateralValue(): number
 *
 * Minimum RA-denominated collateral value (8-decimal scaled units; default
 * 100,000,000 = 1 RA) that the protocol intends to require before a loan can
 * be created. Note for integrators: in the current release no contract
 * enforces this value — saturnmarket and saturnloans accept any positive
 * collateral valuation — so treat it as a UI hint for your loan form, not as
 * an on-chain guarantee.
 *
 * Returns number: Minimum collateral value in RA-anchor scaled units (default:
 * 100000000).
 *
 * Usage: node Lending1scripts/getMinCollateralValue.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getMinCollateralValue
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getMinCollateralValue.js",
  contract: "saturnlendcfg",
  method: "getMinCollateralValue",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getMinCollateralValue",
});
