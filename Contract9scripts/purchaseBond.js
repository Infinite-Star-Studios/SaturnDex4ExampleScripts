#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.purchaseBond — write (signed transaction, needs PHANTASMA_WIF)
 * purchaseBond(from: address, bondId: number)
 *
 * Buyer pays the listing's purchasePrice (raw feeToken) directly to the
 * issuer, becomes the bond holder, starts the term clock (maturity = now +
 * durationSeconds), and turns on the pool's fee redirect in saturnfees: the
 * provider can no longer claim the pool's fees, which are held until
 * settleBond(). The pool becomes financially locked until settlement. The
 * listing checks are run again first, since the pool may have changed since
 * listing.
 *
 * Returns void: Success = bond status = 1 (active), fees redirected.
 *
 * Usage: node Contract9scripts/purchaseBond.js <bondId>
 *   bondId (number): Bond to purchase.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-purchaseBond
 */

const { send } = require("../common");

send({
  file: "Contract9scripts/purchaseBond.js",
  contract: "saturnbonds",
  method: "purchaseBond",
  params: [
    { name: "from", type: "address", desc: "Buyer wallet (must be witness, cannot be the issuer)." },
    { name: "bondId", type: "number", desc: "Bond to purchase." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnbonds-purchaseBond",
});
