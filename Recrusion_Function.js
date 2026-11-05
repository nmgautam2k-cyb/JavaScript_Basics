//A Function call by itself is know as Recrussive Function
/*
function printNum(num){
    if(num>5){
        return;
    }
    console.log(num);
    printNum(num+1);
}
printNum(1);


//print 5 to 1
function printNum1(num1){
    if(num1==0){
        return;
    }
    console.log(num1);
    printNum1(num1-1);
}
printNum1(5);
*/

//Factorial
function factorial(num2) {
  if (num2 == 0) {
    return 1;
  }
  return num2 * factorial(num2 - 1);
}
factorial(5);

//call stack is a javascript Mechanism and it is used to track the function calls, it follows Last In First Out(LIFO)

function first() {
  second();
  console.log("This is First function");
}
function second() {
    third()
  console.log("This is Second function");
}
function third() {
  console.log("This is Third function");
}
first();


//Login Validation code
function login(username, password){
    console.log("login started");
    if(UserName(username)){
        if(UserPass(password)){
            console.log("Login Successfull");
        }
        else{
            console.log("Login failed");
        }
        console.log("Login Finished");
    }
}

function UserName(username){
    console.log("validating Username");
    return username=="Gautam";
}

function UserPass(password){
    console.log("Validating Pass");
    return password===1234;
}
login("Gautam",1234);
