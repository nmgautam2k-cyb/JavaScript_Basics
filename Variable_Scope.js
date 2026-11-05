//Global Scope - A variable declared outside all functions and blocks is known as Global Scope
//it can be accessed from anywhere in the program
/*
let username="Gautam";  //global varaible
function display(){
    console.log(username);
}
display();
console.log(username);

//Function Scope - A variable declared inside a function can be accessed within that function
function display1(){
    let name="gokul";

    console.log(name);
}

display1();
console.log(name);     //can't Access from outside function

//Block Scope - is a section enclosed with curly bracers{} where initialized value can be accessed within that scope
//varibles using let,const inside a block can only accessed within that block

if(true){
    var a=10;
    let b=20;
    const c=30;   
}
console.log(a);     //10
console.log(b);     //Error- Outside block scope
console.log(c);     //Error


//Closure - the function is created inside a function, inner function executes even after outer function stops execution
function outer() {
  let name = "GautamNM";

  function inner() {
    console.log(name);
  }
  inner();
}
outer();

//Using Loop
function outerFun() {
  let num = 10;

  function innerFun() {
    for (let i = 1; i <=num; i++) {
      console.log(i);
    }
  }
  innerFun();
}
outerFun();


//Bank Applications
function bankAcc(){
    let bal=5000;

    return{
        deposit(amt){
            bal+=amt;
            console.log(`${amt} is Deposited to your account and your balance is ${bal}`);
        },
        withdraw(amt){
            bal-=amt;
             console.log(`${amt} is withdrawed from your account and your balance is ${bal}`);
        }
    }
}
let acc=bankAcc();
acc.deposit(10000);
acc.withdraw(3000);
*/

//HOISTING with variable    - varaible can be accessed before its declaration
var a;                          //undefined
console.log(a);
a=10;

//HOSITING with Function    -  Function can be accessed before its declaration
display();                      
function display(){
    console.log()
}


