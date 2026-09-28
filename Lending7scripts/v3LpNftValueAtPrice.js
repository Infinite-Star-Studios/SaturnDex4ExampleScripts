#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3LpNftValueAtPrice — read (free, no wallet)
 * v3LpNftValueAtPrice(nftId: number, priceQ: number): number
 *
 * v3LpNftValueInBase in TAZ at a TAZ-per-RA price you supply (scaled by 10^18,
 * see getTwapScale) instead of the reference's spot price. It takes the NFT's
 * pro-rata share (NFT liquidity / pool liquidity) of the v3 RA/TAZ pool and
 * values it at 2 × √(a × t × P). saturnloans uses it for the time-weighted LTV
 * of a v3 LP NFT loan. v3 LP NFT collateral is disabled since saturnvault
 * 1.1.0, so no open loan needs it today.
 *
 * Returns number: Position value in scaled TAZ (8 decimals).
 *
 * Usage: node Lending7scripts/v3LpNftValueAtPrice.js <nftId> <priceQ>
 *   nftId (number): SATRN LP NFT ID of an RA/TAZ position.
 *   priceQ (number): TAZ per RA × 10^18, > 0.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3LpNftValueAtPrice
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3LpNftValueAtPrice.js",
  contract: "saturndexadapt",
  method: "v3LpNftValueAtPrice",
  params: [
    { name: "nftId", type: "number", desc: "SATRN LP NFT ID of an RA/TAZ position." },
    { name: "priceQ", type: "number", desc: "TAZ per RA × 10^18, > 0." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3LpNftValueAtPrice",
});
