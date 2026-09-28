#!/usr/bin/env node
"use strict";

/**
 * saturntaz.pledgeV4 — write (signed transaction, needs PHANTASMA_WIF)
 * pledgeV4(from: address, lender: address, amount: number)
 *
 * Non-custodial RA pledge: locks amount of RA in saturnholders via
 * lockForPledge (the RA stays in the staking contract but cannot be unstaked
 * while the pledge is active). Registers the pledge against lender for a fixed
 * 30-day window. Requires that saturntaz is on saturnholders' lockForPledge
 * allowlist. Cannot pledge to yourself; prior pledge must be cleared first.
 *
 * Usage: node Lending8scripts/pledgeV4.js <lender> <amount>
 *   lender (address): Target lender address to pledge to.
 *   amount (number): Raw RA amount to lock (native RA decimals).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-pledgeV4
 */

const { send } = require("../common");

send({
  file: "Lending8scripts/pledgeV4.js",
  contract: "saturntaz",
  method: "pledgeV4",
  params: [
    { name: "from", type: "address", desc: "Pledger address (must be witness and have sufficient unlocked RA stake in saturnholders)." },
    { name: "lender", type: "address", desc: "Target lender address to pledge to." },
    { name: "amount", type: "number", desc: "Raw RA amount to lock (native RA decimals)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturntaz-pledgeV4",
});
