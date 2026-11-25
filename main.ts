// One-Line Office Joke: 24-Hour Sprint — make.fun entry.
// A tiny deterministic program: it writes one office joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Our standup ran so long the intern got promoted, married, and retired before we reached the blockers.";

const OUT = "/output/entry.txt";

// One line, no trailing newline: the gate counts every character.
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
