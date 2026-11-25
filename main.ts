// The Funniest Office Joke — u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
//
// One line about office life: a setup everyone recognises, a turn nobody
// sees coming, and the punchline last. No files read, no network, no
// dependencies — the joke is a literal baked into this program.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SETUP = "The printer jammed on deadline day, so I printed my resignation";
const TURN = "it jammed on that too, which is why I'm still here.";
// The em dash joins setup and turn into one breath; the punchline
// ("which is why I'm still here") is the last clause, as the brief asks.
const JOKE = `${SETUP} — ${TURN}`;

function gate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");

gate(JOKE);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote entry.txt (${JOKE.length} chars)`);
