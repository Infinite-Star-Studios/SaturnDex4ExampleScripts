#!/usr/bin/env node
"use strict";

/**
 * saturntaz.getLoanValueRA — read (free, no wallet)
 * getLoanValueRA(loanId: number): number
 *
 * Returns the scaled (8-decimal) RA value of the loan, snapshotted at creation
 * time by saturnloans. Informational since 1.2: the reward is sized by the TAZ
 * principal (saturnloans.getLoanPrincipal), not by this value.
 *
 * Returns number: Scaled RA value of the loan at creation (8-dec).
 *
 * Usage: node Lending8scripts/getLoanValueRA.js <loanId>
 *   loanId (number): Loan ID.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturntaz-getLoanValueRA
 */

const { read } = require("../common");

read({
  file: "Lending8scripts/getLoanValueRA.js",
  contract: "saturntaz",
  method: "getLoanValueRA",
  params: [
    { name: "loanId", type: "number", desc: "Loan ID." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturntaz-getLoanValueRA",
});
