// singleton, always with constructor 

Object.create(null) // empty object

// 1. Object literal

const mysym = Symbol('my');


const JsUser = {
    name: 'Deepesh',
    age: 23,
    [mysym] : 'Hello', // [...] use this to be able to use the symbol as a key
    email: 'deepeshkatudia@gmail.com',
    isloggedin: true,
    LastLogin: ['10-10-2021', '10:10:10'],
}

console.log(JsUser.email);
console.log(JsUser['email']); // Alternate and better way to acces the object properties
console.log(JsUser[mysym]); // Symbol is not iterable
console.log(typeof(mysym)); // Symbol

// Object.freeze(JsUser); // freeze the object, no changes can be made to the object
JsUser.name = 'Deepesh Katudia';
console.log(JsUser); // Deepesh

JsUser.greeting = function() {
    console.log('Hello');
}


JsUser.greetingTwo = function() {
    console.log(`Hello, ${this.name}`); // String Interpolation
}
console.log(JsUser.greeting()); // undefined
console.log(JsUser.greetingTwo()); // function 






