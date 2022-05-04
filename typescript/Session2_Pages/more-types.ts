let userInput: unknown;
let userName: string;

userInput = 5;
userInput= 'Max';

if(typeof userInput === 'string') {
    userName = userInput;
}

//Any 랑 다를게 없지만, 언노운 변수를 다른 확정 타입 변수에 넣을순 없다 저렇게 동적으로 체크해줘야 가능한것.

function generateError(message:string, code: number): never {
    throw {message: message, errorCode: code}
}
//throw처럼 에러가 중간에 나서 스크립트가 크래쉬 된다면 함수의 리턴 타입은 네버다.
generateError('An error occurred!', 500);