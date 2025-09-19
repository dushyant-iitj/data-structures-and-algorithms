#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const JS_ROOT = path.join(__dirname, "javascript");
const README = path.join(__dirname, "README.md");
const DIFFICULTIES = ["easy", "medium", "hard"];

// Helpers
function slugToTitle(slug) {
  return slug
    .split("-")
    .map((s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s))
    .join(" ");
}
function capitalize(s) {
  return s && s.length ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Read JS files and build entries
function readFiles() {
  const entries = [];
  DIFFICULTIES.forEach((level) => {
    const dir = path.join(JS_ROOT, level);
    if (!fs.existsSync(dir)) {
      // console.info(`No folder: ${dir}`);
      return;
    }
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".js"));
    files.forEach((file) => {
      const m = file.match(/^(\d+)-(.+)\.js$/i);
      if (!m) {
        console.warn(
          `Skipping (bad name): ${path.join(
            level,
            file
          )} — expected "NNNN-slug.js"`
        );
        return;
      }
      const num = parseInt(m[1], 10);
      const slug = m[2];
      const title = slugToTitle(slug);
      entries.push({ num, title, slug, level, file });
    });
  });
  return entries.sort((a, b) => a.num - b.num);
}

// Build markdown table
function buildTable(entries) {
  const header = `| #   | Title | Difficulty | Solution |\n| --- | ----- | ---------- | -------- |\n`;
  const rows = entries
    .map(
      (e) =>
        `| ${e.num} | [${e.title}](https://leetcode.com/problems/${
          e.slug
        }/) | ${capitalize(e.level)} | [JS](./javascript/${e.level}/${
          e.file
        }) |`
    )
    .join("\n");
  return header + rows;
}

// Update README: first try markers, then fallback to header replacement
function updateReadme(table) {
  if (!fs.existsSync(README)) {
    console.error("ERROR: README.md not found at", README);
    process.exit(1);
  }
  let content = fs.readFileSync(README, "utf8");

  const startMarker = "<!-- AUTO_INDEX_START -->";
  const endMarker = "<!-- AUTO_INDEX_END -->";

  if (content.includes(startMarker) && content.includes(endMarker)) {
    const regex = new RegExp(
      `${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`,
      "m"
    );
    content = content.replace(
      regex,
      `${startMarker}\n\n${table}\n\n${endMarker}`
    );
    fs.writeFileSync(README, content, "utf8");
    console.log("✅ README.md updated between markers.");
    return;
  }

  // Fallback: replace between "## 📑 Index" and "## 🚀 How to Run" (or next H2)
  const indexHeader = "## 📑 Index";
  const runHeader = "## 🚀 How to Run";
  if (content.includes(indexHeader) && content.includes(runHeader)) {
    const regex = new RegExp(
      `${escapeRegExp(indexHeader)}[\\s\\S]*?${escapeRegExp(runHeader)}`,
      "m"
    );
    content = content.replace(
      regex,
      `${indexHeader}\n\n${table}\n\n${runHeader}`
    );
    fs.writeFileSync(README, content, "utf8");
    console.log("✅ README.md updated using fallback headers.");
    return;
  }

  // If nothing matched, append the index at the end
  content = content + `\n\n${indexHeader}\n\n${table}\n`;
  fs.writeFileSync(README, content, "utf8");
  console.log(
    "✅ README.md updated by appending index at end (no markers/headers found)."
  );
}

// Run
const entries = readFiles();
if (entries.length === 0) {
  console.warn(
    "No JS solution files found under javascript/{easy,medium,hard}. Nothing to do."
  );
  process.exit(0);
}
const table = buildTable(entries);
updateReadme(table);
