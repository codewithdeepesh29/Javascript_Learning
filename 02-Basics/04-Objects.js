// const tinderUser = new Object(); // Singleton Object

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Deepesh"
tinderUser.age = 23
tinderUser.isLoggedin = true

console.log(tinderUser); // empty object

const regularUser = {
    email : "deepeshkatudia@gmail.com",
    fullname : {
        firstname : "Deepesh",
        lastname : "Katudia"
    }
}

console.log(regularUser.fullname?.firstname); // multiple objects in an object

const obj = {
    1 : "a",
    2 : "b",
}

const obj2 = {
    3 : "c",
    4 : "d",
}

const obj3 = Object.assign({}, obj, obj2); // merge the two objects, {} the best practise to create a new object act as target {} and source 
console.log(obj3);
const obj4 = {...obj, ...obj2}; // spread operator
console.log(obj4);


const Users = [{
    id : 1,
    name : "Deepesh"
},
{
    id : 2,
    name : "Katudia"
}]

Users[1].name

console.log(Object.keys(tinderUser)); // returns the keys of the object
console.log(Object.values(tinderUser)); // returns the values of the object
console.log(Object.entries(tinderUser)); // returns the key value pair of the object

console.log(tinderUser.hasOwnProperty('name')); // returns true if the object has the property

const course = {
    coursename : "Javascript",
    price : "1000",
    courseInstructor : "Deepesh", 
}
// course.courseInstructor

const {courseInstructor : instruct} = course; // {} means Destructuring
console.log(instruct);
 


