---
date: 2026-05-10
tags:
  - til
  - c
---

# C언어 파일 입출력 (File I/O)

> 2026-05-10 (일)

## ✨ What I Learned

### 파일 입출력 방법
C언어 파일 입출력 → `<stdio.h>` 에서 제공하는 스트림 (stream) 기반 표준 라이브러리 함수로 동작.

- `fopen()` 으로 파일 열기 → `FILE*` 포인터 반환
- 포인터를 통해 읽기 / 쓰기 함수 호출
- `fclose()` 통해 자원 해제해야 함
	  → 해제하지 않으면 데이터 무결성 문제

### 파일 모드

- 기본 모드

| 모드     | 동작            | 파일이 없으면          | 파일이 있으면                 |
| ------ | ------------- | ---------------- | ----------------------- |
| `"r"`  | 읽기 전용         | **에러 (NULL 반환)** | 처음부터 읽기                 |
| `"w"`  | 쓰기 전용         | 새로 생성            | **내용 전체 삭제 (truncate)** |
| `"a"`  | 추가(append) 쓰기 | 새로 생성            | 끝에 이어쓰기                 |
| `"r+"` | 읽기 + 쓰기       | **에러**           | 처음부터 읽기/쓰기              |
| `"w+"` | 읽기 + 쓰기       | 새로 생성            | **내용 전체 삭제** 후 읽기/쓰기    |
| `"a+"` | 읽기 + 추가 쓰기    | 새로 생성            | 읽기는 어디서든, 쓰기는 항상 끝에     |

- 추가 플래그

|플래그|의미|
|---|---|
|`"b"`|**바이너리 모드** (예: `"rb"`, `"wb"`, `"r+b"`). Windows에서 `\n` ↔ `\r\n` 자동 변환을 막아줍니다.|
|`"x"`|**배타적 생성** (C11 이상, 예: `"wx"`). 파일이 이미 존재하면 `fopen`이 실패합니다. 덮어쓰기 사고 방지용.|

- 결정 트리
```text
파일을 어떻게 다룰 것인가?

├─ 기존 데이터 보존?
│   ├─ Yes → 처음부터 읽기만? ............ "r"
│   ├─ Yes → 끝에 이어쓰기만? ............ "a"
│   └─ Yes → 읽기 + 중간 수정? ........... "r+"
│
└─ 처음부터 새로 작성?
    ├─ 쓰기만? .......................... "w"
    ├─ 쓰고 다시 읽기? .................. "w+"
    └─ 덮어쓰기 방지? ................... "wx"  (C11)

+ 바이너리 데이터면 항상 "b" 추가 (예: "rb", "wb")
```

### 파일 관련 함수

| 함수                  | 역할                              |
| ------------------- | ------------------------------- |
| `fopen(path, mode)` | 파일 열기, 실패 시 `NULL` 반환           |
| `fclose(fp)`        | 파일 닫기 & 버퍼 flush                |
| `fprintf(fp, ...)`  | 파일에 형식화된 문자열 쓰기                 |
| `fgets(buf, n, fp)` | 한 줄 읽기 (개행 포함, null-terminated) |
| `fread / fwrite`    | 바이너리 블록 단위 읽기/쓰기                |
| `fseek / ftell`     | 파일 커서 위치 이동/조회                  |
| `feof(fp)`          | 파일 끝 도달 여부 확인                   |

## 💠 Example / Code

```cpp
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    // 1. "w" : 새로 쓰기 (기존 내용 삭제)
    FILE *fp = fopen("scores.txt", "w");
    if (fp == NULL) { perror("fopen w"); return EXIT_FAILURE; }
    fprintf(fp, "Alice %d\n", 95);
    fclose(fp);

    // 2. "a" : 이어쓰기 (기존 내용 보존)
    fp = fopen("scores.txt", "a");
    if (fp == NULL) { perror("fopen a"); return EXIT_FAILURE; }
    fprintf(fp, "Bob %d\n", 88);
    fclose(fp);

    // 3. "r" : 읽기
    fp = fopen("scores.txt", "r");
    if (fp == NULL) { perror("fopen r"); return EXIT_FAILURE; }

    char name[32];
    int score;
    while (fscanf(fp, "%31s %d", name, &score) == 2) {
        printf("%s -> %d\n", name, score);
    }
    fclose(fp);

    // 4. "rb" : 바이너리 읽기 (구조체 단위)
    typedef struct { int id; double value; } Record;
    Record rec;

    fp = fopen("data.bin", "rb");
    if (fp != NULL) {
        while (fread(&rec, sizeof(Record), 1, fp) == 1) {
            printf("id=%d value=%.2f\n", rec.id, rec.value);
        }
        fclose(fp);
    }

    return 0;
}

```

## ✒️ Usage

- **`"r"` / `"w"`**: 텍스트 설정 파일 읽기, 결과 리포트 새로 생성
- **`"a"`**: 로그 파일처럼 기존 기록을 유지하면서 계속 누적해야 할 때
- **`"r+"` / `"w+"`**: 같은 파일에서 읽고 쓰기를 번갈아 해야 하는 경우 (예: 간단한 레코드 기반 DB 흉내내기)
- **`"rb"` / `"wb"`**: 이미지, 음성, 직렬화한 구조체 등 **바이트 단위 보존이 중요한 데이터** 처리
- **`"wx"`**: 임시 파일이나 lock 파일을 만들 때 — 이미 존재하면 실패하므로 race condition 일부를 방지

## 📑 Reference
- [https://en.cppreference.com/w/c/io/fopen](https://en.cppreference.com/w/c/io/fopen)
- [https://man7.org/linux/man-pages/man3/fopen.3.html](https://man7.org/linux/man-pages/man3/fopen.3.html)
- [https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/fopen-wfopen](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/fopen-wfopen)
- 
