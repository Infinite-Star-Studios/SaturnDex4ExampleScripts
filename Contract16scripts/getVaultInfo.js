#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.getVaultInfo — read (free, no wallet)
 * getVaultInfo(vaultId: number): string
 *
 * Legacy one-string snapshot, layout unchanged since 4.1.x. The hwm field is
 * no longer used (it stays at 10000). Use getVaultStats for the full 4.2.0
 * picture.
 *
 * Returns string: base:<symbol>_deposits:<raw>_shares:<total>_hwm:<legacy,
 * unused>_perfFee:<per10k>_status:<0|1>
 *
 * Usage: node Contract16scripts/getVaultInfo.js <vaultId>
 *   vaultId (number): The vault to inspect.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-getVaultInfo
 */

const { read } = require("../common");

read({
  file: "Contract16scripts/getVaultInfo.js",
  contract: "saturnvaults",
  method: "getVaultInfo",
  params: [
    { name: "vaultId", type: "number", desc: "The vault to inspect." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnvaults-getVaultInfo",
});
