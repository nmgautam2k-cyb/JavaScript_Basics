/*
let name = "Gautam";

function display() {
    let age=22;
    console.log(name);
}
console.log(age);
display();


//callback function
function user(name){
    console.log("Hello "+ name);
}

function display(callback){
    console.log("display function executes first");
    callback("Gautam");
}
display(user);


let price=500;
let quantity=3;

let res=price**quantity;
console.log(res);


//FUNCTION(Function is a block of code where we can reuse and designed to perform specific tasks when called)
function user(){           
    console.log("hello")
}
user();

function user2(a,b){
    console.log(a+b);
}
user2(10,2);  //with parameter and arguments


function user2(b,c){
    return b+c;
}

let a=user2(2,5);
console.log(a);
console.log(user2(2,6));   //with return

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