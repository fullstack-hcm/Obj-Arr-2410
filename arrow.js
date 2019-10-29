function demo() {
    console.log(`hello wolrd`);
    console.log(this); // refer global obj
} 

let _demo = function(name, age) {
    console.log(`hello ${name}`);
}

let demo3 = (name) => {
    console.log(`hello ${name}`);
}

let demo4 = name => {
    console.log(`hello ${name}`);
}

let demo2 = (name, age) => console.log(`hello ${name}, ${age}`); // this: undefined