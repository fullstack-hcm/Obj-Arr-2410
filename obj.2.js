function Human(name, age) { // constructor function
    this.name = name;
    this.age  = age;
    this.getInfo = function() {
        return `${name}, ${age}`
    }
} 

let user1 = new Human('MERN', 3);
let user2 = new Human('MERN2', 3);