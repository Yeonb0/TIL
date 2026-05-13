---
date: 2026-05-13
tags:
  - til
  - web
---

# React 새 프로젝트 시작하기

> 2026-05-13 (Wed)

## ✨ What I Learned

- React 공식 권장 방식은 **프레임워크를 통한 시작**으로, 순수 `create-react-app`은 2023년부터 사실상 deprecated
- 현재 주요 선택지: **Vite** (빠른 번들러, SPA 중심), **Next.js** (SSR/SSG 지원, 풀스택), **Remix** (서버 중심 라우팅)
- 단순 학습·토이 프로젝트라면 **Vite + React**가 가장 가볍고 빠름
- `npm create vite@latest` 한 줄로 템플릿 선택부터 초기 구성까지 완료됨
- Node.js(v18+) 설치가 선행 조건

## 💠 Example / Code


```bash
# 1. 프로젝트 생성 (대화형 CLI)
npm create vite@latest my-app

# → 프레임워크 선택: React
# → 언어 선택: TypeScript (또는 JavaScript)

# 2. 의존성 설치 및 실행
cd my-app
npm install
npm run dev
# → http://localhost:5173 에서 확인
```

```
my-app/
├── public/          # 정적 파일
├── src/
│   ├── App.tsx      # 루트 컴포넌트
│   └── main.tsx     # 진입점 (ReactDOM.createRoot)
├── index.html
└── vite.config.ts
```

## ✒️ Usage

- SPA(Single Page Application) 빠르게 프로토타이핑할 때
- 포트폴리오, 대시보드, 관리자 페이지처럼 SEO가 중요하지 않은 앱
- SEO·서버 렌더링이 필요하면 `create-next-app` 으로 Next.js 선택
- React 자체 학습 목적이라면 공식 Playground인 **StackBlitz** / **CodeSandbox** 도 대안

### 📑 Reference

- [https://react.dev/learn/start-a-new-react-project](https://react.dev/learn/start-a-new-react-project)
- [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
- [https://nextjs.org/docs/getting-started/installation](https://nextjs.org/docs/getting-started/installation)