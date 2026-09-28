#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.writeOption — write (signed transaction, needs PHANTASMA_WIF)
 * writeOption(from: address, poolId: number, targetFeePer10k: number, premium: number, premiumToken: string, durationSeconds: number)
 *
 * Pool provider creates and lists a new option. The fee to restore is not
 * captured here: buyOption() records the pool's live fee at purchase, and that
 * is what releaseOption() / expireOption() restore. The fee at writing only
 * appears in the OptionWritten event.
 *
 * Usage: node Contract11scripts/writeOption.js <poolId> <targetFeePer10k> <premium> <premiumToken> <durationSeconds>
 *   poolId (number): The active pool you own.
 *   targetFeePer10k (number): Fee rate the buyer can snap the pool to. Per
 *   10,000. Must sit within saturnadmin.getPoolFeeRange() (30 .. 3000 on
 *   mainnet).
 *   premium (number): Up-front price the buyer pays, in raw premiumToken
 *   units. Must be > 0.
 *   premiumToken (string): Token symbol the premium is paid in. Must be a
 *   validated symbol.
 *   durationSeconds (number): Option window in seconds once bought. Must be
 *   between 3,600 (1h) and 2,592,000 (30d).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-writeOption
 */

const { send } = require("../common");

send({
  file: "Contract11scripts/writeOption.js",
  contract: "saturnfeeopts",
  method: "writeOption",
  params: [
    { name: "from", type: "address", desc: "Pool provider — must be a transaction witness." },
    { name: "poolId", type: "number", desc: "The active pool you own." },
    { name: "targetFeePer10k", type: "number", desc: "Fee rate the buyer can snap the pool to. Per 10,000. Must sit within saturnadmin.getPoolFeeRange() (30 .. 3000 on mainnet)." },
    { name: "premium", type: "number", desc: "Up-front price the buyer pays, in raw premiumToken units. Must be > 0." },
    { name: "premiumToken", type: "string", desc: "Token symbol the premium is paid in. Must be a validated symbol." },
    { name: "durationSeconds", type: "number", desc: "Option window in seconds once bought. Must be between 3,600 (1h) and 2,592,000 (30d)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-writeOption",
});
