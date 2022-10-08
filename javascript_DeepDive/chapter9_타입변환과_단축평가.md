## Chapter 9 타입 변환과 단축 평가

---

개발자의 의도에 따라 변수의 타입을 바꾸는것 = **명시적 타입 변환(explicit coercion)** 혹은 **타입캐스팅(type casting)**.

개발자의 의도와 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동변환 되는것 = **암묵적 타입 변환(implicit coercion)** 또는 **타입 강제 변환(type coercion)**.

### 암묵적 타입 변환

1. 문자열 타입으로 변환

   ```tsx
   1 +
     "2" // "12"
     `1 + 1 = ${1 + 1}`; // "1 + 1 = 2"
   NaN + ""; // "NaN"
   true + ""; // "true"
   null +
     ""[(10, 20)] + // "null"
     ""; // "10,20"
   ```

   이렇듯 왠만한 변수에 문자열을 더해주면 자동으로 자바스크립트가 문자열로 타입을 바꾼다

2. 숫자 타입으로 변환

   ```tsx
   1 - "1"; // 0
   "1" >
     0 + // true, 비교 연산자는 숫자를 필요로 하기때문에 '1'을 숫자로 바꾼다.
       "1" + // 1
       "string" + // NaN
       true + // 1
       false + // 0
       null + // 0
       undefined + // NaN
       [10, 20]; // NaN
   ```

   빈 문자열(’’), 빈 배열([]), null, false 는 0 으로, true 는 1 로 변환한다. 객채나 배열, undefined는 변환되지 않아 NaN이 된다.

3. 불리언 타입으로 변환

   자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값 또는 Falsy 값으로 구분한다. 제어문이나 조건식으로 평가되어야 한다면 다음과 같은 데이터를 false로 변환한다

   - false
   - undefined
   - null
   - 0, -0
   - NaN
   - ‘’ (빈 문자열)

   그 외는 다 true로 변환한다.

   ### 명시적 타입 변환

   1. 문자열 타입으로 변환
      - String 생성자 함수를 new 연산자 없이 호출하는 방법
      - Object.prototype.toString() 메서드를 사용하는 방법
      - 문자열 연결 연산자를 이용하는 방법
   2. 숫자 타입으로 변환
      - Number 생성자 함수를 new 연산자 없이 호출하는 방법
      - parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
      - - 단항 산술 연산자를 이용하는 방법
      - - 산술 연산자를 이용하는 방법
   3. 불리언 타입으로 변환
      - Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
      - ! 부정 논리 연산자를 두번 사용하는 방법 (!!를 변수 앞에 두번 놓으면 boolean이 된다)

   ### 단축 평가

   표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평과 과정을 생략하는 것을 말한다.

   ```tsx
   "Cat" && "Dog"; // "Dog" 를 반환
   "Cat" || "Dog"; // "Cat" 을 반환
   ```

   && 의 경우 앞에 ‘Cat’이 truthy 값이라서 뒤에 값에 의해 결과가 결정되어 그냥 뒤의 값을 바로 반환하지만

   || 의 경우 앞의 ‘Cat’이 truthy 값이기에 뒤에 값과 상관없이 바로 앞의 값을 반환한다.

   **단축평가 예시**

   - 객채를 가리키기를 시대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
     ```tsx
     var elem = null;
     var value = elem.value; // TypeError: Cannot read property 'value' of null.

     //elem이 null이나  undefined와 같은 Falsy 값이면 elem으로 평가되고
     //elem이 Truthy 값이면 elem.value로 평가된다.
     var value = elem && elem.value; // null
     ```

### 옵셔널 체이닝 연산자

연산자 ?. 는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

```tsx
var elem = null;

//elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); //undefined

//옵셔널 체이닝이 나오기 전에는 단축평가로 다음과 같이 확인했다
var value = elem && elem.value;
```

### null 병합 연산자

null 병합 연산자 ?? 는 좌항의 피연산자가 null 또는 undefined의 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다. **변수에 기본값을 설정할때 유용하다**.

```tsx
//좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고,
//그렇지 않으면 좌항의 피연산자를 반환한다.
var foo = null ?? "default string";
console.log(foo); // "default string"
```
