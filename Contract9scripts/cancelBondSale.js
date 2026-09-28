#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.cancelBondSale — write (signed transaction, needs PHANTASMA_WIF)
 * cancelBondSale(from: address, bondId: number)
 *
 * The holder withdraws their resale listing. Allowed only once the listing is
 * at least one hour old, which stops a seller from pulling the offer the
 * moment a buyer's transaction is in flight.
 *
 * Usage: node Contract9scripts/cancelBondSale.js <bondId>
 *   bondId (number): Bond whose sale listing is cancelled.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-cancelBondSale
 */

const { send } = require("../common");

send({
  file: "Contract9scripts/cancelBondSale.js",
  contract: "saturnbonds",
  method: "cancelBondSale",
  params: [
    { name: "from", type: "address", desc: "Current bond holder (witness)." },
    { name: "bondId", type: "number", desc: "Bond whose sale listing is cancelled." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnbonds-cancelBondSale",
});
