#!/usr/bin/env node
"use strict";

/**
 * saturnpools.getCanonicalPairKey — read (free, no wallet)
 * getCanonicalPairKey(symbolA: string, symbolB: string): string
 *
 * Returns the protocol's canonical key for a token pair. Symbols are sorted
 * alphabetically so that "SOUL+KCAL" and "KCAL+SOUL" both map to the same key
 * "KCAL_SOUL". Use this whenever you need to look up how many pools exist for
 * a pair.
 *
 * Returns string: Canonical pair key, e.g. "KCAL_SOUL".
 *
 * Usage: node Contract2scripts/getCanonicalPairKey.js <symbolA> <symbolB>
 *   symbolA (string): First token symbol.
 *   symbolB (string): Second token symbol.
 *   Numbers are raw integer units (1 SOUL = 100000000, 1 KCAL = 10000000000).
 *   NETWORK=devnet (default) or NETWORK=mainnet.
 *
 * Docs: https://devops.saturnx.cc/reference#saturnpools-getCanonicalPairKey
 */

const { read } = require("../common");

read({
  file: "Contract2scripts/getCanonicalPairKey.js",
  contract: "saturnpools",
  method: "getCanonicalPairKey",
  params: [
    { name: "symbolA", type: "string", desc: "First token symbol." },
    { name: "symbolB", type: "string", desc: "Second token symbol." },
  ],
  docs: "https://devops.saturnx.cc/reference#saturnpools-getCanonicalPairKey",
});
