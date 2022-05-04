function adds(n1: number, n2: number): number {
    return n1+ n2;
}

function printResults(num:number): void {
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2:number, cb:(num:number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResults(adds(2,5))

let combineValues : Function;
let combineValue: (a:number, b:number) => number;

addAndHandle(10, 20, (result) => {})