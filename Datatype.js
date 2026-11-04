/*
//confirm("Are You Suure");
//Template Strings
let name="Gautam";
let age=22
console.log(`my name is ${name} and my age is ${age}`);

//PRIMITIVE DTYPES
//STRING
let s1="gautam";
console.log(s1);

//BOOLEAN
let b1=true;
console.log(b1);

let b2=false;
console.log(b2);

//NULL
let age=null;
console.log(age);

//UNDEFINED
let age2;
console.log(age2);

//SYMBOLS(intoduced in ES6)
let sy1=Symbol("Gautam");
let sy2=Symbol("Gautam");
console.log(sy1 == sy2);

//BigInt
let b=BigInt("01010110101100111000000011111111");
console.log(b);


//NUMBERS
let n1=33;
console.log(n1);

let n3 = Infinity;
console.log(n3)
console.log(typeof Infinity);


console.log(10/0);         //Infinity
console.log(-10/0);       // -Infinity
console.log("Gautam"/10);  //NaN (Not A Number)
console.log(typeof NaN);  //Number


//NUMBER METHODS - JS provides inbuit-in-methods to work with numbers
//Number to String
let num=33;
res=num.toString();
console.log(res);
console.log(typeof res);

//toFixed() - Controls number of digits after decimal points
let price=99.566788;
console.log(price.toFixed(3));

let price2=50;
console.log(price2.toFixed(5)); // Also adds digits after decimal points

//Conversion
let a='100';
let b=Number(a);
let c=250.544;
let d="20.6";

console.log(b);
console.log(typeof b);  //Number

console.log(Number(true));  //1
console.log(Number(false)); //0
console.log(Number("Gautam")) //NaN

//Float to Number
console.log(parseInt(c));
console.log(parseFloat(d));  //Extracts Decimal from string

//Math Objects
console.log(Math.round(10.7));
console.log(Math.floor(10.9)); //removes decimal
console.log(Math.ceil(10.8)); //rounds up
console.log(Math.max(10,20,40,50));
console.log(Math.min(10,5,11,4));
console.log(Math.random());
*/

//String
//String Methods
let name="Gautam";
name.toUpperCase();    //it wont work because Strings are immutable\
console.log(name);     //we cant modify existing 

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

//Non-Primitive Datatype
//OBJECT

let user={
    name:"Gautam",
    age:22,
    Dept:"MCA"
};


//SYMBOL
let id1=Symbol(63);  // stored as unique value
let id2=Symbol(63);

console.log(id1==id2);

//Type of
let a=100;
let c=25.4455555555;
let b=1.00;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
*/
