
confirm("Are You Suure");
//Template Strings
let name="Gautam";
let age1=22
console.log(`my name is ${name} and my age is ${age1}`);

//PRIMITIVE DTYPES
//STRING
let s1="gautam";
console.log(s1);

//BOOLEAN
let b1=true;
console.log(b1);

let b2=false;
console.log(b2);

//NULL
let age=null;
console.log(age);

//UNDEFINED
let age2;
console.log(age2);

//SYMBOLS(intoduced in ES6)
let sy1=Symbol("Gautam");
let sy2=Symbol("Gautam");
console.log(sy1 == sy2);

//BigInt
let a1=BigInt("01010110101100111000000011111111");
console.log(a1);


//SYMBOL
let id1=Symbol(63);  // stored as unique value
let id2=Symbol(63);

console.log(id1==id2);

//Type of
let a=100;
let c=25.4455555555;
let b=1.00;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
