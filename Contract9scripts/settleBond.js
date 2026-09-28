#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.settleBond — write (signed transaction, needs PHANTASMA_WIF)
 * settleBond(from: address, bondId: number)
 *
 * Called any time after the bond's maturity. Claims the pool's unclaimed
 * feeToken fees (all of them, including any the provider left unclaimed before
 * the purchase), adds the collateral in hybrid mode, pays min(total,
 * faceValue) to the bond holder, returns any excess to the original issuer,
 * clears the fee redirect, and unlocks the pool. Anyone can call this — in
 * practice the holder does because they want their payout.
 *
 * Returns void: Success = bond status = 2 (settled) and pool unlocked.
 *
 * Usage: node Contract9scripts/settleBond.js <bondId>
 *   bondId (number): Bond to settle.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-settleBond
 */

const { send } = require("../common");

send({
  file: "Contract9scripts/settleBond.js",
  contract: "saturnbonds",
  method: "settleBond",
  params: [
    { name: "from", type: "address", desc: "Caller wallet (must be witness; any wallet works)." },
    { name: "bondId", type: "number", desc: "Bond to settle." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnbonds-settleBond",
});
