//String Methods
"use strict"            //feature in JS that follows strict rules, Prevents common coding mistakes such as syntax,declaration etc
username="gautam";
console.log(username);  //Refernce Error

let name="Hello,world  "

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());           //removes unwanted spaces
console.log(name.charAt(2));
console.log(name.includes("NM"));  //Boolean Values
console.log(name.indexOf("l"));    //-1 if not found
console.log(name.slice(2,6));
console.log(name.replace("gau","Gau"));

let a="java is easy and java is powerful";
console.log(a.replaceAll("java","javaScript"));

console.log(name.concat(" ",a)); //String method
console.log(name+a);  //Normal method
console.log(name.startsWith("Hello"));
console.log(name.endsWith(" "));
console.log(name.split(","))


//String
//String Methods
let name1="Gautam";
name.toUpperCase();    //it wont work because Strings are immutable\
console.log(name1);     //we cant modify existing 

//upper and lower case
name=name.toUpperCase(); 
console.log(name);
console.log(name.toLowerCase());  

//Searching Methods
let user1="   Alexander is a boy   ";
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

let d=s1+s2;      //concat(combining two variables)
console.log(a);
 
//PRACTICAL IMPLEMENTATION(VALIDATATION)
let user3="   Gautam_NM";
user3=user3.trim();

if(user3.length>=5 && username.includes("Gautam_NM")){
    console.log("Valid User");
}
else{
    console.log("Invalid User");
}


//Garbage Collection
/*
How does Garbage Collection work?
JavaScript engines commonly use a technique called Mark-and-Sweep.

It works in two main stages:

Step 1: Mark
The Garbage Collector identifies objects that are still reachable from important starting points (called roots), such as active variables and execution contexts.

Step 2: Sweep
It identifies unreachable objects and reclaims their memory.
*/