---
date: 2026-05-12
tags:
  - til
  - web
---

# HTML 태그

## ✨ What I Learned

- HTML 태그 : 웹 브라우저에게 콘텐츠의 **의미와 구조**를 알려주는 마크업 단위
    - `<태그명>콘텐츠</태그명>` 형태가 기본 — 열리는 태그(opening)와 닫히는 태그(closing)로 구성
    - `<br>`, `<img>`, `<input>` 처럼 닫는 태그 없이 단독으로 쓰이는 **빈 요소(void element)** 도 존재
    - 태그는 크게 **블록 레벨**(block-level)과 **인라인**(inline) 두 종류로 나뉨
        - 블록 : 새 줄에서 시작, 너비 전체 차지 (`<div>`, `<p>`, `<h1>`~`<h6>`, `<ul>`, `<table>` 등)
        - 인라인 : 텍스트 흐름 안에 삽입 (`<span>`, `<a>`, `<strong>`, `<img>` 등)
    - HTML5부터 의미론적(semantic) 태그 강조 — `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` 등

---

**자주 쓰는 태그 한눈에 보기** (🔹 = void element)

|분류|태그|용도|
|---|---|---|
|문서 구조|`<html>` `<head>` `<body>`|문서의 뼈대|
|시맨틱 레이아웃|`<header>` `<nav>` `<main>` `<footer>`|역할 명시 레이아웃|
|제목|`<h1>` ~ `<h6>`|계층적 제목|
|텍스트|`<p>` `<span>` `<strong>` `<em>` 🔹`<br>`|문단·강조·줄바꿈|
|링크·미디어|`<a>` 🔹`<img>` `<video>` `<audio>`|하이퍼링크, 미디어 삽입|
|목록|`<ul>` `<ol>` `<li>`|순서 없는/있는 목록|
|표|`<table>` `<tr>` `<th>` `<td>`|데이터 테이블|
|폼|`<form>` 🔹`<input>` `<button>` `<select>` `<textarea>` `<label>`|사용자 입력|
|컨테이너|`<div>` `<section>` `<article>`|영역 묶기|
|메타|🔹`<meta>` 🔹`<link>` `<script>`|문서 정보·외부 자원|

> 🔹 **Void element** : 닫는 태그(`</태그>`) 없이 단독으로 사용. 내용(content)을 가질 수 없음. 대표 목록 : `<br>` `<hr>` `<img>` `<input>` `<meta>` `<link>` `<area>` `<col>` `<embed>` `<source>` `<track>` `<wbr>`

## 💠 Example / Code

html

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>폼 요소 예제</title>
</head>
<body>

  <form>
    <h2>설문 폼</h2>

    <!-- 체크박스: 복수 선택 가능 -->
    <fieldset>
      <legend>관심 언어 (복수 선택 가능)</legend>
      <label><input type="checkbox" name="lang" value="c">     C</label>
      <label><input type="checkbox" name="lang" value="cpp">   C++</label>
      <label><input type="checkbox" name="lang" value="python">Python</label>
    </fieldset>

    <br>

    <!-- 라디오 버튼: name이 같으면 하나만 선택 -->
    <fieldset>
      <legend>경력</legend>
      <label><input type="radio" name="level" value="junior"> 주니어</label>
      <label><input type="radio" name="level" value="mid">    미드</label>
      <label><input type="radio" name="level" value="senior"> 시니어</label>
    </fieldset>

    <br>
    <button type="submit">제출</button>
  </form>

</body>
</html>
```

## ✒️ Usage

- `checkbox` : 약관 동의, 필터 옵션, 다중 항목 선택 등 **복수 선택**이 필요한 경우
- `radio` : 성별·배송 방식·결제 수단처럼 **하나만 선택**해야 하는 경우 — `name` 속성을 같게 묶어야 함
- `<label>` 로 `<input>` 을 감싸면 텍스트 클릭 시에도 선택 → **UX 필수 패턴**
- `<fieldset>` + `<legend>` 로 관련 입력 요소를 묶으면 접근성(a11y) 향상

## 📑 Reference

- [https://developer.mozilla.org/ko/docs/Web/HTML/Element](https://developer.mozilla.org/ko/docs/Web/HTML/Element)
- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/checkbox](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/checkbox)
- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/radio](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/radio)