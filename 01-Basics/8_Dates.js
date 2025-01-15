let mydate = new Date()

console.log(mydate.toString());

console.log(mydate.toDateString());

console.log(mydate.toTimeString());

console.log(mydate.toISOString());

console.log(mydate.toJSON());   // ISO and JSON is same 

console.log(mydate.toLocaleDateString());

console.log(typeof(mydate));

let mycreateddate = new Date(2023, 0, 23) // months starts from 0 in JS 
console.log(mycreateddate.toDateString());

let mycreateddate1 = new Date("01-14-2023")
console.log(mycreateddate1.toLocaleString());

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());


// Most useful 

newDate.toLocaleDateString('default',{
    weekday : 'long',
    
})


