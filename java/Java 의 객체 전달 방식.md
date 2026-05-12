---
date: 2026-05-09
tags:
  - til
  - java
---

# Java 의 객체 전달 방식

> 2026-05-09 (토)

## ✨ What I Learned

### Call-by-value
- 기본적으로 항상 call-by-value
- 값 자체를 전달. 원본 불변

### Call-by-Reference
- 단, 객체의 경우 참조값 (reference) 을 값으로 전달
- 내부 상태 변경 가능 (원본 변경), 재할당은 불가

## 💠 Example / Code

```java
void change(Person p) {
    p.name = "Bob";  // 원본 객체의 필드 변경 → 반영됨
}

Person person = new Person("Alice");
change(person);
System.out.println(person.name); // "Bob"
```

```java
void reassign(Person p) {
    p = new Person("Charlie");  // 로컬 참조만 바뀜 → 원본 불변
}

Person person = new Person("Alice");
reassign(person);
System.out.println(person.name); // "Alice" (변화 없음)
```

## ✒️ Usage

|패턴|활용 방향|
|---|---|
|방어적 복사|외부에서 내부 상태 보호|
|불변 객체|상태 변경 대신 새 객체 반환|
|빌더 패턴|단계적 객체 생성|
|컬렉션 채우기|반환값 없이 원본 수정|

## 📑 Reference

- claude
