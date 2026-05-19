---
date: 2026-05-13
tags:
  - til
  - git
---

# Git Commit Message Convention

> 2026-05-13 (Wed)

## ✨ What I Learned

- Git commit message는 **변경 이력을 명확하게 전달**하기 위한 짧은 텍스트 기록
- 일반적으로 `<type>(<scope>): <subject>` 형식의 **Conventional Commits** 규칙을 따름
- `type`은 변경의 성격을 분류 (`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore` 등)
- subject는 **명령형 현재시제**로 작성 (`Add`, `Fix`, `Remove` 등) — 과거형이나 명사형 지양
- body(선택)에는 *무엇을* 바꿨는지가 아닌 **왜** 바꿨는지를 서술

## 💠 Example / Code

```bash
# feat: 새 기능 추가
feat(auth): add JWT refresh token support

# fix: 버그 수정
fix(api): handle null response from user endpoint

# docs: 문서만 수정
docs: update README with setup instructions

# refactor: 동작 변경 없는 코드 개선
refactor(parser): simplify token extraction logic

# body + footer 포함한 전체 예시
fix(cart): prevent duplicate item insertion

Previously, adding the same item twice would create
duplicate entries. Now checks by item ID before inserting.

Closes #42
```

## ✒️ Usage

- `feat` — 사용자에게 노출되는 새 기능을 추가할 때
- `fix` — 버그를 수정하거나 잘못된 동작을 고칠 때
- `refactor` — 외부 동작은 그대로이나 내부 구조를 개선할 때
- `chore` — 빌드 설정, 패키지 업데이트 등 코드 로직 외 작업을 할 때

## 📑 Reference

- https://www.conventionalcommits.org/en/v1.0.0/
- https://cbea.ms/git-commit/