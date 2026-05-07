# 🛠 Obsidian Vault 셋업 가이드

## 1. Obsidian 설치 및 vault 열기

1. [Obsidian 다운로드](https://obsidian.md) 후 설치
2. Obsidian 실행 → **"Open folder as vault"** → 이 `til/` 폴더 선택
3. *"Trust author and enable plugins?"* 메시지가 뜨면 **"Trust author and enable plugins"** 클릭
   - ( `.obsidian/` 설정이 이미 들어 있어서 뜨는 정상 메시지입니다 )

## 2. 다크 모드 활성화

`Settings (⚙) → Appearance → Base color scheme` → **Dark** 선택

## 3. 커뮤니티 플러그인 활성화

`Settings → Community plugins` → **"Turn on community plugins"** 클릭 ( 한 번만 )

## 4. 필수 플러그인 2개 설치

`Settings → Community plugins → Browse` 에서 검색 후 Install + Enable :

| 플러그인 | 작성자 | 용도 |
|---|---|---|
| **Templater** | SilentVoid13 | 동적 템플릿 ( 카테고리 자동 분류 ) |
| **Obsidian Git** | Vinzent | 자동 커밋 / 푸시 |

설치 후 Obsidian 을 한 번 **재시작** 해 주세요. ( `.obsidian/plugins/templater-obsidian/data.json` 의 설정이 적용되도록 )

## 5. 동작 확인

`Cmd+Shift+T` ( Windows / Linux 는 `Ctrl+Shift+T` ) 를 누르면 :

1. *"Select a template"* → `til` 선택 ( 엔터 )
2. *"New file name"* → 파일명 입력 ( 예 : `binary-search-on-answer` )
3. *"카테고리를 선택하세요"* → 카테고리 선택

→ 자동으로 해당 폴더에 새 TIL 이 만들어지고, *"무엇을 배웠나"* 섹션에 커서가 위치합니다.

## 6. Obsidian Git 설정 ( 권장 )

`Settings → Community plugins → Obsidian Git → Options` :

- **Vault backup interval (minutes)** : `30` ( 30분마다 자동 커밋 + 푸시 )
- **Auto pull interval (minutes)** : `30`
- **Pull updates on startup** : ✅
- **Commit message** : `Update: {{date}}` 또는 본인 취향대로

> 💡 처음 한 번은 직접 git remote 를 설정해 주세요 ( 아래 7번 ).

## 7. GitHub 연결 ( 최초 1회 )

터미널에서 :

```bash
cd til
git init
git add .
git commit -m "Init: Obsidian TIL vault"
git branch -M main
git remote add origin https://github.com/사용자명/til.git
git push -u origin main
```

이후로는 Obsidian Git 이 자동으로 처리합니다.

## 8. 모바일 셋업 ( 선택 )

iOS / Android 에서 **Obsidian** 앱 설치 후 :

- iCloud / Google Drive 로 vault 동기화 **OR**
- Obsidian Sync 유료 구독 **OR**
- Obsidian Git 의 [모바일 가이드](https://github.com/denolehov/obsidian-git/wiki/Installation#mobile) 따라 git 동기화

> 가장 무료인 방법은 git 동기화이지만, SSH 키 설정 등이 약간 번거롭습니다.

---

## 🎯 추천 추가 플러그인 ( 나중에 익숙해지면 )

| 플러그인 | 용도 |
|---|---|
| **Dataview** | TIL 통계 / 인덱스 자동 생성 ( "이번 달에 쓴 TIL 목록" 등 ) |
| **Calendar** | 날짜별 TIL 시각화 ( 잔디 효과를 옵시디언에서도 ) |
| **Tag Wrangler** | 태그 일괄 변경 / 정리 |
| **Iconize** | 폴더에 아이콘 달기 ( 시각적 구분 ) |
| **Advanced URI** | 외부 ( 캘린더, 단축어 등 ) 에서 TIL 작성 트리거 |

---

## ⚠️ 자주 겪는 문제

**Q. `Cmd+Shift+T` 가 작동 안 해요**
- A. Templater 가 **설치 + Enable** 되어 있는지 확인. Obsidian 재시작.

**Q. 새 TIL 이 vault 루트에 만들어지고 폴더로 안 옮겨져요**
- A. `_templates/til.md` 의 Templater 스크립트 ( `<%* %>` 부분 ) 가 있는지 확인. 없다면 텍스트만 복사된 것이니 파일 다시 받기.

**Q. 옵시디언 git 이 push 에 실패해요**
- A. 인증 문제일 가능성이 큼. 터미널에서 한 번 `git push` 직접 해서 자격 증명 캐싱 후 재시도. ( SSH 키 / Personal Access Token )

**Q. 다른 기기에서 같은 셋업으로 열고 싶어요**
- A. 그 기기에서 `git clone` → Obsidian 으로 폴더 열기 → 커뮤니티 플러그인 다시 설치 ( 설정은 자동 동기화됨 )
