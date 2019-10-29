// map
let students = [
    { username: 'a', age: 12 },
    { username: 'b', age: 11 },
    { username: 'c', age: 15 },
];

let students2 = JSON.parse(JSON.stringify(students))

students2.map(function(studentItem){
    studentItem.age = 2019 - studentItem.age;
    return studentItem;
});

console.log({ students, students2 });