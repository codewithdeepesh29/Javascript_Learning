const myArr = [1, 2, 3, 4, 5, true, "Deepesh", "Mitesh"]; // ANy datatypes can be stored in an array

const myHeroes = ["Superman", "Batman",]

const myArr2 = (1, 2, 3, 4)



console.log(myArr[1]);

// Array Methods 

myArr.push("Ritesh") // Adds element at the end of the array
myArr.pop() // Removes the last element from the array
myArr.shift() // Removes the first element from the array, no paramater required
myArr.unshift("Gitesh") // Adds element at the beginning of the array, not to use often as it changes the index of all the elements


console.log(myArr.includes("Deepesh")); // Returns true if the element is present in the array
console.log(myArr.indexOf("Deepesh")); // Returns the index of the element in the array

const newArr = myArr.join(" "); // Joins the elements of the array with the specified separator, coverts into string 
console.log(newArr);

// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3); // Returns the selected elements in an array, does not change the original array
console.log(myn1);
console.log("B", myArr);

// the splice method changes the original array, and on the other hand slice operation does not change the original array

const myn2 = myArr.splice(1, 3); 
console.log(myn2);

console.log(myArr);
