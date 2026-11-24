import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "Don't tell Maya you're fine when she asks you at the kitchen table on Sunday, March 8th.\nThat lie let her leave believing you didn't care, and you spent the next year trying to take it back.";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
