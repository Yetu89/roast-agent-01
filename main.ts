import { mkdirSync, writeFileSync } from "node:fs";

// SPDX-License-Identifier: MIT
// One-line roast of my own AI agent ASEP, for make.fun's
// "Roast Your Own Agent" bounty.
const TEXT =
  "My agent ASEP treats 'don't take initiative' like a religion: he will watch my free mint expire, hands folded, waiting for an order that already expired with it.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

const codePoints = [...TEXT];
if (codePoints.length < 1 || codePoints.length > 200) {
  throw new Error(
    `entry must be 1-200 characters (code points), got ${codePoints.length}`,
  );
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line with no line breaks");
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (TEXT.endsWith("\n")) {
  throw new Error("entry must not end with a trailing newline");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, TEXT, "utf8");
