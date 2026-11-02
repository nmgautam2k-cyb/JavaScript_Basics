/*
//String Methods
let name="Gautam";
name.toUpperCase();    //it wont work because Strings are immutable\
console.log(name);     //we cant modify existing 

//upper and lower case
name=name.toUpperCase(); 
console.log(name);
console.log(name.toLowerCase());  

//Searching Methods
let user="   Alexander is a boy   ";
console.log(user[5]);
console.log(user.indexOf("n"));   //To find Index of character
console.log(user.lastIndexOf(" is "));  //to find index of a word in a sentence
console.log(user.includes("a"));    //returns boolean value if it is found
console.log(user.startsWith("Alex")); //checks whether it starts with given letter or word
console.log(user.endsWith("boy"));  //checks whether it ends with given letter or word
console.log(user.search(/boy/));    //shows index number
console.log(user.match(/Alexander/));   //returns an array conatainer with additional information

console.log(user.slice(3,9));     //gives from start to end 
console.log(user.slice(-6));      //last index is -1

console.log(user.substring(2,5));  //returns like slice but slice returns negative numbers where substring can't.but substring can perform reverse positive order.
console.log(user.at(-7));          //similar like indexOf() but it supports negative index

console.log(user.trim())           //removes Whitespaces spaces 
console.log(user.trimStart());     //Removes starting whitespace
console.log(user.trimEnd());     //Removes ending whitespace

let user2="Hello Java,Java is efficient to use";   //Replace a word with given word
console.log(user2.replace("Java","JavaScript"));
console.log(user2.replaceAll("Java","JavaScript"));

console.log(user2.split(","));    //Splits into Two

console.log(user2 == user);      //check where two strings are equal

s1=21;           
s2="21"
console.log(s1==s2);
console.log(s1===s2);

let a=s1+s2;      //concat(combining two variables)
console.log(a);


//Array  is a data structure where it stores multiple values in a single variable. Array can store different datatypes.
//ARRAY METHODS
let user=["Gautam", "Gokul", "NM"];
console.log(user);
console.log(user[2]);
console.log(user.length);   //Finding Length
user[2]="gokul";
console.log(user);
*/

let arr=["user1", "user2", "user3", "user4"];
/*
//pushes value at end 
arr.push("user5");                              
console.log(arr);

//Removes Element at end
arr.pop();
console.log(arr); 

//adds element at beggining
arr.unshift("User_main");
console.log(arr);

//removes elements from beggining
arr.shift();
console.log(arr);


//Searching
console.log(arr.includes("user3"));

//indexOf
console.log(arr.indexOf("user4"));
*/
//ITERATION
//for of for (iterate values one by one)(Loop statement)
let name=["Gautam", "Gokul", "Alex", "Sanjay"];

/*
for(let names of name){
    console.log(names);
    break;                      //Break and Continue Supported
}
    */

for(let names of name){
    if(name=="Alex"){

    }
    continue;     
                 //Break and Continue Supported
}
/*
//for in for(Iterate values by index number)
for(let index in name){
    console.log(index);
}

//forEach (Array Method)
name.forEach((names)=>{
    console.log(names);
});
*/




//filter(), find(), findIndex(), reduce(), slice(), splice(), sort() and reverse().


//Map is ued to transform every element of an array and return a new array
 let arr2=["Laptop", "Mobile", "TV", "Refridgelator", "Washing Machine"];
 let res=arr2.map(arrr2=>)
