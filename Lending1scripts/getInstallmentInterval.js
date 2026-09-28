#!/usr/bin/env node
"use strict";

/**
 * saturnlendcfg.getInstallmentInterval — read (free, no wallet)
 * getInstallmentInterval(): number
 *
 * Interval in seconds between installment payment due-dates. Default is
 * 2,592,000 (30 days). Used by getInstallmentCount() to compute how many
 * payments a loan will have.
 *
 * Returns number: Installment interval in seconds (default: 2592000 = 30
 * days).
 *
 * Usage: node Lending1scripts/getInstallmentInterval.js
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnlendcfg-getInstallmentInterval
 */

const { read } = require("../common");

read({
  file: "Lending1scripts/getInstallmentInterval.js",
  contract: "saturnlendcfg",
  method: "getInstallmentInterval",
  params: [
  ],
  docs: "https://devops.saturnx.cc/reference#saturnlendcfg-getInstallmentInterval",
});
