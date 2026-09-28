#!/usr/bin/env node
"use strict";

/**
 * saturnadmin.getSOULfeeAddLiquidity — read (free, no wallet)
 * getSOULfeeAddLiquidity(): number
 *
 * Always returns 0. addLiquidity() no longer charges a SOUL fee; the getter
 * remains for ABI compatibility only.
 *
 * Returns number: Always 0.
 *
 * Usage: node Contract1scripts/getSOULfeeAddLiquidity.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnadmin-getSOULfeeAddLiquidity
 */

const { read } = require("../common");

read({
  file: "Contract1scripts/getSOULfeeAddLiquidity.js",
  contract: "saturnadmin",
  method: "getSOULfeeAddLiquidity",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnadmin-getSOULfeeAddLiquidity",
});
