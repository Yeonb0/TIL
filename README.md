# 🌱 TIL (Today I Learned)

매일 새롭게 알게 된 것을 짧게 기록합니다.

> "과거의 나에게 설명한다"는 마음으로 씁니다.

📦 이 vault 는 **Obsidian + Git** 으로 관리됩니다. 셋업은 [SETUP.md](./SETUP.md) 를 참고하세요.

---

## 📚 카테고리

### Algorithm / PS
- 

### C / C++
- _( 예정 )_

### Computer Graphics
- _( 예정 )_

### Network
- _( 예정 )_

### Web (TypeScript / React / Astro)
- _( 예정 )_

### Git
- _( 예정 )_

### Etc
- _( 예정 )_

---

## 📌 작성 규칙

1. **하루에 하나씩**, 짧게라도 OK ( 1줄도 가능 )
2. **자기 언어로** 다시 쓰기 ( 복붙 금지 )
3. **출처 / 참고 링크** 남기기
4. **검색 가능하도록** 키워드 명확히
5. **완벽함보다 꾸준함**

## 📝 새 TIL 작성

**Obsidian 사용 시** :

1. `Cmd+Shift+T` ( Windows / Linux : `Ctrl+Shift+T` )
2. 템플릿 → `til` 선택
3. 파일명 입력 ( kebab-case 권장, 예 : `segment-tree-lazy-propagation` )
4. 카테고리 선택
5. 자동으로 폴더에 분류되어 생성됨

**일반 에디터 사용 시** :

```bash
cp _templates/til.md algorithm/새주제.md
# Templater 문법 (<%* %> 등) 은 수동으로 채우거나 제거
```

> ⚠️ 새 TIL 작성 후 이 README 의 카테고리 섹션에 링크 추가하는 것 잊지 말기

## 🎯 목표

- [ ] 첫 30일 연속 작성
- [ ] 100 TIL 달성
- [ ] 카테고리 7개 모두 채우기

---

## 📊 통계

> 수동 업데이트. Dataview 플러그인 설치하면 자동화 가능.

- 총 TIL 수 : 1
- 시작일 : YYYY-MM-DD ( ← 첫 TIL 작성일로 수정 )
- 가장 활발한 카테고리 : -

---

## 🗂 디렉토리 구조

```
til/
├── README.md              ← 메인 인덱스 (이 파일)
├── SETUP.md               ← Obsidian 셋업 가이드
├── _templates/
│   └── til.md             ← Templater 템플릿 (Obsidian 용)
├── _attachments/          ← 이미지 등 첨부 파일 (자동 생성됨)
├── .obsidian/             ← Obsidian 설정 (커밋됨, workspace.json 만 제외)
├── .gitignore
├── algorithm/             ← 카테고리별 폴더
├── cpp/
├── network/
├── graphics/
├── web/
├── git/
└── etc/
```

---

## 📖 참고한 TIL repo 들

- [jbranchaud / til](https://github.com/jbranchaud/til) — 1700+ 개, 카테고리 분류의 정석
- [simonw / til](https://github.com/simonw/til) — 자동 인덱스 생성 스크립트로 유명
