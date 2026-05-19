---
date: 2026-05-13
tags:
  - til
  - react
  - frontend
---
# React useEffect

> 2026-05-13 (Wed)

## ✨ What I Learned

- `useEffect` : 함수형 컴포넌트에서 **사이드 이펙트(side effect)** 를 처리하기 위한 React Hook
	- 사이드 이펙트란? 컴포넌트 렌더링 외부에 영향을 주는 작업 (API 호출, DOM 직접 조작, 구독, 타이머 등)
- 실행 시점: **렌더링이 완료된 후** 비동기적으로 실행됨 (브라우저 페인팅을 막지 않음)
- 의존성 배열(dependency array)로 실행 조건을 제어
	- `[]` : 마운트 시 한 번만 실행
	- `[state, prop]` : 해당 값이 변경될 때마다 실행
	- 생략 : 매 렌더링마다 실행
- **Cleanup 함수**: `return`으로 반환한 함수
	- 실행 시점 
		1. 컴포넌트 언마운트 시 
		2. 다음 effect 실행 직전 (의존성 변경 시)
	- 동작 흐름: `Effect → (의존성 변경) → Cleanup → Effect → ... → (언마운트) → Cleanup`
	- "열었으면 닫는다"는 짝 개념 (`addEventListener` ↔ `removeEventListener`)

## 💠 Example / Code

```jsx
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    // 사이드 이펙트: API 호출
    fetch(`https://api.example.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) setUser(data);
      });

    // Cleanup: 언마운트 또는 userId 변경 시 실행
    return () => {
      isCancelled = true;
    };
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}
```

## 🧹 Cleanup 필요 경우

판단 기준: **"이 effect가 컴포넌트 바깥에 지속되는 리소스를 남기는가?"**

| Effect 종류 | Cleanup 필요? | 이유 |
|---|---|---|
| `setInterval`, `setTimeout` | ✅ 필수 | 타이머가 계속 동작 → 메모리 누수 |
| 이벤트 리스너 등록 | ✅ 필수 | 핸들러 중복 등록 방지 |
| 구독(subscribe), WebSocket | ✅ 필수 | 연결이 살아있음 |
| API 호출 (fetch) | ⚠️ 권장 | race condition 방지 |
| 단순 state 업데이트, 로깅 | ❌ 불필요 | 일회성 작업 |
| `document.title` 변경 | ❌ 불필요 | 다음 렌더링 때 덮어쓰면 됨 |

### Race condition 예시 (fetch에서 cleanup이 권장되는 이유)

```
userId=1 요청 시작 → userId=2 요청 시작
                  → userId=2 응답 도착 (화면 업데이트)
                  → userId=1 응답 뒤늦게 도착 (화면이 1로 덮어씌워짐!)
```

→ `isCancelled` 플래그 또는 `AbortController`로 이미 끝난 effect의 결과를 무시하도록 처리

## ✒️ Usage

- 컴포넌트 마운트 시 서버에서 데이터 가져오기 (data fetching)
- `setInterval`, `setTimeout` 같은 타이머 등록 및 해제
- 이벤트 리스너 등록/제거 (`window.addEventListener` 등)
- WebSocket 연결, 외부 라이브러리 구독(subscribe) 관리
- 특정 state나 prop 변화에 반응해 부수적인 작업 수행 (예: 검색어 변경 시 자동 검색)

## 📑 Reference

- https://react.dev/reference/react/useEffect
- https://react.dev/learn/synchronizing-with-effects
- https://overreacted.io/a-complete-guide-to-useeffect/