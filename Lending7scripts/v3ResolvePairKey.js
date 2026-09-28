#!/usr/bin/env node
"use strict";

/**
 * saturndexadapt.v3ResolvePairKey — read (free, no wallet)
 * v3ResolvePairKey(tokenA: string, tokenB: string): string
 *
 * Discovers the canonical direction of a v3 pool for a token pair by checking
 * both orderings (TOKENA_TOKENB and TOKENB_TOKENA) and returning whichever has
 * positive liquidity. Returns an empty string if no v3 pool exists for the
 * pair. Use this when you have a token pair but don't know the canonical key
 * ordering.
 *
 * Returns string: Canonical pair key with liquidity, or "" if no v3 pool
 * exists.
 *
 * Usage: node Lending7scripts/v3ResolvePairKey.js <tokenA> <tokenB>
 *   tokenA (string): First token symbol.
 *   tokenB (string): Second token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturndexadapt-v3ResolvePairKey
 */

const { read } = require("../common");

read({
  file: "Lending7scripts/v3ResolvePairKey.js",
  contract: "saturndexadapt",
  method: "v3ResolvePairKey",
  params: [
    { name: "tokenA", type: "string", desc: "First token symbol." },
    { name: "tokenB", type: "string", desc: "Second token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturndexadapt-v3ResolvePairKey",
});
