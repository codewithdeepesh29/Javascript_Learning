const score = 100
console.log(score);
console.log(typeof(score));


const balance = new Number(200)
console.log(balance);
console.log(typeof(balance));

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // use in e-commerce application

const othernumber = 20.26948
console.log(othernumber.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // by default of US value en-IN for indian type  "for counting zeros"



// ******************** MATHS **************************

console.log(Math);

console.log(Math.abs(-456));

console.log(Math.round(4.4));

console.log(Math.ceil(4.2));  // choose top value

console.log(Math.floor(4.2)); // choose down value

console.log(Math.min(4, 3, 10, 5, 3 ,20));

console.log(Math.random());  // values comes between 0 and 1 
console.log(Math.floor(Math.random()*10) + 1); // min value will come is 1 and not 0 and if case is 0.04 then do +1 , values will come between 1 and 9


const min = 20
const max = 30

console.log(Math.floor((Math.random() * (max - min - 1)) + min )); // Formula to generate the random number on the basis of min and max values 






