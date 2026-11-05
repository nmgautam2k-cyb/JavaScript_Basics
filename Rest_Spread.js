//Spread Operator - Is used to copy or expand one array or object.(Syntax ...)
//Spread Operator with Array
let num1=[10,20,30];
let num2=[40,5,7]

num=[...num1,...num2,85,94,"Gautam"];
console.log(num);

//Spread Operator with Object
let User={
    name:"Gautam",
    Age:22,
    Gender:"Male"
};
let Other={
    Mobile:754499954,
    email:"nmagautam@gmail.com"
}

let info={...User,...Other,"Address":"Salem"};
console.log(info);

//Variable
let name="gautam";
let res=[...name];
console.log(res);     //Splits into a character and place into a array

//REST PARAMETER - Allows function to accept multiple argument and collect them into a single array(SYNTAX - ...)
//We will use rest parameter when we don't know how many arguments the function will gonna receive.
function user(...name){
    console.log(name);
}
user("Gautam","gokul","Sabeek","Chandru");


//TotalCalculator
function calculateTotal(...num){
    let total=0;
    for(number of num){
        total=total+number;
    }
    return total;
}
console.log(calculateTotal(12,34,55,66,777,8,97,7));