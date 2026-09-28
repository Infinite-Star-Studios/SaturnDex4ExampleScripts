#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.getAnchorToken — read (free, no wallet)
 * getAnchorToken(): string
 *
 * Returns the current anchor token symbol (default: "RA"). Every pricing
 * lookup routes through a pool that includes this token on one side. Call this
 * before any pricing query to confirm the anchor hasn't been changed by
 * governance.
 *
 * Returns string: Symbol of the anchor token, e.g. "RA".
 *
 * Usage: node Lending7scripts/getAnchorToken.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-getAnchorToken
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/getAnchorToken.js",
  contract: "saturndexadapt",
  method: "getAnchorToken",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-getAnchorToken",
});
