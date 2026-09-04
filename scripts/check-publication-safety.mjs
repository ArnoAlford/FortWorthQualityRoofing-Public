import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const allowed = new Set([
  ".gitattributes",
  ".github/CODEOWNERS",
  ".github/ISSUE_TEMPLATE/config.yml",
  ".github/ISSUE_TEMPLATE/showcase-improvement.yml",
  ".github/dependabot.yml",
  ".github/pull_request_template.md",
  ".github/workflows/ci.yml",
  ".gitignore",
  "AGENTS.md",
  "CHANGELOG.md",
  "CONTRIBUTING.md",
  "DESIGN.md",
  "LICENSE.md",
  "PRODUCT.md",
  "PUBLIC-SCOPE.md",
  "README.md",
  "ROADMAP.md",
  "SECURITY.md",
  "TRADEMARKS.md",
  "app/design-system/page.tsx",
  "app/examples/residential/page.tsx",
  "app/globals.css",
  "app/layout.tsx",
  "app/page.tsx",
  "docs/accessibility.md",
  "docs/architecture.md",
  "docs/decisions/0001-public-private-separation.md",
  "docs/threat-model.md",
  "eslint.config.mjs",
  "next.config.ts",
  "package-lock.json",
  "package.json",
  "public/asset-manifest.json",
  "public/brand/fwqr-logo.png",
  "public/screenshots/desktop.png",
  "public/screenshots/mobile.png",
  "scripts/check-publication-safety.mjs",
  "tsconfig.json"
]);
const staged = process.argv.includes("--staged");
const git = (...args) => execFileSync("git", args, { maxBuffer: 32 * 1024 * 1024 });
const files = [...new Set(git("ls-files", "-z", ...(staged ? ["--cached"] : ["--cached", "--others", "--exclude-standard"])).toString().split("\0").filter(Boolean))];
const read = (file) => staged ? git("show", ":" + file) : readFileSync(file);
const failures = [];
const manifest = JSON.parse(read("public/asset-manifest.json").toString());
const media = new Map(manifest.assets.map(asset => [asset.path, asset]));
const patterns = [
  ["private key", /BEGIN [A-Z ]*PRIVATE[ ]KEY/],
  ["GitHub credential", /(?:gh[pousr]_|github_pat_)[A-Za-z0-9_]{25,}/],
  ["cloud access key", /(?:AKIA|ASIA)[A-Z0-9]{16}/],
  ["Google credential", /(?:AIza[\w-]{30,}|GOCSPX-[\w-]{20,})/],
  ["provider credential", /(?:sk_live_|sk_test_|sk-proj-|rk_live_|re_)[A-Za-z0-9_-]{20,}/],
  ["Twilio identifier", /(?:AC|SK)[a-fA-F0-9]{32}/],
  ["JWT", /eyJ[\w-]{10,}\.[\w-]{10,}\.[\w-]{10,}/],
  ["credential assignment", /(?:api[_-]?key|secret|password|access[_-]?token|auth[_-]?token)\s*[:=]\s*["'][^"'\s]{8,}["']/i],
  ["local private path", /[A-Za-z]:[\\/]Users[\\/]/],
  ["production directive", /["']use[ ]server["']/],
  ["environment access", /process[.]env|import[.]meta[.]env/],
  ["analytics identifier", /(?:GTM|G)-[A-Z0-9]{6,}/],
];
for (const file of files) {
  if (!allowed.has(file)) { failures.push(file + ": not explicitly allowed"); continue; }
  const bytes = read(file);
  if (file.endsWith(".png")) {
    const asset = media.get(file);
    if (!asset || createHash("sha256").update(bytes).digest("hex") !== asset.sha256) failures.push(file + ": asset digest mismatch or missing approval");
    if (!asset?.approval || !asset?.origin || !asset?.purpose) failures.push(file + ": incomplete provenance");
    if (!bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) failures.push(file + ": invalid PNG");
    let position = 8;
    const permittedChunks = new Set(["IHDR", "IDAT", "IEND", "pHYs", "sRGB", "gAMA", "cHRM", "PLTE", "tRNS"]);
    while (position + 12 <= bytes.length) {
      const length = bytes.readUInt32BE(position);
      const type = bytes.toString("ascii", position+4, position+8);
      if (!permittedChunks.has(type)) failures.push(file + ": unapproved PNG metadata chunk " + type);
      position += length + 12;
    }
    if (position !== bytes.length) failures.push(file + ": malformed PNG or trailing data");
    continue;
  }
  if (bytes.includes(0)) { failures.push(file + ": unexpected binary file"); continue; }
  const text = bytes.toString("utf8");
  for (const [label, pattern] of patterns) if (pattern.test(text)) failures.push(file + ": possible " + label);
  if (file.startsWith("app/") && /<form\b|<iframe\b|<script\b|fetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|document[.]cookie/.test(text)) failures.push(file + ": unexpected collection or network capability");
}
for (const asset of media.keys()) if (!files.includes(asset)) failures.push(asset + ": manifest file absent");
if (!files.length) failures.push("No files inspected");
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log("Publication safety passed: " + files.length + " files, " + media.size + " assets, " + (staged ? "Git index" : "working tree") + ".");
