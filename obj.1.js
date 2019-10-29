/**
 * 1. literal obj
 */
let user = {
    fullname: 'MERN2410'
}
user.age = 21;
// category = danhmuc = danh-muc
user['any-prop'] = 'DEMO';

console.log(user['any-prop']);

/**
 * 2. new Keyword
 */
let user2 = new Object();
user2.age = 21;

console.log(user2.age);