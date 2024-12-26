const name = "Deepesh"
const repocount = 10

console.log(name + repocount + "value"); // concatenate string do not use this outdated


// modern way to use the string and ${} is use to call any variables present in the code 
// String Inter Polation 
console.log(`Hello my name is ${name} and my repository count is ${repocount}`);

// use string using object 

const gameName = new String("Deepesh-haresh-katudia")

console.log(gameName[1]);  // The string is stored in the key value pair you can access it by referenceing its location 

console.log(gameName.length); // to access the length of the strings 

// to access the prototypes methods 

console.log(gameName.toUpperCase()); // the string is converted to uppercase using function. 

console.log(gameName.charAt(3));  // to access which character is at which position 

console.log(gameName.indexOf("p"));

const newString = gameName.substring(0,5) // access strings through start and end positions 
console.log(newString);

const anotherString = gameName.slice(-4, 6)
console.log(anotherString);

const newStringOne = "   Deepesh.k    "   // string with spaces
console.log(newStringOne)
console.log(newStringOne.trim());  //  this will remove the unwanted space from the string / forms when you use in website. 


const url = "https://google.com"
console.log(url.replace('google', 'deepeshkatudia'));
console.log(url.includes('deepesh'));
console.log(url.includes('z'));

console.log(gameName.split('-')); // split the string with the seperator


