#!/usr/bin/env node
"use strict";

/**
 * saturnpools.updatePoolFee — write (signed transaction, needs PHANTASMA_WIF)
 * updatePoolFee(from: address, poolId: number, newFeePer10k: number)
 *
 * Lets the pool provider change their pool's per-swap fee. The new fee must
 * lie inside the protocol range (getMinPoolFeePer10k .. getMaxPoolFeePer10k,
 * 30–3000 per 10k by default) and the pool must be free of locks: no active
 * reward-campaign enrollment and no financial product (bond, rental, option,
 * syndicate, launchpad or loan collateral). While a rental or fee option is
 * live the fee is driven by saturnrental / saturnfeeopts, which call this
 * method on the operator's behalf — a direct call from the provider, even one
 * who owns the rental listing, is refused until the product ends.
 *
 * Usage: node Contract2scripts/updatePoolFee.js <poolId> <newFeePer10k>
 *   poolId (number): Pool to update.
 *   newFeePer10k (number): New fee in units of 1/10,000 (30 = 0.3%).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-updatePoolFee
 */

const { send } = require("../common");

send({
  file: "Contract2scripts/updatePoolFee.js",
  contract: "saturnpools",
  method: "updatePoolFee",
  params: [
    { name: "from", type: "address", desc: "Pool provider (must be the transaction witness)." },
    { name: "poolId", type: "number", desc: "Pool to update." },
    { name: "newFeePer10k", type: "number", desc: "New fee in units of 1/10,000 (30 = 0.3%)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnpools-updatePoolFee",
});
