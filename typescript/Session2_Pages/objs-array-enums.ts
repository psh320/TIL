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

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Andrew',
    age: 25,
    hobbies: ['Playing Game', 'Singing'],
    role: Role.ADMIN
}

let favActivities: any;
favActivities = ['Sports']

console.log(person.name)