#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const JS_ROOT = path.join(__dirname, "javascript");
const README = path.join(__dirname, "README.md");

// Topic display order
const TOPICS = [
  "arrays",
  "strings",
  "linked-list",
  "stacks-queues",
  "trees",
  "graphs",
  "dynamic-programming",
  "heaps",
  "backtracking",
  "greedy",
  "tries",
  "sorting-searching",
  "mathematical",
  "matrix",
  "two-pointer",
];

const DIFFICULTY_ORDER = { easy: 1, medium: 2, hard: 3 };

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s))
    .join(" ");
}

function topicToTitle(topic) {
  return topic
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function capitalize(s) {
  return s && s.length ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Detect difficulty from file content (first line comment) or filename
function detectDifficulty(filePath, fileName) {
  const content = fs.readFileSync(filePath, "utf8");
  const firstLine = content.split("\n")[0].toLowerCase();

  if (firstLine.includes("easy")) return "easy";
  if (firstLine.includes("medium")) return "medium";
  if (firstLine.includes("hard")) return "hard";

  // Fallback: default to medium
  return "medium";
}

function readFiles() {
  const entriesByTopic = {};

  if (!fs.existsSync(JS_ROOT)) {
    console.warn(`JS root not found: ${JS_ROOT}`);
    return entriesByTopic;
  }

  const topics = fs
    .readdirSync(JS_ROOT)
    .filter((item) => fs.statSync(path.join(JS_ROOT, item)).isDirectory());

  topics.forEach((topic) => {
    const topicDir = path.join(JS_ROOT, topic);
    const files = fs.readdirSync(topicDir).filter((f) => f.endsWith(".js"));

    files.forEach((file) => {
      const m = file.match(/^(\d+)-(.+)\.js$/i);
      if (!m) {
        console.warn(`Skipping: ${topic}/${file} — expected "NNNN-slug.js"`);
        return;
      }

      const num = parseInt(m[1], 10);
      const slug = m[2];
      const title = slugToTitle(slug);
      const filePath = path.join(topicDir, file);
      const difficulty = detectDifficulty(filePath, file);

      if (!entriesByTopic[topic]) entriesByTopic[topic] = [];
      entriesByTopic[topic].push({ num, title, slug, difficulty, file, topic });
    });
  });

  // Sort each topic's problems by number
  Object.keys(entriesByTopic).forEach((topic) => {
    entriesByTopic[topic].sort((a, b) => a.num - b.num);
  });

  return entriesByTopic;
}

function buildTable(entriesByTopic) {
  let markdown = "";

  // Order topics
  const orderedTopics = TOPICS.filter((t) => entriesByTopic[t]);
  const otherTopics = Object.keys(entriesByTopic).filter(
    (t) => !TOPICS.includes(t),
  );
  const allTopics = [...orderedTopics, ...otherTopics];

  allTopics.forEach((topic) => {
    const entries = entriesByTopic[topic];
    if (!entries || entries.length === 0) return;

    markdown += `\n### ${topicToTitle(topic)}\n\n`;
    markdown += `| #   | Title | Difficulty | Solution |\n`;
    markdown += `| --- | ----- | ---------- | -------- |\n`;

    entries.forEach((e) => {
      markdown += `| ${e.num} | [${e.title}](https://leetcode.com/problems/${e.slug}/) | ${capitalize(e.difficulty)} | [JS](./javascript/${e.topic}/${e.file}) |\n`;
    });
  });

  return markdown;
}

function updateReadme(table) {
  if (!fs.existsSync(README)) {
    console.error("ERROR: README.md not found");
    process.exit(1);
  }

  let content = fs.readFileSync(README, "utf8");

  const startMarker = "<!-- AUTO_INDEX_START -->";
  const endMarker = "<!-- AUTO_INDEX_END -->";

  if (content.includes(startMarker) && content.includes(endMarker)) {
    const regex = new RegExp(
      `${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`,
      "m",
    );
    content = content.replace(regex, `${startMarker}\n${table}\n${endMarker}`);
    fs.writeFileSync(README, content, "utf8");
    console.log("✅ README.md updated");
    return;
  }

  console.warn("⚠️  No markers found, appending to end");
  content += `\n\n## 📑 Index\n${startMarker}\n${table}\n${endMarker}\n`;
  fs.writeFileSync(README, content, "utf8");
}

// Run
const entriesByTopic = readFiles();
if (Object.keys(entriesByTopic).length === 0) {
  console.warn("No solution files found");
  process.exit(0);
}

const table = buildTable(entriesByTopic);
updateReadme(table);
