let students = [
    { username: 'a', age: 12 },
    { username: 'b', age: 11 },
    { username: 'c', age: 15 },
];

// expect: username: 'a'
// find => HOF //high order function

let infoUserFinded = students.find(function(studentItem) {
    return studentItem.username === 'a'
});
// console.log({ infoUserFinded });
let infoUserFindIndex = students.findIndex(function(studentItem) {
    return studentItem.username === 'aa'
});
console.log({ infoUserFindIndex });

/**
 * push pop
 * shift unshift
 */
students.push({
    username: 'user_added', age: 11
});
console.log({ students });

students.pop({
    username: 'user_added', age: 11
})
console.log({ students });