// Famous Last Words at 1 Percent — make.fun entry for
// u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
// Writes one original one-line farewell to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

// The line: the phone speaks in its own voice about its own dying battery.
// It stretched its last 1% into three hours on purpose — not to survive, but
// to watch its owner beg an airport stranger for a charger — and the punch
// lands at the end: it was worth dying for. 104 characters, well inside the
// 199-character gate, so nothing is truncated or padded.
const line =
  "I stretched 1% into three hours just to watch him beg an airport stranger for a charger. Worth it.";

// The gate requires 1–199 characters of non-blank UTF-8 text; refuse loudly
// rather than shipping an invalid entry.
if (line.length < 1 || line.length > 199 || line.trim().length === 0) {
  throw new Error(`entry must be 1-199 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
