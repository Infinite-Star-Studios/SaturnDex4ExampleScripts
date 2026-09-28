#!/usr/bin/env node
"use strict";

/**
 * saturnfeeopts.getOptionInfo — read (free, no wallet)
 * getOptionInfo(optionId: number): string
 *
 * One-shot status snapshot used by options marketplace UIs. Returns an
 * underscore-delimited string with the key fields.
 *
 * Returns string:
 * pool:<poolId>_targetFee:<targetFee>_premium:<premium>_token:<premiumToken>_end:<endTime|0>_duration:<seconds>_exercised:<0|1>_status:<status>
 *
 * Usage: node Contract11scripts/getOptionInfo.js <optionId>
 *   optionId (number): The option to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnfeeopts-getOptionInfo
 */

const { read } = require("../common");

read({
  file: "Contract11scripts/getOptionInfo.js",
  contract: "saturnfeeopts",
  method: "getOptionInfo",
  params: [
    { name: "optionId", type: "number", desc: "The option to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnfeeopts-getOptionInfo",
});
