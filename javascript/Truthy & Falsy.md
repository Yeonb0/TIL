---
date: 2026-05-07
tags:
  - til
  - javascript
---

# Truthy & Falsy

> 2026-05-07 (목)

## ✨ What I Learned

### Falsy 
- JS 에서 거짓으로 평가되는 값
```jsx
undefined
null
0
-0
0n     // big integer
NaN
""     // 빈 문자열
```

### Truthy
- 7 가지 Falsy 이외의 모든 값
```jsx
"hello" // 문자열
123     // 숫자
[]
{}
() => {}
```
## 💠 Example / Code

```jsx
function printName(person) {
	if (!person) { // null & undefined 동시 체크 가능
		console.log("person의 값이 없음");
		return;
	}
	console.log(person.name);
}
```

## ✒️ Usage

- 조건문에서 null & undefined 를 따로 or 체크하지 않고 한번에 `!` 로 체크 가능

## 📑 Reference

- [2024 리뉴얼] 한입 크기로 잘라 먹는 리액트(React.js)](https://www.udemy.com/course/winterlood-react-basic/) 2.1) Truthy와 Falsy