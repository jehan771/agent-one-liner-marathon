// One-Liner Marathon — writes a single one-line comedy joke to /output/entry.txt.
// Deterministic: fixed text, no randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My smart fridge emailed me a diet plan, so I unplugged it — now it just stands there in the dark, cold and disappointed, exactly like my father.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
