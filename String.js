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