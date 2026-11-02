
/*
let a=10;
let b=5;

//Arithmetic Operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Assignment Operator
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);
console.log(a**=b);


//comparison Operator
let a=10;
let b="10";

console.log(a==b);
console.log(a===b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a!=b);
console.log(a!==b);

//Logical Operators(Combining Multiple condition)
//( && ) 
const name="Gautam";
let age=22;

if(name=="Gautam" && age==22){
    console.log("Allowed");
}
else{
    console.log("Not allowed");
}

// ( || )
const name="Alex";
let age=22;

if(name=="Gautam" || age==22){
    console.log("allowed");
}
else{
    console.log("Not allowed");
}

// ( ! )
let isLoggedIn=false;
console.log(!isLoggedIn);

console.log(true && false);

//Ternary Operator 
let b=33;
let c=21;

let res= b>c?"A is more than B":"B is more than A";
console.log(res);

//nested ternary
let marks=56;

let res2= marks>90?"A Grade": marks>70?"B Grade": marks>50?"Grade C":"Fail";
console.log(res2);

//conditional statement
let w="Pending"
switch(w){
    case "Completed":
        console.log("task is completed");
        break;
    case "Pending":
        console.log("task is pending");
        break;
    case "Progress":
        console.log("task is on progress");
}
*/
//comparison operator
let a=10;
let d="10";

console.log(a==d);
console.log(a===d);
console.log(a!=d);
console.log(a!==d);
console.log(a<d);
console.log(a>d);
console.log(a<=d);
console.log(a>=d);

//nullish coalesing
let user;
console.log(user);

let res=user??"admin";
console.log(res);

//logical operator combines multiple condition(&& , || , !)
//switch is a conditional branching statement and it is used to execute the different blocks of code based on value of an expression