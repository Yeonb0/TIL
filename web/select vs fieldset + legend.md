---
date: 2026-05-12
tags:
  - til
  - html
---

# `<select>` vs `<fieldset>` + `<legend>`

> 2026-05-12 (Tue)

## ✨ What I Learned

- `<select>` : **하나의 필드**에서 여러 옵션 중 하나(또는 여러 개)를 **선택**하는 드롭다운 위젯
  - `<option>` 태그를 자식으로 가지며, 사용자 입력값 자체를 담는 **form control**
  - `name` 속성으로 서버에 값을 전송하고, `value`로 전송 값을 지정
- `<fieldset>` + `<legend>` : **관련된 여러 form 요소들을 시각적·의미론적으로 그룹핑**하는 컨테이너
  - `<legend>`는 그 그룹의 제목 역할 → 스크린리더가 "OO 그룹 안의 입력 요소"임을 인식
  - 값을 직접 담지 않으며, 레이아웃·접근성을 위한 **구조 요소**
- 핵심 차이: `<select>`는 **입력 컨트롤**, `<fieldset>`은 **그룹 컨테이너** — 역할 레이어가 다름

## 💠 Example / Code

```html
<!-- select: 단일 드롭다운 선택 -->
<label for="lang">언어 선택</label>
<select id="lang" name="language">
  <option value="ko">한국어</option>
  <option value="en">English</option>
  <option value="ja">日本語</option>
</select>

<!-- fieldset + legend: 라디오/체크박스 묶음 -->
<fieldset>
  <legend>알림 수신 방법</legend>

  <input type="radio" id="email" name="notify" value="email">
  <label for="email">이메일</label>

  <input type="radio" id="sms" name="notify" value="sms">
  <label for="sms">SMS</label>

  <input type="radio" id="push" name="notify" value="push">
  <label for="push">푸시 알림</label>
</fieldset>
```

## ✒️ Usage

- `<select>` — 옵션이 많아 라디오버튼으로 나열하기 어려울 때 (국가, 연도, 카테고리 선택 등)
- `<select multiple>` — 복수 선택이 필요한 태그·권한 선택 UI
- `<fieldset>` — 라디오·체크박스 그룹을 묶어 접근성과 시멘틱 구조를 높일 때
- `<fieldset disabled>` — 특정 섹션 전체를 한 번에 비활성화할 때 (결제 미완료 시 배송지 입력란 잠금 등)

## 📑 Reference

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
- https://www.w3.org/WAI/tutorials/forms/grouping/