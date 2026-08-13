import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const excludedDirectories = new Set([
  ".git",
  ".next",
  ".openai",
  ".vercel",
  ".wrangler",
  "dist",
  "node_modules",
  "outputs",
  "work",
]);
const textExtensions = new Set([
  ".cjs", ".css", ".env", ".example", ".html", ".ini", ".js", ".json", ".jsx",
  ".md", ".mjs", ".toml", ".ts", ".tsx", ".txt", ".yaml", ".yml",
]);
const dangerousNames = [
  /^\.env(?:\..+)?$/,
  /credentials.*\.json$/i,
  /service-account.*\.json$/i,
  /\.(?:db|jks|key|p12|pem|pfx|sql|sqlite|sqlite3)$/i,
];
const secretPatterns = [
  ["clé privée", /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g],
  ["jeton GitHub", /gh[pousr]_[A-Za-z0-9]{30,}/g],
  ["clé Google", /AIza[0-9A-Za-z_-]{35}/g],
  ["clé AWS", /AKIA[0-9A-Z]{16}/g],
  ["clé OpenAI", /sk-[A-Za-z0-9_-]{20,}/g],
  ["jeton Slack", /xox[baprs]-[A-Za-z0-9-]{20,}/g],
];
const findings = [];

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) return [];
    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) return listFiles(absolutePath);
    if (!entry.isFile()) return [];
    return [absolutePath];
  });
}

function isTracked(relativePath) {
  try {
    const tracked = execFileSync("git", ["ls-files", "--error-unmatch", relativePath], {
      cwd: root,
      stdio: "ignore",
    });
    return tracked !== undefined;
  } catch {
    return false;
  }
}

for (const absolutePath of listFiles(root)) {
  const relativePath = relative(root, absolutePath).replaceAll("\\", "/");
  const name = relativePath.split("/").at(-1) || relativePath;
  const isAllowedExample = name === ".env.example";

  if (!isAllowedExample && dangerousNames.some((pattern) => pattern.test(name))) {
    if (!existsSync(join(root, ".git")) || isTracked(relativePath)) {
      findings.push(`${relativePath} : fichier sensible présent dans le projet versionné`);
    }
  }

  if (!textExtensions.has(extname(name)) && !name.startsWith(".env")) continue;
  if (statSync(absolutePath).size > 1_500_000) continue;
  const content = readFileSync(absolutePath, "utf8");

  for (const [label, pattern] of secretPatterns) {
    pattern.lastIndex = 0;
    const match = pattern.exec(content);
    if (!match) continue;
    const line = content.slice(0, match.index).split("\n").length;
    findings.push(`${relativePath}:${line} : ${label} potentielle`);
  }
}

const requiredFiles = [
  ".gitignore",
  ".env.example",
  "app/confidentialite/page.tsx",
  "app/cookies/page.tsx",
  "next.config.ts",
  "public/.well-known/security.txt",
];
for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) findings.push(`${file} : protection attendue absente`);
}

if (existsSync(join(root, ".gitignore"))) {
  const gitignore = readFileSync(join(root, ".gitignore"), "utf8");
  for (const rule of [".env.local", "!.env.example", "*.key", "*.sql", ".vercel"]) {
    if (!gitignore.includes(rule)) findings.push(`.gitignore : règle manquante ${rule}`);
  }
}

if (findings.length > 0) {
  console.error("Contrôle de sécurité bloquant :");
  for (const finding of findings) console.error(`- ${finding}`);
  console.error("Aucune valeur secrète n'est affichée par ce contrôle.");
  process.exit(1);
}

console.log("Contrôle de sécurité réussi : aucun secret courant ni fichier sensible versionné détecté.");
