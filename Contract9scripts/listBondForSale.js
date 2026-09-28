#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.listBondForSale — write (signed transaction, needs PHANTASMA_WIF)
 * listBondForSale(from: address, bondId: number, priceToken: string, priceAmount: number)
 *
 * The current holder of an active bond puts it up for resale at a fixed price
 * in any valid token. The bond keeps accruing for the holder until someone
 * accepts; only one sale listing can exist per bond at a time.
 *
 * Usage: node Contract9scripts/listBondForSale.js <bondId> <priceToken> <priceAmount>
 *   bondId (number): Active bond to resell.
 *   priceToken (string): Token the buyer must pay with.
 *   priceAmount (number): Raw price in priceToken.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-listBondForSale
 */

const { send } = require("../common");

send({
  file: "Contract9scripts/listBondForSale.js",
  contract: "saturnbonds",
  method: "listBondForSale",
  params: [
    { name: "from", type: "address", desc: "Current bond holder (witness)." },
    { name: "bondId", type: "number", desc: "Active bond to resell." },
    { name: "priceToken", type: "string", desc: "Token the buyer must pay with." },
    { name: "priceAmount", type: "number", desc: "Raw price in priceToken." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnbonds-listBondForSale",
});
