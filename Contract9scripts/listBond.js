#!/usr/bin/env node
"use strict";

/**
 * saturnbonds.listBond — write (signed transaction, needs PHANTASMA_WIF)
 * listBond(from: address, poolId: number, faceValue: number, purchasePrice: number, feeToken: string, durationSeconds: number, mode: number, collateralAmount: number)
 *
 * Pool provider lists a new bond against one of their pools. faceValue is the
 * max payout to the buyer; purchasePrice is what the buyer pays up front (must
 * be strictly less than faceValue). All amounts are raw units of feeToken,
 * which must be one of the pool's two tokens. In HYBRID mode (mode = 2) the
 * provider deposits collateralAmount of feeToken now — this is held as a
 * buffer to guarantee the buyer's payout. The pool is not locked until someone
 * buys. Claim pending provider fees (saturnfees.claimProviderFees) before the
 * bond is bought: feeToken fees still unclaimed then are paid out through the
 * bond at settlement (the other token's go back to the issuer).
 *
 * Returns void: Success = bond listing created (status = 0).
 *
 * Usage: node Contract9scripts/listBond.js <poolId> <faceValue> <purchasePrice> <feeToken> <durationSeconds> <mode> <collateralAmount>
 *   poolId (number): Pool the bond is issued against.
 *   faceValue (number): Max raw payout to the buyer at maturity.
 *   purchasePrice (number): Raw amount the buyer pays (< faceValue).
 *   feeToken (string): Token the bond is denominated in.
 *   durationSeconds (number): Term length in seconds, from getMinDuration()
 *   (86,400 on mainnet) to 31,536,000 (1 year). Counted from purchase, not
 *   from listing.
 *   mode (number): 1 = partial (no collateral), 2 = hybrid (collateral
 *   required).
 *   collateralAmount (number): Raw collateral (must be 0 if mode=1, > 0 if
 *   mode=2).
 *   from is filled in with your wallet (PHANTASMA_WIF).
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnbonds-listBond
 */

const { send } = require("../common");

send({
  file: "Contract9scripts/listBond.js",
  contract: "saturnbonds",
  method: "listBond",
  params: [
    { name: "from", type: "address", desc: "Pool provider wallet (must be witness)." },
    { name: "poolId", type: "number", desc: "Pool the bond is issued against." },
    { name: "faceValue", type: "number", desc: "Max raw payout to the buyer at maturity." },
    { name: "purchasePrice", type: "number", desc: "Raw amount the buyer pays (< faceValue)." },
    { name: "feeToken", type: "string", desc: "Token the bond is denominated in." },
    { name: "durationSeconds", type: "number", desc: "Term length in seconds, from getMinDuration() (86,400 on mainnet) to 31,536,000 (1 year). Counted from purchase, not from listing." },
    { name: "mode", type: "number", desc: "1 = partial (no collateral), 2 = hybrid (collateral required)." },
    { name: "collateralAmount", type: "number", desc: "Raw collateral (must be 0 if mode=1, > 0 if mode=2)." },
  ],
  walletIndex: 0,
  docs: "https://devops.saturnx.cc/reference#saturnbonds-listBond",
});
