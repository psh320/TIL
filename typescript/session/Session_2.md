Core types

 number          
 1,5.3,-10
 All numbers, no differentiation between intergers or floats

 string
 'Hi', "Hi", `Hi`
 All text values

 boolean
 true, false
 two values true or false
 
 object
 {age:30}
 Any JavaScript object, more specific types are possible

 array
 [1,2,3]
 any javascript array, type can be flexible
 
 tuple 
 [1,2]
 Added by TypeScript: Fixed-length array

 enum
 enum {NEW, OLD}
 Added by TypeScript: Automatically enumerated global constant identifiers

 Any*
 Any kind of value, no specific type assignment

---------------------------------------------
 타입스크립트는 런타임 코드를 바꾸거나 좋게 만드는게 아니다, 그저 개발도중에 필요한 기능만 있다.
 그냥 자바스크립트에 typeof 쓰면 되는거 아닌가요?! 할수있지만, js 는 런타임때 알수있는 dynamic Types를 쓰고
 타입스크립트는 개발할때 사용되는 static types 를 쓴다.
 컴파일 전에 에러를 발견할수있냐 유무 차이.

Type inference (추론).

변수를 선언 할때 
const 와 let으로 설정 하는데
let number = 5 라고 하거나 let number: number
이런식으로 선언 해주면 변수에 타입을 정해줄수있다.

--------------------------------------------
Nested Objects & Types
Of course object types can also be created for nested objects.

Lets say you have this JavaScript object:

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
This would be the type of such an object:

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
So you have an object type in an object type so to say.


