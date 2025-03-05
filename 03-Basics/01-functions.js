function sayMyName(){
    console.log("My name is: Deepesh Katudia ");
}

sayMyName() // execute the function

// function addTwoNumbers(number1,number2){ // number1 and number2 are parameters
//     console.log( number1 + number2); // console log will print the result, will not ruturn the result 
// }
// addTwoNumbers(10,20) // 10 and 20 are arguments

function addTwoNumbers(number1,number2){ // number1 and number2 are parameters
    let result = number1 + number2;
    return result;
    console.log("Hello World"); // after return statement in function no code will be executed
}
const result = addTwoNumbers(10,20) // 10 and 20 are arguments
console.log(result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please provide username");
        return
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Deepesh"));
console.log(loginUserMessage()); // undefined just logged in


// shopping cart logic e - commerce app 

function calulateCartPrice(val1, val2, ...num1){ // ... is called rest operator , wrap all the numbers in an array, val1 = 1000, val2 = 2000, num1 = [3000, 4000, 5000]
     return num1;
}

console.log(calulateCartPrice(1000, 2000, 3000, 4000, 5000)); // 1000

// passign function into an object 
const user = {  // object
    username : "Deepesh",
    password : "123456"
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and password is ${anyobject.password}`);
}
handleObjects(user);
handleObjects({
    username : "Deepesh",
    password : "456000"
})



// passing function into an array
const myNewArray = [1,2,3,4,5,6,7,8,9,10];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));


