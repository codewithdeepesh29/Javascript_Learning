let score = "33abc"  

// let score = null = 0 

// let score = undefined = NaN



console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

/* 
    33abc = NaN
    abc = NaN
    null = 0
    undefined = NaN
    boolean = true - 1 and false - 0
*/

let isLoggedin = 1 
let booleanisLoggedin = Boolean(isLoggedin)

console.log(isLoggedin);

console.log(booleanisLoggedin);

// "" = false
// "deepesh" = true

let somenumber = 55

let stringnumber = String(somenumber)

console.log(stringnumber);
console.log(typeof stringnumber);


// **************************Operations***************************

let value = 5
let negValue = -value
console.log(negValue);

console.log(2+4);
console.log(2-4);
console.log(2/4);
console.log(2*4);
console.log(2**4);  // 2 to the power 4
console.log(2%4);


let str1 = "Deepesh"
let str2 = " Katudia"

let str3 = str1+str2
console.log(str3);

console.log(1+"2");
console.log("1"+2);
console.log(1+2);
console.log(1+"2"+3);

console.log(+true);

let gamecounter = 100
gamecounter++; // increment to 1 
console.log(gamecounter);

