"use strict";
function adds(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResults(adds(2, 5));
let combineValues;
let combineValue;
addAndHandle(10, 20, (result) => { });
