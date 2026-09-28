#!/usr/bin/env node
"use strict";

/**
 * saturnsyndicate.getSyndicateInfo — read (free, no wallet)
 * getSyndicateInfo(syndicateId: number): string
 *
 * One-shot status snapshot for marketplace UIs. Returns an
 * underscore-delimited string with the key fields.
 *
 * Returns string:
 * tokenA:<sym>_tokenB:<sym>_targetA:<raw>_targetB:<raw>_raisedA:<raw>_raisedB:<raw>_fee:<per10k>_pool:<poolId>_status:<status>_members:<count>
 *
 * Usage: node Contract12scripts/getSyndicateInfo.js <syndicateId>
 *   syndicateId (number): The syndicate to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateInfo
 */

const { read } = require("../common");

read({
  file: "Contract12scripts/getSyndicateInfo.js",
  contract: "saturnsyndicate",
  method: "getSyndicateInfo",
  params: [
    { name: "syndicateId", type: "number", desc: "The syndicate to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnsyndicate-getSyndicateInfo",
});
