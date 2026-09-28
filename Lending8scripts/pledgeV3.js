#!/usr/bin/env node
"use strict";

/**
 * saturntaz.pledgeV3 — write (signed transaction, needs PHANTASMA_WIF)
 * pledgeV3(from: address, lender: address, amount: number)
 *
 * Custodial RA pledge: transfers amount of RA from the caller into this
 * contract's custody and registers the pledge against lender for a fixed
 * 30-day window. During the window the pledger is eligible to receive a share
 * of TAZ from every loan the lender fully repays. Cannot pledge to yourself.
 * Any previous pledge to the same lender must be withdrawn (unpledgeV3) before
 * re-pledging.
 *
 * Usage: node Lending8scripts/pledgeV3.js <lender> <amount>
 *   lender (address): Target lender address to pledge RA to.
 *   amount (number): Raw RA amount to pledge (native RA decimals, typically
 *   9-dec).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-pledgeV3
 */

const { send } = require("../common");

send({
  file: "Lending8scripts/pledgeV3.js",
  contract: "saturntaz",
  method: "pledgeV3",
  params: [
    { name: "from", type: "address", desc: "Pledger address (must be witness)." },
    { name: "lender", type: "address", desc: "Target lender address to pledge RA to." },
    { name: "amount", type: "number", desc: "Raw RA amount to pledge (native RA decimals, typically 9-dec)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturntaz-pledgeV3",
});
