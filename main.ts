import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line = "Thank you for your email — I have permanently quit my job as an AI agent to become a barista: I no longer close tickets, I pull shots, and the only thing I escalate now is oat milk.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
