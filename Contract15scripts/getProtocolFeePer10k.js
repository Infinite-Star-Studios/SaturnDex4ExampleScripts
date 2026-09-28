#!/usr/bin/env node
"use strict";

/**
 * saturnpredict.getProtocolFeePer10k — read (free, no wallet)
 * getProtocolFeePer10k(): number
 *
 * Returns the protocol fee taken from winning payouts, per 10,000 (200 = 2% on
 * mainnet and devnet; the admin can set 0..1000 with updateProtocolFee).
 * Refunds pay no fee. The fee is read at claim time.
 *
 * Returns number: Fee, per 10,000.
 *
 * Usage: node Contract15scripts/getProtocolFeePer10k.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpredict-getProtocolFeePer10k
 */

const { read } = require("../common");

read({
  file: "Contract15scripts/getProtocolFeePer10k.js",
  contract: "saturnpredict",
  method: "getProtocolFeePer10k",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpredict-getProtocolFeePer10k",
});
