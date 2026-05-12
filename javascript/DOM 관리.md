---
date: 2026-05-11
tags:
  - til
  - javascript
---

# DOM Manipulation

> 2026-05-11 (Mon)

## ✨ What I Learned

- DOM(Document Object Model)
	- HTML 문서를 트리 구조로 표현한 인터페이스.
	- JavaScript로 웹 페이지의 구조·스타일·내용 동적 변경 가능

- 주요 함수
	- `document.querySelector()`: element 선택
	- `innerHTML` / `textContent` : 내용 교체
	- `classList` : CSS class 제어
	- `addEventListener()` : user interaction에 반응하는 event-driven 구조 생성
	- `createElement()` + `appendChild()` : 동적으로 node를 생성·삽입

## 💠 Example / Code

```js
// 1. Element 선택
const title = document.querySelector('#title');
const items = document.querySelectorAll('.item');

// 2. 내용 변경
title.textContent = 'Hello, DOM!';

// 3. Style / Class 제어
title.classList.add('highlight');
title.classList.toggle('hidden');

// 4. Event 등록
title.addEventListener('click', (e) => {
  console.log('clicked:', e.target);
});

// 5. 동적 Node 생성 및 삽입
const ul = document.querySelector('#list');

const li = document.createElement('li');
li.textContent = 'New Item';
ul.appendChild(li);

// 6. Element 제거
const old = document.querySelector('.old');
old.remove();
```

## ✒️ Usage

- 버튼 클릭, 폼 입력 등 user event에 반응해 화면을 동적으로 업데이트할 때
- 서버에서 받아온 데이터를 기반으로 list / card 등 UI element를 동적으로 렌더링할 때
- `classList`로 CSS class를 토글해 modal, dropdown, tab 등 UI 상태를 전환할 때
- `dataset` attribute를 읽어 HTML element에 저장된 메타데이터를 활용할 때

## 📑 Reference

- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- https://developer.mozilla.org/en-US/docs/Web/API/Element
- https://javascript.info/document