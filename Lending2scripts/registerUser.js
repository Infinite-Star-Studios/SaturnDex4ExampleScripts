#!/usr/bin/env node
"use strict";

/**
 * saturncredit.registerUser — write (signed transaction, needs PHANTASMA_WIF)
 * registerUser(from: address): void
 *
 * Registers a wallet as a borrower, locking in the credit-history start time.
 * The score clock starts here: time-based bonuses accrue from the registration
 * timestamp. Call this before a user's first loan application so their
 * time-in-system points build up. Reverts if the user is already registered.
 * saturnmarket.postLoanRequest also auto-registers the borrower
 * (ensureRegistered), but explicit registration lets users build tenure
 * earlier.
 *
 * Usage: node Lending2scripts/registerUser.js
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturncredit-registerUser
 */

const { send } = require("../common");

send({
  file: "Lending2scripts/registerUser.js",
  contract: "saturncredit",
  method: "registerUser",
  params: [
    { name: "from", type: "address", desc: "The borrower's wallet address. Must be the transaction signer." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturncredit-registerUser",
});
