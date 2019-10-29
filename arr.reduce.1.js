let students = [
    { username: 'a', age: 12, gender: 1 },
    { username: 'b', age: 11, gender: 0 },
    { username: 'c', age: 15, gender: 1 },
    { username: 'd', age: 15, gender: 0 },
    { username: 'e', age: 19, gender: 1 },
    { username: 'f', age: 20, gender: 1 },
    { username: 'g', age: 15, gender: 1 },
];

// reduce
let totalAge = students.reduce((previousVal, currentVal) => previousVal + Number(currentVal.age), 0);
let totalAge2 = students.reduce(function(previosVal, currentVal) {
    let total = previosVal + currentVal.age;
    return total;
}, 0)
console.log({ totalAge });