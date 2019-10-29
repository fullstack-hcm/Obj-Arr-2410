// filter, some, every
let students = [
    { username: 'a', age: 12 },
    { username: 'b', age: 11 },
    { username: 'c', age: 15 },
];

let studentFilter = students.filter(studentItem => {
    return studentItem.username === 'a';
});

console.log({ studentFilter });

let isSomeResult = students.some(studentItem => {
    return studentItem.age > 15
});

let isEveryResult = students.every(studentItem => {
    return studentItem.age > 12
});
console.log({ isEveryResult });