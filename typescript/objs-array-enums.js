"use strict";
//object array
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Andrew',
//     age: 25
// };
//tuple
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Andrew',
//     age: 25,
//     hobbies: ['Playing Game', 'Singing'],
//     role: [2,'author']
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Andrew',
    age: 25,
    hobbies: ['Playing Game', 'Singing'],
    role: Role.ADMIN
};
let favActivities;
favActivities = ['Sports'];
console.log(person.name);
