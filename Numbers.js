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
