#!/usr/bin/env node
// scripts/update-readme.js
// push 시 GitHub Actions 가 자동 실행합니다.

const fs   = require("fs");
const path = require("path");

// ─── 설정 ────────────────────────────────────────────────
const SKIP = new Set([
  ".git", ".github", ".obsidian",
  "_templates", "_attachments",
  "scripts", "node_modules",
]);

const EMOJI = {
  algorithm : "📐",
  cpp       : "💻",
  network   : "🌐",
  graphics  : "🎨",
  web       : "🕸",
  git       : "🔧",
  etc       : "📦",
};

// ─── 유틸 ────────────────────────────────────────────────

/** 마크다운 파일에서 첫 번째 H1 제목 추출 */
function getTitle(filePath) {
  const raw  = fs.readFileSync(filePath, "utf-8");
  const body = raw.startsWith("---")
    ? raw.replace(/^---[\s\S]*?---\s*/, "")
    : raw;
  const m = body.match(/^#{1,2}\s+(.+)$/m);
  return m
    ? m[1].replace(/`/g, "").trim()
    : path.basename(filePath, ".md");
}

/** 카테고리 헤더 (이모지 + 사람이 읽기 좋은 이름) */
function header(name) {
  const emoji = EMOJI[name] ?? "📁";
  const label = name.charAt(0).toUpperCase() +
                name.slice(1).replace(/-/g, " ");
  return `${emoji} ${label}`;
}

// ─── 카테고리별 TIL 수집 ──────────────────────────────────
const categories = {};

for (const d of fs.readdirSync(".", { withFileTypes: true })) {
  if (!d.isDirectory() || SKIP.has(d.name)) continue;

  const files = fs.readdirSync(d.name)
    .filter(f => f.endsWith(".md") && f !== "README.md")
    .sort();

  if (files.length === 0) continue;

  categories[d.name] = files.map(f => ({
    title : getTitle(path.join(d.name, f)),
    link  : `./${d.name}/${f}`,
  }));
}

// ─── 카테고리 섹션 생성 ───────────────────────────────────
let section = "";
let total   = 0;

for (const [cat, items] of Object.entries(categories).sort()) {
  section += `### ${header(cat)}\n`;
  for (const item of items) {
    section += `- [${item.title}](${item.link})\n`;
    total++;
  }
  section += "\n";
}

if (!section) section = "_아직 작성된 TIL 이 없습니다._\n\n";

// ─── README.md 마커 교체 ──────────────────────────────────
const readmePath = "README.md";
let readme = fs.readFileSync(readmePath, "utf-8");

const CATEGORY_MARKER = /<!-- CATEGORY-START -->[\s\S]*?<!-- CATEGORY-END -->/;
const STATS_MARKER    = /<!-- STATS-START -->[\s\S]*?<!-- STATS-END -->/;

const today = new Date().toISOString().slice(0, 10);

readme = readme.replace(
  CATEGORY_MARKER,
  `<!-- CATEGORY-START -->\n${section}<!-- CATEGORY-END -->`
);

readme = readme.replace(
  STATS_MARKER,
  `<!-- STATS-START -->\n- 총 TIL 수 : **${total}**\n- 마지막 업데이트 : ${today}\n<!-- STATS-END -->`
);

fs.writeFileSync(readmePath, readme, "utf-8");
console.log(`✅  README 업데이트 완료 — 총 ${total}개`);
