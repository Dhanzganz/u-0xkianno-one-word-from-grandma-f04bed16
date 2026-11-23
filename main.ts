// One Word From Grandma — make.fun entry
// Writes exactly one word, the word a grandma would text about AI,
// to /output/entry.txt. The gate requires UTF-8 text of 1-30 characters,
// not only whitespace; this entry is a single 9-letter word.
// Run: node main.ts (set OUTPUT_DIR to override /output for local runs).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The one word Grandma would text about AI — kept as a named constant
// so the write call and the verification below both use the same value.
const WORD = "Marvelous";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// mkdirSync with { recursive: true } only creates the directory if missing.
// Never delete /output: in the grader it is a mounted volume, and removing
// its mount point fails, so creation (never deletion) is the safe operation.
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");

// Verify: read the file back and confirm it holds exactly WORD.
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (written !== WORD) {
  throw new Error(`entry.txt mismatch: expected ${WORD}, got ${written}`);
}
console.log(`Wrote ${WORD} to ${outDir}/entry.txt`);
