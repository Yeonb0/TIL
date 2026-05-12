---
date: 2026-05-11
tags:
  - til
  - javascript
---

# Date 객체와 날짜

> 2026-05-11 (Mon)

## ✨ What I Learned

- `Date()` 생성자를 통해 생성 가능
    - 인수 X : 지금 현재 시간 출력
    - 인수 O : 특정 날짜 기준 (`-`, `.`, `/` 로 표현 가능, `,` 로 구분해 숫자로 표시 가능)

- 타임 스탬프 : `1970.01.01 0시 0분 0초` 기준으로 몇 ms 지났는지 표시
    - `1970.01.01 0시 0분 0초` : 협정 세계시 (UTC)
    - `getTime()` 함수 통해 생성

- 시간 요소 추출
    - 년도 : `getFullYear`
    - 월 : `getMonth` → index 0 부터 시작 (+1 필수)
    - 일 : `getDate`
    - 시간 : `getHours`
    - 분 : `getMinutes`
    - 초 : `getSeconds`

- 시간 수정 : `get` 대신 `set`으로 사용
- 시간 출력
    - `toDateString()`→ 요일 월 일 년도 순
    - `toLocaleString()` → 년. 월. 일 시간 순

## 💠 Example / Code

```javascript
// 1. Date 객체 생성
const now    = new Date();                      // 현재 시각
const d1     = new Date("1997-01-07T10:10:10"); // ISO 8601 문자열
const d2     = new Date(1997, 0, 7, 10, 10, 10); // (년, 월(0-based), 일, 시, 분, 초)

// 2. 타임스탬프 (ms)
const ts = now.getTime();         // 예: 1715385600000
const fromTs = new Date(ts);      // 타임스탬프 → Date 객체 역변환
console.log(Date.now());          // new Date().getTime() 의 단축형

// 3. 시간 요소 추출
console.log(now.getFullYear());   // 2026
console.log(now.getMonth() + 1);  // 1~12  ← 반드시 +1
console.log(now.getDate());       // 1~31  (getDate, 괄호 필수)
console.log(now.getDay());        // 0=일, 1=월 … 6=토
console.log(now.getHours());      // 0~23
console.log(now.getMinutes());    // 0~59
console.log(now.getSeconds());    // 0~59

// 4. 시간 요소 수정
const d = new Date("2026-05-11T00:00:00");
d.setFullYear(2023);
d.setMonth(3);      // 4월 (0-based)
d.setDate(30);
d.setHours(23);
d.setMinutes(59);
d.setSeconds(59);
console.log(d);     // 2023-04-30T23:59:59

// 5. 포맷 출력
console.log(now.toDateString());    // "Mon May 11 2026"
console.log(now.toLocaleString());  // "2026. 5. 11. 오전 9:00:00" (로케일 의존)
console.log(now.toISOString());     // "2026-05-11T00:00:00.000Z" (UTC 기준)
```

## ✒️ Usage

- 게시글·댓글의 작성 시각을 표시하거나 "3분 전"처럼 상대 시간을 계산할 때
- D-day 카운터, 예약·일정 시스템에서 두 날짜 사이의 차이(ms)를 구할 때
- 서버에서 받은 ISO 8601 타임스탬프를 사용자 로케일에 맞게 변환·출력할 때
- `setMonth()` 등으로 말일·다음 달 첫날을 동적으로 계산할 때 (달력 UI)

## 📑 Reference

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
- https://tc39.es/ecma262/#sec-date-objects
- https://ko.javascript.info/date
- https://www.udemy.com/course/winterlood-react-basic/learn/lecture/29541093#overview