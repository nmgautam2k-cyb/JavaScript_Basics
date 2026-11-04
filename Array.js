//Array  is a data structure where it stores multiple values in a single variable. Array can store different datatypes.
//ARRAY METHODS
/*
let user=["Gautam", "Gokul", "NM"];
console.log(user);
console.log(user[2]);
console.log(user.length);   //Finding Length
user[2]="gokul";
console.log(user);


//Ways to create Array - Using Array Constructor
let students= new Array("Gautam", "Chandru" ,"Sabeek", "Iniyan");
console.log(students);
console.log(students.length);
console.log(Array.isArray(students));
console.log(typeof students);        //Array is a special object


//Array Methods
let arr = ["user1", "user2", "user3", "user4"];
/*
//pushes value at end 
arr.push("user5");                              
console.log(arr);

//Removes Element at end
arr.pop();
console.log(arr); 

//Adds element at beggining
arr.unshift("User_main");
console.log(arr);

//Removes elements from beggining
arr.shift();
console.log(arr);


//splice - array.splice(start,dltcount, Update)
arr3=[12,3,"Hello world", null,undefined];
arr3.splice(1,2);    //Removes 2 element
console.log(arr3); 

arr3.splice(1,0,"Added");  //add element at 1st index without removing or overriding other elements

arr3.splice(0,1,"Replaced"); //Deleted and Replaced
console.log(arr3);

//slice - Extracts with start and end element
console.log(arr3);
let res=arr3.slice()  //Extracts Portion

//Find - First Element that satisfy the condition
let ranks=[44,54,33,98,66,45,32];
//let res2=ranks.find(rank=>rank>43);
//console.log(res2);

//Filter - it satify the condition
let res3=ranks.filter(rank=>rank>50);
console.log(res3);

//Searching
console.log(arr.includes("user3"));

//IndexOf
console.log(arr.indexOf("user4"));

//ITERATION
//for of for (iterate values one by one)(Loop statement)
let name = ["Gautam", "Gokul", "Alex", "Sanjay"];

for(let names of name){
    console.log(names);
    break;                      //Break and Continue Supported
}
    
for (let names of name) {
  if (name == "Alex") {
  }
  continue;
  //Break and Continue Supported
}

//for in for(Iterate values by index number)
for(let index in name){
    console.log(index);
}

//forEach (Array Method)
name.forEach((names)=>{
    console.log(names);
});

//PRACTICAL IMPLEMENTATION(Product List)
let products=["Laptop", "Mobiles","Keyboard", "Mouse"];

console.log(products.length);
for(let product of products){
  console.log("Total products: ", product);
}
*/

/*
//Map is used to transform every element of an array and return a new array
let arr2 = ["Laptop", "Mobile", "TV", "Refridgelator", "Washing Machine"];
let res = arr2.map((item) => item);
console.log(res);

let user = [
  { id: 1, name: "Gautam", dept: "MCA" },
  { id: 2, name: "Gokul", dept: "MBA" },
  { id: 3, name: "Sabeek", dept: "MCA" },
];
let res2=user.map(users=>users.name);
console.log(res2);
*/

let numbers = [10, 20, 30];
let num=10;

console.log(numbers[Symbol.iterator]);   //Iterable
console.log(num[Symbol.iterator]);       //Not a Iterable