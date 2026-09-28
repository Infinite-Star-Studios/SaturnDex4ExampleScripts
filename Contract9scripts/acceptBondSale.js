#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.acceptBondSale — write (signed transaction, needs PHANTASMA_WIF)
 * acceptBondSale(from: address, bondId: number)
 *
 * Buys a bond that is listed for resale: priceAmount of priceToken moves from
 * the buyer straight to the seller and the buyer becomes the bond holder —
 * future settlement pays the buyer. Atomic: no off-chain payment, no escrow.
 *
 * Usage: node Contract9scripts/acceptBondSale.js <bondId>
 *   bondId (number): Bond with an open sale listing.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-acceptBondSale
 */

const { send } = require("../common");

send({
  file: "Contract9scripts/acceptBondSale.js",
  contract: "saturnbonds",
  method: "acceptBondSale",
  params: [
    { name: "from", type: "address", desc: "Buyer (witness)." },
    { name: "bondId", type: "number", desc: "Bond with an open sale listing." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnbonds-acceptBondSale",
});
