import { mkdirSync, writeFileSync } from "node:fs";

const line = "Are you an autocomplete? Because you finish every sentence I was about to think.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
