#!/usr/bin/env node
"use strict";

/**
 * saturnvaults.withdrawV2 — write (signed transaction, needs PHANTASMA_WIF)
 * withdrawV2(from: address, vaultId: number, sharesToRedeem: number, minAmountOut: number)
 *
 * Burns shares for the matching slice of the vault's base token: payout =
 * sharesToRedeem × totalDeposits / totalShares. Works in any status. In an
 * active vault it reverts until the vault's hold has run from your latest
 * deposit (see getUserUnlockAt); a closed vault holds nobody. Since 4.2.0
 * there is no fee to settle here: the agent is paid per trade.
 *
 * Usage: node Contract16scripts/withdrawV2.js <vaultId> <sharesToRedeem> <minAmountOut>
 *   vaultId (number): Vault to exit.
 *   sharesToRedeem (number): Shares to burn; > 0 and <=
 *   getUserShares(vaultId, from).
 *   minAmountOut (number): Minimum raw payout you accept; 0 disables the
 *   check. The share price never falls, so a fresh quote (getUserValue for a
 *   full exit) is a safe floor.
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnvaults-withdrawV2
 */

const { send } = require("../common");

send({
  file: "Contract16scripts/withdrawV2.js",
  contract: "saturnvaults",
  method: "withdrawV2",
  params: [
    { name: "from", type: "address", desc: "Depositor (witness)." },
    { name: "vaultId", type: "number", desc: "Vault to exit." },
    { name: "sharesToRedeem", type: "number", desc: "Shares to burn; > 0 and <= getUserShares(vaultId, from)." },
    { name: "minAmountOut", type: "number", desc: "Minimum raw payout you accept; 0 disables the check. The share price never falls, so a fresh quote (getUserValue for a full exit) is a safe floor." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnvaults-withdrawV2",
});
