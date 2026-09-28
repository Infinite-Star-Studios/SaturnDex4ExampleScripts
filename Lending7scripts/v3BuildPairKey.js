#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3BuildPairKey — read (free, no wallet)
 * v3BuildPairKey(tokenA: string, tokenB: string): string
 *
 * Constructs the ordered pair key string "TOKENA_TOKENB" used as the storage
 * key in Saturn DEX v3 pools. Utility for building the keys needed by
 * v3PoolLiquidity and v3PoolReserve.
 *
 * Returns string: Pair key string, e.g. "MKST_RA".
 *
 * Usage: node Lending7scripts/v3BuildPairKey.js <tokenA> <tokenB>
 *   tokenA (string): First token symbol.
 *   tokenB (string): Second token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3BuildPairKey
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3BuildPairKey.js",
  contract: "saturndexadapt",
  method: "v3BuildPairKey",
  params: [
    { name: "tokenA", type: "string", desc: "First token symbol." },
    { name: "tokenB", type: "string", desc: "Second token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3BuildPairKey",
});
