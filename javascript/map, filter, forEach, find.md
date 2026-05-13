---
date: 2026-05-12
tags:
  - til
  - javascript
---

# JS 배열 고차 함수: `map` / `filter` / `forEach` / `find`

> 2026-05-12 (Tue)

## ✨ What I Learned

- JS 배열에는 콜백을 받아 동작하는 **고차 함수(higher-order function)** 가 내장되어 있음
- `map` / `filter` / `find` 는 **새 값을 반환**하고, `forEach` 는 **반환값이 없음** — 가장 헷갈리는 지점
- 원본 배열은 네 메서드 모두 변경하지 않음 (non-destructive)
- 콜백 인자는 `(element, index, array)` 순이며, 보통 첫 번째만 사용

|메서드|반환값|조기 종료|주 목적|
|---|---|---|---|
|`map`|새 배열 (같은 길이)|✗|변환|
|`filter`|새 배열 (길이 ≤ 원본)|✗|조건 추출|
|`forEach`|`undefined`|✗|side-effect|
|`find`|요소 or `undefined`|✓|단일 탐색|

## 💠 Example / Code

js

```js
const products = [
  { name: 'keyboard', price: 50000, inStock: true },
  { name: 'mouse',    price: 30000, inStock: false },
  { name: 'monitor',  price: 300000, inStock: true },
];

// map: 이름만 추출한 새 배열
const names = products.map(p => p.name);
// ['keyboard', 'mouse', 'monitor']

// filter: 재고 있는 상품만
const available = products.filter(p => p.inStock);
// [{ name: 'keyboard', ... }, { name: 'monitor', ... }]

// find: 가격이 10만원 이상인 첫 번째 상품
const expensive = products.find(p => p.price >= 100000);
// { name: 'monitor', price: 300000, inStock: true }

// forEach: 각 상품 이름 출력 (반환값 없음)
products.forEach(p => console.log(p.name));

// 체이닝: 재고 있는 상품의 이름만
const availableNames = products
  .filter(p => p.inStock)
  .map(p => p.name);
// ['keyboard', 'monitor']
```

## ✒️ Usage

- `map`: API 응답 배열을 UI에서 쓸 형태로 가공할 때 (e.g. `users.map(u => u.name)`)
- `filter`: 조건부 렌더링이나 검색 기능 구현 시
- `find`: ID 기반으로 특정 항목 하나를 찾을 때 — `findIndex` 와 짝으로 기억
- `forEach`: DOM 조작, 로깅 등 반환값이 필요 없는 순회 시 (`map` 결과를 `forEach` 로 처리하는 건 anti-pattern)

## 📑 Reference

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [https://javascript.info/array-methods](https://javascript.info/array-methods)