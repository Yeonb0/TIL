<%*
// vault 루트 폴더를 자동 스캔
const SKIP = new Set(["_templates", "_attachments", ".obsidian", "scripts"]);

const folders = app.vault.getAllLoadedFiles()
  .filter(f => Array.isArray(f.children))   // TFolder 만
  .filter(f => !f.path.includes("/"))        // 루트 레벨만
  .filter(f => f.path !== "" && !SKIP.has(f.path) && !f.path.startsWith("."))
  .map(f => f.path)
  .sort();

const ADD_NEW = "➕  새 카테고리 추가";
const options = [...folders, ADD_NEW];

let category = await tp.system.suggester(options, options, false, "카테고리 선택");
if (!category) return;

if (category === ADD_NEW) {
  const input = await tp.system.prompt("카테고리 이름 (영소문자 + 하이픈만)", "");
  if (!input) return;
  category = input.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/^-+|-+$/g, "");
  if (!category) return;
}

await tp.file.move(`/${category}/${tp.file.title}`);
-%>
---
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - til
  - <% category %>
---

# <% tp.file.title %>

> <% tp.date.now("YYYY-MM-DD (ddd)") %>

## ✨ What I Learned

<% tp.file.cursor() %>

## 💠 Example / Code

```cpp

```

## ✒️ Usage



## 📑 Reference

- 
