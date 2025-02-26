const marvel_heroes = ["Thor","Ironman","Hulk","Captain America","Black Widow","Hawkeye"];
const dc = ["Superman","flash","Batman"];

marvel_heroes.push(dc);

console.log(marvel_heroes); // push and concat is same in case of arrays

// concat will return the new array and push will return the length of the new array

const all_heroes = marvel_heroes.concat(dc);
console.log(all_heroes);

const all_new = [...marvel_heroes, ...dc]; // spread operator, that means it will take all the elements of the array and put it in the new array
console.log(all_new);


const another_array = [1, 2, [3, 4], 5,[ 6, [7, 8], 9], 10];

const real_another_array = another_array.flat(Infinity); // flat method is used to flatten the array, it takes the depth as the parameter
console.log(real_another_array);

console.log(Array.isArray(real_another_array)); // returns true if the object is an array
console.log(Array.from("Deepesh")); // converts the string into an array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // converts the arguments into an array