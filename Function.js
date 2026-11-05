/*
let name = "Gautam";

function display() {
    let age=22;
    console.log(name);
}
console.log(age);
display();


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

//callback function (A Function is passed as an arguments to another Function)
function user(name){
    console.log("Hello "+ name);
}

function display(callback){
    console.log("display function executes first");
    callback("Gautam");
}
display(user);


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


 //Anonymous Function (Function without name)
let details=function(name,age){
    return `My name is ${name} and my age is ${age}`
}
console.log(details("Gautam",24));


//Named Function Expression(NFE) - its like function expression but with name, Function name is only accessible only within function(ex: Recrussion)
let count=0;
const demo=function count(num){
    if(num==10){
        return;
    }
    count(num+1);       //count is used inside function
    console.log(num);
}
demo(1);  //can use this outside function
*/

//keyword - new Function (JS allows us to create function dynamically using new Function());
let add=new Function("a","b", "return a+b");
console.log(add(10,20));




/*
//URI ENCODING(PERCENTAGE ENCODING)
let name="Gautam NM";
console.log(encodeURIComponent(name));
*/