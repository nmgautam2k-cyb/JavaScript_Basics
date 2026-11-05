//JS provides builtin Date object to work with date and time
/*

let today=new Date();      //Creating Date
console.log(today);

//Using date String 
let date=new Date("05, 11, 2026");
console.log(date);

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
*/

//Manipulating date
let today=new Date
today.setDate(today.getDate()+1)
console.log(today);


/*

//PRACTICAL(USER REGISTRATION DATE)
let user={
    name:"gautam",
    registration_date: new Date()
};

console.log(user.name);
console.log(user.registration_date.toDateString());
*/