<%*
const category = await tp.system.suggester(
  ["📐 Algorithm / PS", "💻 C / C++", "🌐 Network", "🎨 Graphics", "🕸 Web", "🔧 Git", "📦 Etc"],
  ["algorithm", "cpp", "network", "graphics", "web", "git", "etc"],
  false,
  "카테고리를 선택하세요"
);
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

## 💠Example / Code

```cpp

```

## ✒️Usage



## 📑Reference

- 
