## Chapter 10 객체 리터럴

---

자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 모든것이 객체다.

### 객체 리터럴에 의한 객체 생성

자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지행 언어와는 달리 다양한 객체 생성 방법을 지원한다.

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스 (ES6)

이중 객체 리터럴은 { } 중괄호 내에 0개 이상의 프로퍼티를 정의함으로 객체를 생성한다.

```tsx
//name은 일반적인 프로퍼티, sayHello는 함수 프로퍼티 (메서드)
var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello My name is %{this.name}.`);
  },
};

var empty = {}; //빈 객체 생성
```

### 프로퍼티 (Property)

객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

- **프로퍼티 키**: 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
- **프로퍼티 값:** 자바스크립트에서 사용할수있는 모든 값

문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다. 이 경우에는 프로퍼티 키로 사용할 표현식을 대괄호 ([…])로 묶어야 한다.

```tsx
var obj = {};
var key = "hello";

//ES5: 프로퍼티 키 동적 생성
obj[key] = "world";

//ES6: 계산된 프로퍼티 이름
var obj = { [key]: "world" };

console.log(obj); // {hello: "world"}
```

프로퍼티를 참조할때 마침표를 쓰거나 대괄호를 쓴다 [person.name](http://person.name) 혹은 person[’name’].

대괄호로 객체의 프로퍼티 접근을 할때 프로퍼티 키는 반드시 **따옴표로 감싼 문자열** 이어야한다.

### 메서드

자바스크립트에서 사용할수있는 모든값을 프로퍼티 값으로 사용할 수 있다고 했다. 자바스크립트의 함수 역시 객체 이다 (일급 객체). **따라서 함수를 프로퍼티 값으로 쓸 수 있다.**

다른 일반 함수와 구분하기 위해 프로퍼티 값에 쓰인 함수를 **메서드**라고 부른다.

```tsx
var circle = {
  radius: 5, // 프로퍼티

  // 원의 지름
  getDiameter: function () {
    // 메서드
    return 2 * this.radius; // this는 circle을 가리킨다
  },
};
console.log(circle.getDiameter()); // 10
```

### ES6에서 추가된 객체 리터럴의 확장 기능

**프로퍼티 축약 표현**

```tsx
//ES5
var x = 1,
  y = 2;
var obj = {
  x: x,
  y: y,
};

//ES6
let x = 1,
  y = 2;

//프로퍼티 축약 표현
const obj = { x, y };
```

**계산된 프로퍼티 이름**

```tsx
//ES5
var prefix = "prop";
var i = 0;

var obj = {};

//계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

//ES6 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj); //{prop-1: 1, prop-2: 2, prop-3: 3}
```
