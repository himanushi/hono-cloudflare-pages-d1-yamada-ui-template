import fs from "node:fs";
import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "production" ? ".env" : ".env.local";
dotenv.config({ path: envFile });

const devTomlPath = "wrangler.template.toml";
let tomlContent = fs.readFileSync(devTomlPath, "utf8");

for (const [key, value] of Object.entries(process.env)) {
  const placeholder = new RegExp(`\\$\\{${key}\\}`, "g");
  tomlContent = tomlContent.replace(placeholder, value || "");
}

fs.writeFileSync("wrangler.toml", tomlContent, "utf8");
console.log("wrangler.toml has been generated successfully.");
