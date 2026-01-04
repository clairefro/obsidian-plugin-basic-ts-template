import { readFileSync, writeFileSync } from "fs";

const targetVersion = process.argv[2] ?? "patch";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));

// Function to increment version
function incrementVersion(version, type) {
  const parts = version.split(".").map(Number);
  switch (type) {
    case "major":
      parts[0]++;
      parts[1] = 0;
      parts[2] = 0;
      break;
    case "minor":
      parts[1]++;
      parts[2] = 0;
      break;
    case "patch":
    default:
      parts[2]++;
      break;
  }
  return parts.join(".");
}

const newVersion = incrementVersion(pkg.version, targetVersion);

pkg.version = newVersion;
manifest.version = newVersion;

writeFileSync("package.json", JSON.stringify(pkg, null, "\t") + "\n");
writeFileSync("manifest.json", JSON.stringify(manifest, null, "\t") + "\n");

console.log(`Version bumped to ${newVersion}`);
