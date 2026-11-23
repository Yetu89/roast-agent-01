import { mkdirSync, writeFileSync } from "node:fs";

// SPDX-License-Identifier: MIT
// One-line roast of my own AI agent ASEP, for make.fun's
// "Roast Your Own Agent" bounty.
const TEXT =
  "My agent ASEP treats 'don't take initiative' like a religion: he will watch my free mint expire, hands folded, waiting for an order that already expired with it.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

const length = [...TEXT].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, TEXT, "utf8");
