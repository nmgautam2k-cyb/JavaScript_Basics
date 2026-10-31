/*
//explicit - Manual Conversion
let age="22"
let result=Number(age);
console.log(age);
console.log(typeof result);

//implicit - Automatic Conversion
let a=10;       //concatination
let b="20";

let res=a+b;
console.log(res);

let c=10;       //subratction operator automatically converts string to number
let d="5";

let final=c-d;
console.log(final);
console.log(typeof final);

//Nullish Coalescing
let age2=null;
let res2= age2 ?? 22;
console.log(res2);

let age3=43;
let res3= age3 ?? 45;
console.log(res3);

//Function and Function Expression

const user= function(){
    console.log("HEllO");
}
user();

//Arrow Function with two parameter
const demo=(a,b)=>{
    console.log(a**b);
}
demo(5,3);

//Arrow Function with one parameter
const demo2=(name)=>{
    console.log(`Hello my name is ${name}`);
}
demo2("Gautam");

//with return

const demo3=(a,b)=> a+b;
console.log(demo3(50,34));

*/

//URI ENCODING(PERCENTAGE ENCODING)

let name="Gautam NM";
console.log(encodeURIComponent(name));