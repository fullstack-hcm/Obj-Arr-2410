let students = [
    { username: 'a', age: 12 },
    { username: 'b', age: 11 },
    { username: 'c', age: 15 },
];

// // slice
// let sliceA = students.slice(0, 1);
// // console.log({ 
// //     sliceA, students
// //  });

// // splice
// let spliceA = students.splice(0, 1);
// console.log({
//     spliceA, students
// });
// for(let i = 0; i< students.length; i++) {
//     console.log({ _: students[i] });
// }
let removeA = students.splice(0, 1);
students.forEach(item => console.log(item));